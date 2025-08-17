#!/bin/bash

echo "🔧 Fixing Next.js build issues..."

# 1. Clear Next.js cache
echo "📦 Clearing Next.js cache..."
rm -rf .next

# 2. Clear Node modules and lock file
echo "🗑️ Removing node_modules and package-lock.json..."
rm -rf node_modules
rm -f package-lock.json

# 3. Clear npm cache
echo "🧹 Clearing npm cache..."
npm cache clean --force

# 4. Reinstall dependencies
echo "📥 Reinstalling dependencies..."
npm install

# 5. Run type check
echo "✅ Running TypeScript type check..."
npm run type-check

# 6. Try building
echo "🏗️ Building project..."
npm run build

echo "✨ Build fix complete!"
