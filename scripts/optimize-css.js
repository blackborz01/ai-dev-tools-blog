// CSS optimization script - preserves all animations
const fs = require('fs').promises;
const path = require('path');
const postcss = require('postcss');
const cssnano = require('cssnano');

const CSS_DIR = path.join(process.cwd(), '.next', 'static', 'css');

async function optimizeCSS() {
  console.log('🎨 Starting CSS optimization (preserving all animations)...');
  
  try {
    // Find all CSS files
    const files = await findCSSFiles(CSS_DIR);
    
    for (const file of files) {
      console.log(`  Optimizing ${path.basename(file)}...`);
      
      const css = await fs.readFile(file, 'utf8');
      
      // Optimize with cssnano but preserve animations
      const result = await postcss([
        cssnano({
          preset: ['default', {
            // Preserve all animations and keyframes
            reduceIdents: false,
            mergeIdents: false,
            discardUnused: false,
            // Keep all animation properties
            animation: false,
            // Optimize but don't break
            calc: true,
            colormin: true,
            convertValues: true,
            discardComments: { removeAll: true },
            discardDuplicates: true,
            discardEmpty: true,
            discardOverridden: true,
            mergeLonghand: true,
            mergeRules: true,
            minifyFontValues: true,
            minifyGradients: true,
            minifyParams: true,
            minifySelectors: true,
            normalizeCharset: true,
            normalizeDisplayValues: true,
            normalizePositions: true,
            normalizeRepeatStyle: true,
            normalizeString: true,
            normalizeTimingFunctions: true,
            normalizeUnicode: true,
            normalizeUrl: true,
            normalizeWhitespace: true,
            orderedValues: true,
            reduceTransforms: true,
            svgo: true,
            uniqueSelectors: true,
            // Don't touch z-index (can break layers)
            zindex: false,
          }]
        })
      ]).process(css, { from: file, to: file });
      
      // Write optimized CSS
      await fs.writeFile(file, result.css);
      
      const originalSize = Buffer.byteLength(css);
      const newSize = Buffer.byteLength(result.css);
      const saved = originalSize - newSize;
      const percent = ((saved / originalSize) * 100).toFixed(1);
      
      console.log(`    ✅ Saved ${saved} bytes (${percent}%)`);
    }
    
    console.log('✅ CSS optimization complete!');
    
  } catch (error) {
    console.error('❌ CSS optimization failed:', error);
    process.exit(1);
  }
}

async function findCSSFiles(dir) {
  const files = [];
  
  try {
    const items = await fs.readdir(dir, { withFileTypes: true });
    
    for (const item of items) {
      const fullPath = path.join(dir, item.name);
      
      if (item.isDirectory()) {
        files.push(...await findCSSFiles(fullPath));
      } else if (item.name.endsWith('.css')) {
        files.push(fullPath);
      }
    }
  } catch (err) {
    // Directory might not exist yet
  }
  
  return files;
}

if (require.main === module) {
  optimizeCSS();
}

module.exports = { optimizeCSS };
