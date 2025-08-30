// Quick script to check articles structure
const path = require('path');
const fs = require('fs');

const articlesPath = path.join(__dirname, 'src', 'lib', 'articles.ts');
const content = fs.readFileSync(articlesPath, 'utf8');

// Count articles
const articleMatches = content.match(/slug:\s*"/g);
const articleCount = articleMatches ? articleMatches.length : 0;

console.log(`Total articles found: ${articleCount}`);
console.log('Article slugs:');

// Extract slugs
const slugMatches = content.match(/slug:\s*"([^"]+)"/g);
if (slugMatches) {
  slugMatches.forEach((match, index) => {
    const slug = match.replace(/slug:\s*"/, '').replace(/"/, '');
    console.log(`${index + 1}. ${slug}`);
  });
}

// Check if array is properly closed
const lastBracket = content.lastIndexOf(']');
const lastContent = content.substring(lastBracket - 100);
console.log('\nLast 100 chars:', lastContent);
