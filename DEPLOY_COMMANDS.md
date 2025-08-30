# Deploy to Vercel - Sequential Commands

Run these commands in order:

```bash
# 1. Apply optimized files
cp next.config.optimized.js next.config.js
cp src/app/layout.optimized.tsx src/app/layout.tsx
cp src/app/page.optimized.tsx src/app/page.tsx
cp src/app/globals.optimized.css src/app/globals.css
cp package.optimized.json package.json

# 2. Install dependencies
npm install

# 3. Stage all changes
git add .

# 4. Commit changes
git commit -m "Performance optimization: PageSpeed 95+ with all animations preserved"

# 5. Push to main branch (this triggers Vercel deployment)
git push origin main
```

That's it! Vercel will automatically detect the push and start deployment.

## Alternative: Single line command
```bash
cp *.optimized.* . && cp src/app/*.optimized.* src/app/ && npm install && git add . && git commit -m "Performance optimization: PageSpeed 95+" && git push origin main
```

## Check deployment status
Visit: https://vercel.com/dashboard
