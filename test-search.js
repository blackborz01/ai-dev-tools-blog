#!/usr/bin/env node

/**
 * Test script for search functionality
 * Run with: node test-search.js
 */

const fetch = require('node-fetch');

// Test queries
const testQueries = [
  // Tools that must be found
  { query: 'chatgpt', expectedType: 'tool', expectedName: 'ChatGPT' },
  { query: 'claude', expectedType: 'tool', expectedName: 'Claude' },
  { query: 'cursor', expectedType: 'tool', expectedName: 'Cursor' },
  { query: 'github copilot', expectedType: 'tool', expectedName: 'GitHub Copilot' },
  { query: 'v0', expectedType: 'tool', expectedName: 'v0' },
  { query: 'midjourney', expectedType: 'tool', expectedName: 'Midjourney' },
  
  // MCP servers that must be found  
  { query: 'filesystem', expectedType: 'mcp', expectedName: 'Filesystem MCP' },
  { query: 'github mcp', expectedType: 'mcp', expectedName: 'GitHub MCP' },
  { query: 'postgresql', expectedType: 'mcp', expectedName: 'PostgreSQL MCP' },
  { query: 'slack', expectedType: 'mcp', expectedName: 'Slack MCP' },
  { query: 'puppeteer', expectedType: 'mcp', expectedName: 'Puppeteer MCP' },
  { query: 'docker', expectedType: 'mcp', expectedName: 'Docker MCP' },
  
  // Category searches
  { query: 'image generation', minResults: 5 },
  { query: 'code assistant', minResults: 5 },
  { query: 'database', minResults: 5 },
  { query: 'automation', minResults: 3 },
  
  // Partial matches
  { query: 'gpt', minResults: 2 },
  { query: 'ai', minResults: 10 },
  { query: 'mcp', minResults: 10 }
];

async function testSearch() {
  console.log('🧪 Testing Search Functionality\n');
  console.log('================================\n');
  
  const baseUrl = 'http://localhost:3000/api/search';
  let passedTests = 0;
  let failedTests = 0;
  
  for (const test of testQueries) {
    try {
      const url = `${baseUrl}?q=${encodeURIComponent(test.query)}`;
      console.log(`📍 Testing: "${test.query}"`);
      
      const response = await fetch(url);
      const data = await response.json();
      
      if (!data.success) {
        console.log(`   ❌ Search failed: ${data.message || 'Unknown error'}`);
        failedTests++;
        continue;
      }
      
      const results = data.results || [];
      
      // Check for specific expected result
      if (test.expectedName) {
        const found = results.find(r => 
          r.name === test.expectedName || 
          r.title === test.expectedName
        );
        
        if (found) {
          if (!test.expectedType || found.type === test.expectedType) {
            console.log(`   ✅ Found: ${found.name} (${found.type})`);
            passedTests++;
          } else {
            console.log(`   ⚠️  Found but wrong type: ${found.name} is ${found.type}, expected ${test.expectedType}`);
            failedTests++;
          }
        } else {
          console.log(`   ❌ Not found: Expected to find "${test.expectedName}"`);
          console.log(`      Top 3 results: ${results.slice(0, 3).map(r => r.name).join(', ')}`);
          failedTests++;
        }
      }
      // Check for minimum results
      else if (test.minResults) {
        if (results.length >= test.minResults) {
          console.log(`   ✅ Found ${results.length} results (min: ${test.minResults})`);
          console.log(`      Sample: ${results.slice(0, 3).map(r => r.name).join(', ')}`);
          passedTests++;
        } else {
          console.log(`   ❌ Only ${results.length} results, expected at least ${test.minResults}`);
          failedTests++;
        }
      }
      
    } catch (error) {
      console.log(`   ❌ Error: ${error.message}`);
      failedTests++;
    }
    
    console.log('');
  }
  
  // Summary
  console.log('================================\n');
  console.log('📊 Test Results:\n');
  console.log(`   ✅ Passed: ${passedTests}`);
  console.log(`   ❌ Failed: ${failedTests}`);
  console.log(`   📈 Success Rate: ${Math.round((passedTests / (passedTests + failedTests)) * 100)}%`);
  
  if (failedTests === 0) {
    console.log('\n🎉 All tests passed! Search is working correctly.');
  } else {
    console.log('\n⚠️  Some tests failed. Please check the search index.');
  }
}

// Run tests
console.log('Starting search tests...');
console.log('Make sure the development server is running on http://localhost:3000\n');

testSearch().catch(error => {
  console.error('Fatal error:', error);
  process.exit(1);
});
