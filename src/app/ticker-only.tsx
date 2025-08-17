      {/* Alert Banner - High-Tech News Ticker */}
      <section className="relative bg-black border-y border-cyan-500/50 py-2 overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/10 via-black to-cyan-900/10" />
        
        <div className="relative flex items-center h-8">
          {/* News Ticker Container */}
          <div className="w-full overflow-hidden">
            <div className="flex">
              <div className="animate-infinite-scroll flex items-center whitespace-nowrap">
                {/* First set of news items */}
                <Link href="/blog" className="inline-flex items-center gap-2 px-6 hover:text-cyan-400 transition-colors">
                  <span className="text-red-400 font-black text-xs">🔥 BREAKING</span>
                  <span className="text-white font-bold text-sm">Claude 3.5 Sonnet now supports MCP servers - Build custom tools in minutes</span>
                </Link>
                <span className="text-cyan-400 mx-4">•</span>
                
                <Link href="/tools" className="inline-flex items-center gap-2 px-6 hover:text-yellow-400 transition-colors">
                  <span className="text-yellow-400 font-black text-xs">⚡ HOT</span>
                  <span className="text-white font-bold text-sm">GitHub Copilot X launches with 10x faster completions</span>
                </Link>
                <span className="text-purple-400 mx-4">•</span>
                
                <Link href="/tools" className="inline-flex items-center gap-2 px-6 hover:text-green-400 transition-colors">
                  <span className="text-green-400 font-black text-xs">📈 TRENDING</span>
                  <span className="text-white font-bold text-sm">Cursor IDE reaches 500K developers - Fastest growing dev tool</span>
                </Link>
                <span className="text-pink-400 mx-4">•</span>
                
                <Link href="/blog" className="inline-flex items-center gap-2 px-6 hover:text-blue-400 transition-colors">
                  <span className="text-blue-400 font-black text-xs">🚀 NEW</span>
                  <span className="text-white font-bold text-sm">OpenAI releases GPT-5 API with 100K context window</span>
                </Link>
                <span className="text-orange-400 mx-4">•</span>
                
                <Link href="/tools" className="inline-flex items-center gap-2 px-6 hover:text-purple-400 transition-colors">
                  <span className="text-purple-400 font-black text-xs">🎯 UPDATE</span>
                  <span className="text-white font-bold text-sm">Microsoft adds AI agents to VS Code - Autonomous coding arrives</span>
                </Link>
                <span className="text-cyan-400 mx-4">•</span>
                
                <Link href="/mcp" className="inline-flex items-center gap-2 px-6 hover:text-red-400 transition-colors">
                  <span className="text-red-400 font-black text-xs">💡 INSIGHT</span>
                  <span className="text-white font-bold text-sm">MCP Protocol adoption hits 50,000 developers worldwide</span>
                </Link>
                <span className="text-green-400 mx-4">•</span>
              </div>
              
              {/* Duplicate set for seamless loop */}
              <div className="animate-infinite-scroll flex items-center whitespace-nowrap" aria-hidden="true">
                <Link href="/blog" className="inline-flex items-center gap-2 px-6 hover:text-cyan-400 transition-colors">
                  <span className="text-red-400 font-black text-xs">🔥 BREAKING</span>
                  <span className="text-white font-bold text-sm">Claude 3.5 Sonnet now supports MCP servers - Build custom tools in minutes</span>
                </Link>
                <span className="text-cyan-400 mx-4">•</span>
                
                <Link href="/tools" className="inline-flex items-center gap-2 px-6 hover:text-yellow-400 transition-colors">
                  <span className="text-yellow-400 font-black text-xs">⚡ HOT</span>
                  <span className="text-white font-bold text-sm">GitHub Copilot X launches with 10x faster completions</span>
                </Link>
                <span className="text-purple-400 mx-4">•</span>
                
                <Link href="/tools" className="inline-flex items-center gap-2 px-6 hover:text-green-400 transition-colors">
                  <span className="text-green-400 font-black text-xs">📈 TRENDING</span>
                  <span className="text-white font-bold text-sm">Cursor IDE reaches 500K developers - Fastest growing dev tool</span>
                </Link>
                <span className="text-pink-400 mx-4">•</span>
                
                <Link href="/blog" className="inline-flex items-center gap-2 px-6 hover:text-blue-400 transition-colors">
                  <span className="text-blue-400 font-black text-xs">🚀 NEW</span>
                  <span className="text-white font-bold text-sm">OpenAI releases GPT-5 API with 100K context window</span>
                </Link>
                <span className="text-orange-400 mx-4">•</span>
                
                <Link href="/tools" className="inline-flex items-center gap-2 px-6 hover:text-purple-400 transition-colors">
                  <span className="text-purple-400 font-black text-xs">🎯 UPDATE</span>
                  <span className="text-white font-bold text-sm">Microsoft adds AI agents to VS Code - Autonomous coding arrives</span>
                </Link>
                <span className="text-cyan-400 mx-4">•</span>
                
                <Link href="/mcp" className="inline-flex items-center gap-2 px-6 hover:text-red-400 transition-colors">
                  <span className="text-red-400 font-black text-xs">💡 INSIGHT</span>
                  <span className="text-white font-bold text-sm">MCP Protocol adoption hits 50,000 developers worldwide</span>
                </Link>
                <span className="text-green-400 mx-4">•</span>
              </div>
            </div>
          </div>
        </div>
      </section>
