const https = require('https');
const fs = require('fs');
const path = require('path');

const fonts = [
  {
    weight: 'regular',
    url: 'https://fonts.gstatic.com/s/inter/v13/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfAZ9hiA.woff2',
    filename: 'inter-v13-latin-regular.woff2'
  },
  {
    weight: '500',
    url: 'https://fonts.gstatic.com/s/inter/v13/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuI6fAZ9hiA.woff2',
    filename: 'inter-v13-latin-500.woff2'
  },
  {
    weight: '600',
    url: 'https://fonts.gstatic.com/s/inter/v13/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuGKYAZ9hiA.woff2',
    filename: 'inter-v13-latin-600.woff2'
  },
  {
    weight: '700',
    url: 'https://fonts.gstatic.com/s/inter/v13/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuFuYAZ9hiA.woff2',
    filename: 'inter-v13-latin-700.woff2'
  },
  {
    weight: '800',
    url: 'https://fonts.gstatic.com/s/inter/v13/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuDyYAZ9hiA.woff2',
    filename: 'inter-v13-latin-800.woff2'
  },
  {
    weight: '900',
    url: 'https://fonts.gstatic.com/s/inter/v13/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuBWYAZ9hiA.woff2',
    filename: 'inter-v13-latin-900.woff2'
  }
];

const downloadFont = (font) => {
  return new Promise((resolve, reject) => {
    const fontPath = path.join(__dirname, '..', 'public', 'fonts', font.filename);
    const file = fs.createWriteStream(fontPath);

    https.get(font.url, (response) => {
      response.pipe(file);
      file.on('finish', () => {
        file.close();
        console.log(`✅ Downloaded ${font.filename}`);
        resolve();
      });
    }).on('error', (err) => {
      fs.unlink(fontPath, () => {});
      console.error(`❌ Failed to download ${font.filename}:`, err.message);
      reject(err);
    });
  });
};

async function downloadAllFonts() {
  console.log('📥 Downloading Inter font files...');
  
  // Ensure fonts directory exists
  const fontsDir = path.join(__dirname, '..', 'public', 'fonts');
  if (!fs.existsSync(fontsDir)) {
    fs.mkdirSync(fontsDir, { recursive: true });
  }

  try {
    await Promise.all(fonts.map(downloadFont));
    console.log('✨ All fonts downloaded successfully!');
  } catch (error) {
    console.error('Failed to download some fonts:', error);
    process.exit(1);
  }
}

downloadAllFonts();