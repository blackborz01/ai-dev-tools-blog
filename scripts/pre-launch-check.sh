#!/bin/bash

# Pre-Launch Verification Script
# Run this before deploying to production

echo "🚀 AI Dev Tools Blog - Pre-Launch Check"
echo "========================================"
echo ""

# Check Node version
echo "✓ Checking Node.js version..."
node --version

# Install dependencies
echo "✓ Checking dependencies..."
npm install

# Run TypeScript check
echo "✓ Checking TypeScript..."
npm run type-check
if [ $? -ne 0 ]; then
    echo "❌ TypeScript errors found! Fix before deploying."
    exit 1
fi

# Build the project
echo "✓ Building project..."
npm run build
if [ $? -ne 0 ]; then
    echo "❌ Build failed! Fix errors before deploying."
    exit 1
fi

# Check for .env.local
if [ ! -f .env.local ]; then
    echo "⚠️  Warning: .env.local not found"
    echo "   Copy .env.local.example to .env.local and configure"
fi

# Check critical pages
echo "✓ Checking critical files..."
critical_files=(
    "src/app/page.tsx"
    "src/app/tools/page.tsx"
    "src/app/mcp/page.tsx"
    "src/app/api-directory/page.tsx"
    "src/app/blog/page.tsx"
)

for file in "${critical_files[@]}"; do
    if [ ! -f "$file" ]; then
        echo "❌ Missing critical file: $file"
        exit 1
    fi
done

echo ""
echo "✅ All checks passed!"
echo ""
echo "📋 Next steps:"
echo "1. Configure .env.local with your production values"
echo "2. Push to GitHub"
echo "3. Deploy to Vercel/Netlify"
echo "4. Add your domain in hosting settings"
echo ""
echo "🎉 Your site is ready for deployment!"
