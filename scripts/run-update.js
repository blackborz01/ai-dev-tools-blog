#!/usr/bin/env node

/**
 * Run Automatic Updates
 * This script triggers the automatic update process
 * Usage: npm run update-data
 */

const https = require('https');
const http = require('http');

async function runUpdate() {
  console.log('🚀 Starting automatic data update...\n');
  
  const isDevelopment = process.env.NODE_ENV !== 'production';
  const baseUrl = process.env.NEXT_PUBLIC_URL || 'http://localhost:3000';
  const isLocal = baseUrl.includes('localhost');
  
  // Construct the URL
  const url = new URL(`${baseUrl}/api/cron/update-tools`);
  url.searchParams.append('manual', 'true'); // Allow manual trigger
  
  console.log(`📡 Calling: ${url.toString()}\n`);
  
  const protocol = url.protocol === 'https:' ? https : http;
  
  return new Promise((resolve, reject) => {
    const options = {
      hostname: url.hostname,
      port: url.port || (url.protocol === 'https:' ? 443 : 3000),
      path: url.pathname + url.search,
      method: 'GET',
      headers: {
        'User-Agent': 'AI-Tools-Updater/1.0'
      }
    };
    
    const req = protocol.request(options, (res) => {
      let data = '';
      
      res.on('data', (chunk) => {
        data += chunk;
      });
      
      res.on('end', () => {
        try {
          const result = JSON.parse(data);
          
          if (result.success) {
            console.log('✅ Update successful!\n');
            console.log('📊 Results:');
            console.log('━'.repeat(40));
            console.log(`🤖 AI Tools discovered: ${result.discovered.aiTools}`);
            console.log(`🔧 MCP Servers discovered: ${result.discovered.mcpServers}`);
            console.log(`🌐 APIs discovered: ${result.discovered.apis}`);
            console.log('━'.repeat(40));
            console.log(`📦 Total new items: ${result.discovered.total}`);
            console.log(`🕐 Updated at: ${new Date(result.timestamp).toLocaleString()}\n`);
            
            console.log('💡 Next steps:');
            console.log('1. Check src/data/discovered-*.json files');
            console.log('2. Restart your development server to see changes');
            console.log('3. The data will be automatically integrated\n');
            
            resolve(result);
          } else {
            console.error('❌ Update failed:', result.error);
            reject(new Error(result.error));
          }
        } catch (error) {
          console.error('❌ Failed to parse response:', error);
          console.error('Response:', data);
          reject(error);
        }
      });
    });
    
    req.on('error', (error) => {
      console.error('❌ Request failed:', error.message);
      console.log('\n💡 Make sure your development server is running:');
      console.log('   npm run dev\n');
      reject(error);
    });
    
    req.end();
  });
}

// Run the update
runUpdate()
  .then(() => {
    console.log('✨ Update process completed successfully!');
    process.exit(0);
  })
  .catch((error) => {
    console.error('💥 Update process failed:', error.message);
    process.exit(1);
  });
