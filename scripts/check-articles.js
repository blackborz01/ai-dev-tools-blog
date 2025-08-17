const fs = require('fs');
const path = require('path');

// Read the articles.ts file
const articlesPath = path.join(__dirname, '../src/lib/articles.ts');
const content = fs.readFileSync(articlesPath, 'utf-8');

// Extract article slugs using regex
const slugMatches = content.match(/slug:\s*"([^"]+)"/g);

if (slugMatches) {
  const slugs = slugMatches.map(match => match.replace(/slug:\s*"/, '').replace('"', ''));
  
  console.log(`Found ${slugs.length} articles:`);
  console.log('----------------------------------------');
  
  // Check for duplicates
  const duplicates = slugs.filter((slug, index) => slugs.indexOf(slug) !== index);
  
  if (duplicates.length > 0) {
    console.error('❌ DUPLICATE SLUGS FOUND:');
    duplicates.forEach(dup => {
      console.error(`   - "${dup}"`);
    });
  } else {
    console.log('✅ No duplicate slugs found');
  }
  
  console.log('\n📝 All article slugs:');
  slugs.forEach((slug, index) => {
    console.log(`${index + 1}. ${slug}`);
  });
} else {
  console.error('No articles found');
}
