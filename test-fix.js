// Quick test to verify the file can be read
const fs = require('fs');
const path = '/Users/faridmuradov/Desktop/ai-dev-tools-blog/src/lib/articles.ts';

try {
  const content = fs.readFileSync(path, 'utf8');
  console.log('File read successfully');
  
  // Check for problematic characters
  if (content.includes('⚠️')) console.log('Found warning emoji');
  if (content.includes('❌')) console.log('Found cross emoji');
  if (content.includes('✓')) console.log('Found checkmark');
  
  // Try to evaluate as JS
  try {
    eval(content);
    console.log('File evaluates successfully');
  } catch (e) {
    console.log('Eval error:', e.message);
    console.log('Error line:', e.stack.split('\n')[0]);
  }
} catch (error) {
  console.error('Error reading file:', error);
}
