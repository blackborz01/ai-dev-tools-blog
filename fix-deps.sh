#!/bin/bash

echo "Cleaning and reinstalling dependencies..."

# Remove node_modules and lock file
rm -rf node_modules
rm -f package-lock.json

# Clear npm cache
npm cache clean --force

# Reinstall dependencies
npm install

echo "Dependencies reinstalled successfully!"
echo "Now run: npm run dev"
