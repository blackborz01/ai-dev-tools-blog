#!/bin/bash

# Create directories and basic page files for discovered MCP servers

servers=(
  "fastmcp"
  "figma-context-mcp"
  "zen-mcp-server"
  "mcp-chrome"
  "ghidramcp"
  "git-mcp"
  "whatsapp-mcp"
  "mcp-playwright"
  "desktopcommandermcp"
  "firecrawl-mcp-server"
  "browser-mcp"
  "mcp-use"
  "5ire"
  "core"
)

for server in "${servers[@]}"; do
  echo "Creating directory for $server..."
  mkdir -p "/Users/faridmuradov/Desktop/ai-dev-tools-blog/src/app/mcp/servers/$server"
done

echo "Directories created for all discovered MCP servers!"
