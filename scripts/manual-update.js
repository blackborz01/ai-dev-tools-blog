#!/usr/bin/env node

/**
 * Manual Update Script for AI Tools, MCP Servers, and APIs
 * Run this script to manually fetch and update data
 * Usage: node scripts/manual-update.js
 */

const fs = require('fs').promises;
const path = require('path');

// Simulated discovered data (replace with actual API calls)
const discoveredData = {
  aiTools: [
    {
      name: "Claude 3.5 Sonnet",
      description: "Latest AI model from Anthropic",
      category: "AI Assistant",
      pricing: "API-based",
      url: "https://claude.ai",
      dateAdded: new Date().toISOString()
    },
    {
      name: "GitHub Copilot X",
      description: "AI pair programmer with chat interface",
      category: "Code Assistant",
      pricing: "$10/month",
      url: "https://github.com/features/copilot",
      dateAdded: new Date().toISOString()
    }
  ],
  mcpServers: [
    {
      name: "Browser MCP",
      description: "Control browsers via MCP protocol",
      github: "https://github.com/modelcontextprotocol/browser-mcp",
      stars: 1250,
      dateAdded: new Date().toISOString()
    },
    {
      name: "Database MCP",
      description: "Database operations through MCP",
      github: "https://github.com/modelcontextprotocol/database-mcp",
      stars: 890,
      dateAdded: new Date().toISOString()
    }
  ],
  apis: [
    {
      name: "Gemini 2.0 Flash",
      provider: "Google",
      description: "Multimodal AI with real-time capabilities",
      pricing: "$0.30 per 1M tokens",
      dateAdded: new Date().toISOString()
    },
    {
      name: "GPT-4 Vision",
      provider: "OpenAI",
      description: "Image understanding and analysis",
      pricing: "$0.03 per 1K tokens",
      dateAdded: new Date().toISOString()
    }
  ]
};

async function updateData() {
  try {
    console.log('🚀 Starting manual data update...\n');
    
    // Update AI Tools
    const toolsPath = path.join(process.cwd(), 'src/data/discovered-tools.json');
    let toolsData = { tools: [], lastUpdated: null };
    
    try {
      const existingTools = await fs.readFile(toolsPath, 'utf-8');
      toolsData = JSON.parse(existingTools);
    } catch (e) {
      console.log('Creating new tools file...');
    }
    
    // Add new tools (avoid duplicates)
    const existingToolNames = new Set(toolsData.tools.map(t => t.name.toLowerCase()));
    const newTools = discoveredData.aiTools.filter(tool => 
      !existingToolNames.has(tool.name.toLowerCase())
    );
    
    toolsData.tools = [...toolsData.tools, ...newTools];
    toolsData.lastUpdated = new Date().toISOString();
    
    await fs.writeFile(toolsPath, JSON.stringify(toolsData, null, 2));
    console.log(`✅ Added ${newTools.length} new AI tools`);
    
    // Update MCP Servers
    const mcpPath = path.join(process.cwd(), 'src/data/discovered-mcp.json');
    let mcpData = { servers: [], lastUpdated: null };
    
    try {
      const existingMCP = await fs.readFile(mcpPath, 'utf-8');
      mcpData = JSON.parse(existingMCP);
    } catch (e) {
      console.log('Creating new MCP file...');
    }
    
    const existingMCPNames = new Set(mcpData.servers.map(s => s.name.toLowerCase()));
    const newServers = discoveredData.mcpServers.filter(server => 
      !existingMCPNames.has(server.name.toLowerCase())
    );
    
    mcpData.servers = [...mcpData.servers, ...newServers];
    mcpData.lastUpdated = new Date().toISOString();
    
    await fs.writeFile(mcpPath, JSON.stringify(mcpData, null, 2));
    console.log(`✅ Added ${newServers.length} new MCP servers`);
    
    // Update APIs
    const apiPath = path.join(process.cwd(), 'src/data/discovered-apis.json');
    let apiData = { apis: [], lastUpdated: null };
    
    try {
      const existingAPIs = await fs.readFile(apiPath, 'utf-8');
      apiData = JSON.parse(existingAPIs);
    } catch (e) {
      console.log('Creating new API file...');
    }
    
    const existingAPINames = new Set(apiData.apis.map(a => a.name.toLowerCase()));
    const newAPIs = discoveredData.apis.filter(api => 
      !existingAPINames.has(api.name.toLowerCase())
    );
    
    apiData.apis = [...apiData.apis, ...newAPIs];
    apiData.lastUpdated = new Date().toISOString();
    
    await fs.writeFile(apiPath, JSON.stringify(apiData, null, 2));
    console.log(`✅ Added ${newAPIs.length} new APIs`);
    
    // Summary
    console.log('\n📊 Update Summary:');
    console.log('─'.repeat(30));
    console.log(`Total AI Tools: ${toolsData.tools.length}`);
    console.log(`Total MCP Servers: ${mcpData.servers.length}`);
    console.log(`Total APIs: ${apiData.apis.length}`);
    console.log(`Last Updated: ${new Date().toLocaleString()}`);
    console.log('\n✨ Manual update completed successfully!');
    
  } catch (error) {
    console.error('❌ Error during update:', error);
    process.exit(1);
  }
}

// Run the update
updateData();
