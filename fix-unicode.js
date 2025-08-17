const fs = require('fs');
const path = '/Users/faridmuradov/Desktop/ai-dev-tools-blog/src/lib/articles.ts';

// Read the file
let content = fs.readFileSync(path, 'utf8');

// Replace problematic Unicode characters with safe alternatives
content = content.replace(/⚠️/g, 'Warning:');
content = content.replace(/❌/g, 'X');
content = content.replace(/✅/g, '[YES]');
content = content.replace(/✓/g, '[check]');
content = content.replace(/→/g, '-&gt;');
content = content.replace(/↓/g, '[down]');
content = content.replace(/↑/g, '[up]');
content = content.replace(/•/g, '*');
content = content.replace(/📄/g, '[FILE]');
content = content.replace(/🍎/g, '[Apple]');
content = content.replace(/🪟/g, '[Windows]');
content = content.replace(/🐧/g, '[Linux]');

// Write the fixed content back
fs.writeFileSync(path, content, 'utf8');
console.log('Fixed Unicode characters in articles.ts');
