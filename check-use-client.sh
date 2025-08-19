#!/bin/bash

echo "Checking for 'use client' in MCP server pages..."
echo "================================================"

servers_dir="/Users/faridmuradov/Desktop/ai-dev-tools-blog/src/app/mcp/servers"

echo -e "\nPages WITH 'use client' (BROKEN):"
for dir in "$servers_dir"/*; do
  if [ -d "$dir" ]; then
    page_file="$dir/page.tsx"
    if [ -f "$page_file" ]; then
      first_line=$(head -n 1 "$page_file")
      if [[ "$first_line" == *"'use client'"* ]]; then
        basename "$dir"
      fi
    fi
  fi
done

echo -e "\nPages WITHOUT 'use client' (WORKING):"
for dir in "$servers_dir"/*; do
  if [ -d "$dir" ]; then
    page_file="$dir/page.tsx"
    if [ -f "$page_file" ]; then
      first_line=$(head -n 1 "$page_file")
      if [[ "$first_line" != *"'use client'"* ]]; then
        basename "$dir"
      fi
    fi
  fi
done
