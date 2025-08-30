// JavaScript optimization script
const fs = require('fs').promises;
const path = require('path');
const { minify } = require('terser');

const JS_DIR = path.join(process.cwd(), '.next', 'static');

async function optimizeJS() {
  console.log('⚡ Starting JavaScript optimization...');
  
  try {
    // Find all JS files
    const files = await findJSFiles(JS_DIR);
    let totalSaved = 0;
    
    for (const file of files) {
      // Skip already minified files
      if (file.includes('.min.') || file.includes('chunks')) {
        continue;
      }
      
      console.log(`  Optimizing ${path.basename(file)}...`);
      
      const code = await fs.readFile(file, 'utf8');
      const originalSize = Buffer.byteLength(code);
      
      // Skip if already minified (no newlines, very dense)
      const lineCount = code.split('\n').length;
      if (lineCount < 10 && originalSize > 1000) {
        console.log('    ⏭️  Already minified, skipping...');
        continue;
      }
      
      // Optimize with terser
      const result = await minify(code, {
        compress: {
          drop_console: process.env.NODE_ENV === 'production',
          drop_debugger: true,
          pure_funcs: ['console.log', 'console.info'],
          passes: 2,
          module: true,
          toplevel: true,
          unused: true,
          dead_code: true,
          inline: 2,
        },
        mangle: {
          safari10: true,
          toplevel: true,
        },
        format: {
          comments: false,
          ascii_only: true,
        },
        module: true,
        toplevel: true,
      });
      
      if (result.code) {
        await fs.writeFile(file, result.code);
        
        const newSize = Buffer.byteLength(result.code);
        const saved = originalSize - newSize;
        totalSaved += saved;
        const percent = ((saved / originalSize) * 100).toFixed(1);
        
        console.log(`    ✅ Saved ${saved} bytes (${percent}%)`);
      }
    }
    
    console.log(`✅ JavaScript optimization complete! Total saved: ${totalSaved} bytes`);
    
  } catch (error) {
    console.error('❌ JavaScript optimization failed:', error);
    process.exit(1);
  }
}

async function findJSFiles(dir) {
  const files = [];
  
  try {
    const items = await fs.readdir(dir, { withFileTypes: true });
    
    for (const item of items) {
      const fullPath = path.join(dir, item.name);
      
      if (item.isDirectory()) {
        files.push(...await findJSFiles(fullPath));
      } else if (item.name.endsWith('.js')) {
        files.push(fullPath);
      }
    }
  } catch (err) {
    // Directory might not exist yet
  }
  
  return files;
}

if (require.main === module) {
  optimizeJS();
}

module.exports = { optimizeJS };
