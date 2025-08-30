// Font optimization script
const fs = require('fs').promises;
const path = require('path');

async function optimizeFonts() {
  console.log('🔤 Starting font optimization...');
  
  try {
    // Create font preload tags
    const fontPreloads = `
<!-- Font Preloading for Performance -->
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link rel="preload" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;900&display=swap" as="style" />
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;900&display=swap" media="print" onload="this.media='all'" />
<noscript>
  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;900&display=swap" />
</noscript>
`;

    // Create font-display CSS
    const fontDisplayCSS = `
/* Font Display Optimization */
@font-face {
  font-family: 'Inter';
  font-display: swap;
  font-weight: 400 900;
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}

/* Fallback font stack */
.font-sans {
  font-family: 'Inter', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
}

/* Optimize font rendering */
body {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-rendering: optimizeLegibility;
  font-synthesis: none;
}

/* Prevent FOIT (Flash of Invisible Text) */
.font-loading {
  visibility: hidden;
}

.fonts-loaded .font-loading {
  visibility: visible;
}
`;

    // Save font optimization files
    const publicDir = path.join(process.cwd(), 'public');
    await fs.mkdir(path.join(publicDir, 'fonts'), { recursive: true });
    
    await fs.writeFile(
      path.join(publicDir, 'fonts', 'preload.html'),
      fontPreloads.trim()
    );
    
    await fs.writeFile(
      path.join(publicDir, 'fonts', 'font-display.css'),
      fontDisplayCSS.trim()
    );
    
    // Create font loading detection script
    const fontLoadScript = `
// Font loading detection
(function() {
  if ('fonts' in document) {
    Promise.all([
      document.fonts.load('400 1em Inter'),
      document.fonts.load('700 1em Inter'),
      document.fonts.load('900 1em Inter')
    ]).then(function() {
      document.documentElement.classList.add('fonts-loaded');
    });
  }
})();
`;

    await fs.writeFile(
      path.join(publicDir, 'fonts', 'font-loader.js'),
      fontLoadScript.trim()
    );
    
    console.log('✅ Font optimization complete!');
    console.log('   📁 Created /public/fonts/preload.html');
    console.log('   📁 Created /public/fonts/font-display.css');
    console.log('   📁 Created /public/fonts/font-loader.js');
    
  } catch (error) {
    console.error('❌ Font optimization failed:', error);
    process.exit(1);
  }
}

if (require.main === module) {
  optimizeFonts();
}

module.exports = { optimizeFonts };
