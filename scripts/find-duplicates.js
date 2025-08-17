// Check for duplicate slugs in articles.ts
const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../src/lib/articles.ts');
const content = fs.readFileSync(filePath, 'utf-8');

// Find all slug occurrences
const slugRegex = /slug:\s*"([^"]+)"/g;
const slugs = [];
let match;

while ((match = slugRegex.exec(content)) !== null) {
  slugs.push(match[1]);
}

// Count occurrences
const counts = {};
slugs.forEach(slug => {
  counts[slug] = (counts[slug] || 0) + 1;
});

// Find duplicates
const duplicates = Object.entries(counts)
  .filter(([slug, count]) => count > 1)
  .map(([slug, count]) => ({ slug, count }));

if (duplicates.length > 0) {
  console.log('❌ DUPLICATE SLUGS FOUND:');
  duplicates.forEach(({ slug, count }) => {
    console.log(`   "${slug}" appears ${count} times`);
  });
} else {
  console.log('✅ No duplicate slugs found');
}

console.log(`\nTotal articles: ${slugs.length}`);
console.log('All slugs:', slugs);
