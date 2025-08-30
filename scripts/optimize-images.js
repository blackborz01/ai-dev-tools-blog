#!/usr/bin/env node

/**
 * Image Optimization Script
 * Optimizes all images in the public directory for better performance
 */

const fs = require('fs').promises;
const path = require('path');
const sharp = require('sharp');

const SUPPORTED_FORMATS = ['.jpg', '.jpeg', '.png', '.webp'];
const PUBLIC_DIR = path.join(__dirname, '..', 'public');
const SIZES = [640, 750, 828, 1080, 1200, 1920];

async function optimizeImage(imagePath) {
  const ext = path.extname(imagePath).toLowerCase();
  const name = path.basename(imagePath, ext);
  const dir = path.dirname(imagePath);
  
  if (!SUPPORTED_FORMATS.includes(ext)) {
    return;
  }

  try {
    const image = sharp(imagePath);
    const metadata = await image.metadata();
    
    console.log(`📸 Optimizing: ${path.basename(imagePath)}`);
    
    // Generate WebP version
    const webpPath = path.join(dir, `${name}.webp`);
    await image
      .webp({ quality: 85 })
      .toFile(webpPath);
    console.log(`  ✅ WebP created: ${name}.webp`);
    
    // Generate AVIF version for modern browsers
    const avifPath = path.join(dir, `${name}.avif`);
    await image
      .avif({ quality: 80 })
      .toFile(avifPath);
    console.log(`  ✅ AVIF created: ${name}.avif`);
    
    // Generate responsive sizes
    for (const size of SIZES) {
      if (metadata.width >= size) {
        const resizedPath = path.join(dir, `${name}-${size}w${ext}`);
        await sharp(imagePath)
          .resize(size, null, {
            withoutEnlargement: true,
            fit: 'inside'
          })
          .jpeg({ quality: 85, progressive: true })
          .toFile(resizedPath);
        console.log(`  ✅ Resized: ${name}-${size}w${ext}`);
        
        // Also create WebP version of resized image
        const resizedWebpPath = path.join(dir, `${name}-${size}w.webp`);
        await sharp(imagePath)
          .resize(size, null, {
            withoutEnlargement: true,
            fit: 'inside'
          })
          .webp({ quality: 85 })
          .toFile(resizedWebpPath);
      }
    }
    
    // Optimize the original
    if (ext === '.jpg' || ext === '.jpeg') {
      await sharp(imagePath)
        .jpeg({ quality: 85, progressive: true })
        .toFile(imagePath + '.tmp');
      await fs.rename(imagePath + '.tmp', imagePath);
      console.log(`  ✅ Original optimized`);
    } else if (ext === '.png') {
      await sharp(imagePath)
        .png({ compressionLevel: 9, progressive: true })
        .toFile(imagePath + '.tmp');
      await fs.rename(imagePath + '.tmp', imagePath);
      console.log(`  ✅ Original optimized`);
    }
    
  } catch (error) {
    console.error(`  ❌ Error optimizing ${imagePath}:`, error.message);
  }
}

async function scanDirectory(dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  const images = [];
  
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    
    if (entry.isDirectory() && !entry.name.startsWith('.')) {
      const subImages = await scanDirectory(fullPath);
      images.push(...subImages);
    } else if (entry.isFile()) {
      const ext = path.extname(entry.name).toLowerCase();
      if (SUPPORTED_FORMATS.includes(ext)) {
        images.push(fullPath);
      }
    }
  }
  
  return images;
}

async function main() {
  console.log('🚀 Starting image optimization...\n');
  
  try {
    const images = await scanDirectory(PUBLIC_DIR);
    console.log(`Found ${images.length} images to optimize\n`);
    
    for (const imagePath of images) {
      await optimizeImage(imagePath);
    }
    
    console.log('\n✨ Image optimization complete!');
  } catch (error) {
    console.error('❌ Error during optimization:', error);
    process.exit(1);
  }
}

// Run if called directly
if (require.main === module) {
  main();
}

module.exports = { optimizeImage, scanDirectory };
