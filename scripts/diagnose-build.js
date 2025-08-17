const fs = require('fs');
const path = require('path');

console.log('🔍 Checking for common Next.js 14 build issues...\n');

// Check if required files exist
const requiredFiles = [
  'src/app/layout.tsx',
  'src/app/page.tsx',
  'src/app/globals.css',
  'src/lib/articles.ts',
  'next.config.js',
  'tsconfig.json',
  'tailwind.config.ts',
  'package.json'
];

let hasErrors = false;

// Check for missing files
console.log('📁 Checking required files:');
requiredFiles.forEach(file => {
  const filePath = path.join(process.cwd(), file);
  if (fs.existsSync(filePath)) {
    console.log(`✅ ${file}`);
  } else {
    console.log(`❌ ${file} - MISSING`);
    hasErrors = true;
  }
});

// Check package.json for required dependencies
console.log('\n📦 Checking dependencies:');
const packageJson = require(path.join(process.cwd(), 'package.json'));
const requiredDeps = ['next', 'react', 'react-dom'];

requiredDeps.forEach(dep => {
  if (packageJson.dependencies[dep]) {
    console.log(`✅ ${dep}: ${packageJson.dependencies[dep]}`);
  } else {
    console.log(`❌ ${dep} - MISSING`);
    hasErrors = true;
  }
});

// Check for TypeScript version compatibility
console.log('\n🔧 TypeScript version:');
if (packageJson.devDependencies.typescript) {
  console.log(`✅ TypeScript: ${packageJson.devDependencies.typescript}`);
} else {
  console.log('❌ TypeScript not found in devDependencies');
  hasErrors = true;
}

// Check Next.js version
console.log('\n⚡ Next.js version:');
const nextVersion = packageJson.dependencies.next;
if (nextVersion && nextVersion.includes('14')) {
  console.log(`✅ Next.js 14 detected: ${nextVersion}`);
} else {
  console.log(`⚠️  Next.js version: ${nextVersion} (ensure it's 14.x)`);
}

// Common fixes to apply
console.log('\n🛠️  Applying common fixes:');

// Fix 1: Ensure .next and node_modules are in .gitignore
const gitignorePath = path.join(process.cwd(), '.gitignore');
if (fs.existsSync(gitignorePath)) {
  let gitignore = fs.readFileSync(gitignorePath, 'utf8');
  if (!gitignore.includes('.next')) {
    gitignore += '\n.next\n';
    fs.writeFileSync(gitignorePath, gitignore);
    console.log('✅ Added .next to .gitignore');
  }
} else {
  fs.writeFileSync(gitignorePath, 'node_modules\n.next\n.env*.local\n');
  console.log('✅ Created .gitignore');
}

// Fix 2: Create missing directories
const requiredDirs = [
  'src/components',
  'src/lib',
  'public',
  'src/app/api'
];

requiredDirs.forEach(dir => {
  const dirPath = path.join(process.cwd(), dir);
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
    console.log(`✅ Created directory: ${dir}`);
  }
});

// Summary
console.log('\n📊 Summary:');
if (hasErrors) {
  console.log('❌ Some issues were found. Please fix them before building.');
  console.log('\n💡 Try running:');
  console.log('   rm -rf .next node_modules package-lock.json');
  console.log('   npm install');
  console.log('   npm run build');
} else {
  console.log('✅ No critical issues found!');
  console.log('\n💡 If build still fails, try:');
  console.log('   rm -rf .next node_modules package-lock.json');
  console.log('   npm cache clean --force');
  console.log('   npm install');
  console.log('   npm run build');
}

console.log('\n🔍 Additional checks:');
console.log('   - Check for unescaped quotes in HTML content');
console.log('   - Ensure all async functions are properly awaited');
console.log('   - Verify all imported components exist');
console.log('   - Check for TypeScript type errors with: npm run type-check');
