#!/usr/bin/env node

/**
 * Asset Compression Script
 * Compresses CSS, JS, and other assets after build
 */

const fs = require('fs').promises;
const path = require('path');
const zlib = require('zlib');
const { promisify } = require('util');

const gzip = promisify(zlib.gzip);
const brotli = promisify(zlib.brotliCompress);

const BUILD_DIR = path.join(__dirname, '..', '.next');
const STATIC_DIR = path.join(BUILD_DIR, 'static');

// File extensions to compress
const COMPRESSIBLE = ['.js', '.css', '.html', '.json', '.svg', '.xml', '.txt'];

async function compressFile(filePath) {
  const ext = path.extname(filePath).toLowerCase();
  
  if (!COMPRESSIBLE.includes(ext)) {
    return;
  }
  
  try {
    const content = await fs.readFile(filePath);
    const fileName = path.basename(filePath);
    
    // Skip if already compressed
    if (fileName.endsWith('.gz') || fileName.endsWith('.br')) {
      return;
    }
    
    console.log(`📦 Compressing: ${fileName}`);
    
    // Create Gzip version
    const gzipContent = await gzip(content, {
      level: 9 // Maximum compression
    });
    await fs.writeFile(`${filePath}.gz`, gzipContent);
    
    const originalSize = content.length;
    const gzipSize = gzipContent.length;
    const gzipRatio = ((1 - gzipSize / originalSize) * 100).toFixed(1);
    console.log(`  ✅ Gzip: ${(gzipSize / 1024).toFixed(2)}KB (${gzipRatio}% reduction)`);
    
    // Create Brotli version (better compression for modern browsers)
    const brotliContent = await brotli(content, {
      params: {
        [zlib.constants.BROTLI_PARAM_QUALITY]: 11, // Maximum compression
      }
    });
    await fs.writeFile(`${filePath}.br`, brotliContent);
    
    const brotliSize = brotliContent.length;
    const brotliRatio = ((1 - brotliSize / originalSize) * 100).toFixed(1);
    console.log(`  ✅ Brotli: ${(brotliSize / 1024).toFixed(2)}KB (${brotliRatio}% reduction)`);
    
  } catch (error) {
    console.error(`  ❌ Error compressing ${filePath}:`, error.message);
  }
}

async function scanDirectory(dir) {
  try {
    const entries = await fs.readdir(dir, { withFileTypes: true });
    const files = [];
    
    for (const entry of entries) {
      const fullPath = path.join(dir, entry.name);
      
      if (entry.isDirectory()) {
        const subFiles = await scanDirectory(fullPath);
        files.push(...subFiles);
      } else if (entry.isFile()) {
        files.push(fullPath);
      }
    }
    
    return files;
  } catch (error) {
    console.error(`Error scanning directory ${dir}:`, error.message);
    return [];
  }
}

async function generateCompressionReport(files) {
  let totalOriginal = 0;
  let totalGzip = 0;
  let totalBrotli = 0;
  
  for (const file of files) {
    try {
      const stats = await fs.stat(file);
      totalOriginal += stats.size;
      
      try {
        const gzipStats = await fs.stat(`${file}.gz`);
        totalGzip += gzipStats.size;
      } catch {}
      
      try {
        const brotliStats = await fs.stat(`${file}.br`);
        totalBrotli += brotliStats.size;
      } catch {}
    } catch {}
  }
  
  console.log('\n📊 Compression Report:');
  console.log('─'.repeat(50));
  console.log(`Original size: ${(totalOriginal / 1024 / 1024).toFixed(2)} MB`);
  if (totalGzip > 0) {
    const gzipRatio = ((1 - totalGzip / totalOriginal) * 100).toFixed(1);
    console.log(`Gzip size: ${(totalGzip / 1024 / 1024).toFixed(2)} MB (${gzipRatio}% reduction)`);
  }
  if (totalBrotli > 0) {
    const brotliRatio = ((1 - totalBrotli / totalOriginal) * 100).toFixed(1);
    console.log(`Brotli size: ${(totalBrotli / 1024 / 1024).toFixed(2)} MB (${brotliRatio}% reduction)`);
  }
  console.log('─'.repeat(50));
}

async function main() {
  console.log('🚀 Starting asset compression...\n');
  
  try {
    // Check if build directory exists
    await fs.access(BUILD_DIR);
  } catch {
    console.error('❌ Build directory not found. Please run "npm run build" first.');
    process.exit(1);
  }
  
  try {
    // Scan for all files in build directory
    const files = await scanDirectory(STATIC_DIR);
    const compressibleFiles = files.filter(file => {
      const ext = path.extname(file).toLowerCase();
      return COMPRESSIBLE.includes(ext) && !file.endsWith('.gz') && !file.endsWith('.br');
    });
    
    console.log(`Found ${compressibleFiles.length} files to compress\n`);
    
    // Compress each file
    for (const file of compressibleFiles) {
      await compressFile(file);
    }
    
    // Generate report
    await generateCompressionReport(compressibleFiles);
    
    console.log('\n✨ Asset compression complete!');
  } catch (error) {
    console.error('❌ Error during compression:', error);
    process.exit(1);
  }
}

// Run if called directly
if (require.main === module) {
  main();
}

module.exports = { compressFile, scanDirectory };
