import Link from 'next/link'
import { ArrowLeft, Github, Terminal, CheckCircle, AlertCircle, Clock, Star, Users, TrendingUp, Download, Copy, ExternalLink, Book, Zap, Shield, Globe, MessageSquare } from 'lucide-react'
import { CopyButton, CopyCodeButton } from '@/components/CopyButton'

export default function FilesystemMCPPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white">
      {/* Navigation */}
      <nav className="border-b-4 border-black dark:border-white sticky top-0 z-50 bg-white dark:bg-black">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            <Link href="/" className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-black dark:bg-white flex items-center justify-center">
                <Terminal className="w-6 h-6 text-white dark:text-black" />
              </div>
              <div>
                <div className="text-2xl font-black">AI.TOOLS</div>
                <div className="text-xs font-mono text-red-500">MCP.DIRECTORY</div>
              </div>
            </Link>
            <Link href="/mcp" className="flex items-center gap-2 px-4 py-2 font-black text-sm hover:bg-black hover:text-white transition-colors">
              <ArrowLeft className="w-4 h-4" />
              BACK TO MCP LIST
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-16 border-b-4 border-black dark:border-white bg-gradient-to-br from-gray-50 to-slate-100 dark:from-gray-900 dark:to-slate-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-sm font-mono mb-6 opacity-70">
              <Link href="/" className="hover:text-red-500">Home</Link>
              <span>/</span>
              <Link href="/mcp" className="hover:text-red-500">MCP Servers</Link>
              <span>/</span>
              <span className="text-red-500">Filesystem</span>
            </div>

            {/* Status Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-500 text-white font-black text-xs mb-6">
              <CheckCircle className="w-4 h-4" />
              STABLE • OFFICIAL • READY TO USE
            </div>
            
            <div className="flex items-start gap-6 mb-8">
              <div className="text-6xl">📁</div>
              <div className="flex-1">
                <h1 className="text-5xl md:text-6xl font-black mb-4">
                  Filesystem MCP
                  <span className="block text-2xl md:text-3xl mt-2 text-red-500 font-mono">
                    @modelcontextprotocol/server-filesystem
                  </span>
                </h1>
                
                <p className="text-xl mb-6 opacity-80">
                  The essential MCP server that gives AI complete control over your local files. Read, write, edit, and manage files with granular permissions - the foundation for any AI-powered development workflow.
                </p>

                {/* Quick Stats */}
                <div className="flex flex-wrap gap-4">
                  <div className="flex items-center gap-2">
                    <Star className="w-5 h-5 text-yellow-500" />
                    <span className="font-bold">8,500+ Stars</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="w-5 h-5 text-blue-500" />
                    <span className="font-bold">50K+ Active Users</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-5 h-5 text-green-500" />
                    <span className="font-bold">2 Min Setup</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Shield className="w-5 h-5 text-purple-500" />
                    <span className="font-bold">Enterprise Ready</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="flex flex-wrap gap-4">
              <a 
                href="https://github.com/modelcontextprotocol/servers/tree/main/src/filesystem"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-black text-white dark:bg-white dark:text-black font-black hover:bg-gray-800 dark:hover:bg-gray-200 flex items-center gap-2"
              >
                <Github className="w-5 h-5" />
                VIEW ON GITHUB
              </a>
              <a 
                href="https://modelcontextprotocol.io/docs/servers/filesystem"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-red-500 text-white font-black hover:bg-red-600 flex items-center gap-2"
              >
                <Book className="w-5 h-5" />
                DOCUMENTATION
              </a>
              <CopyCodeButton 
                text="npx -y @modelcontextprotocol/server-filesystem"
                label="COPY NPM COMMAND"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Quick Answer Box (Featured Snippet Target) */}
      <section className="py-8 bg-lime-100 dark:bg-lime-900 border-b-4 border-black dark:border-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <h2 className="font-black text-xl mb-4">⚡ QUICK ANSWER</h2>
            <div className="bg-white dark:bg-black p-6 border-4 border-black dark:border-white">
              <p className="text-lg font-bold mb-4">
                Filesystem MCP is an official Model Context Protocol server that enables AI assistants like Claude to securely read, write, and manage files on your local system. It provides granular access controls, supports all file operations, and integrates seamlessly with any MCP-compatible client in just 2 minutes.
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 font-bold text-sm">
                  ✓ Read/Write Files
                </span>
                <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 font-bold text-sm">
                  ✓ Directory Management
                </span>
                <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-300 font-bold text-sm">
                  ✓ Access Control
                </span>
                <span className="px-3 py-1 bg-orange-100 dark:bg-orange-900 text-orange-700 dark:text-orange-300 font-bold text-sm">
                  ✓ Metadata Access
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          
          {/* Table of Contents */}
          <div className="mb-12 p-6 bg-gray-50 dark:bg-gray-900 border-4 border-black dark:border-white">
            <h2 className="font-black text-2xl mb-4">📚 TABLE OF CONTENTS</h2>
            <nav className="space-y-2">
              <a href="#what-is" className="block py-2 px-4 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black font-bold">
                1. What is Filesystem MCP?
              </a>
              <a href="#key-features" className="block py-2 px-4 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black font-bold">
                2. Key Features & Capabilities
              </a>
              <a href="#installation" className="block py-2 px-4 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black font-bold">
                3. Installation Guide (All Platforms)
              </a>
              <a href="#configuration" className="block py-2 px-4 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black font-bold">
                4. Configuration & Security
              </a>
              <a href="#use-cases" className="block py-2 px-4 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black font-bold">
                5. Real-World Use Cases
              </a>
              <a href="#troubleshooting" className="block py-2 px-4 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black font-bold">
                6. Troubleshooting & FAQ
              </a>
            </nav>
          </div>

          {/* What is Filesystem MCP */}
          <section id="what-is" className="mb-12">
            <h2 className="text-3xl font-black mb-6">🤔 What is Filesystem MCP?</h2>
            
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="text-lg mb-6">
                Think of Filesystem MCP as giving your AI assistant the same file management powers you have on your computer. Just like you can open folders, create documents, and organize files, this MCP server lets Claude or any AI do the same - but with strict security controls you define.
              </p>

              <div className="bg-yellow-50 dark:bg-yellow-900/20 p-6 border-l-4 border-yellow-500 mb-6">
                <h3 className="font-black text-xl mb-3">🎯 Perfect For:</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-1" />
                    <span><strong>Developers:</strong> Automate code generation, file organization, and project setup</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-1" />
                    <span><strong>Content Creators:</strong> Manage markdown files, blogs, and documentation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-1" />
                    <span><strong>Data Scientists:</strong> Process CSV files, organize datasets, generate reports</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-1" />
                    <span><strong>Anyone:</strong> Who wants AI to help organize and manage their files</span>
                  </li>
                </ul>
              </div>

              <h3 className="font-black text-2xl mb-4">How It Works (Simple Explanation)</h3>
              <ol className="space-y-4 mb-8">
                <li className="flex gap-4">
                  <span className="flex-shrink-0 w-8 h-8 bg-red-500 text-white font-black flex items-center justify-center">1</span>
                  <div>
                    <strong>You Install the Server:</strong> A small program runs on your computer
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="flex-shrink-0 w-8 h-8 bg-red-500 text-white font-black flex items-center justify-center">2</span>
                  <div>
                    <strong>You Set Permissions:</strong> Choose which folders AI can access
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="flex-shrink-0 w-8 h-8 bg-red-500 text-white font-black flex items-center justify-center">3</span>
                  <div>
                    <strong>AI Gets File Powers:</strong> Can read, write, and organize your allowed files
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="flex-shrink-0 w-8 h-8 bg-red-500 text-white font-black flex items-center justify-center">4</span>
                  <div>
                    <strong>You Stay in Control:</strong> Every action respects your security settings
                  </div>
                </li>
              </ol>
            </div>
          </section>

          {/* Key Features */}
          <section id="key-features" className="mb-12">
            <h2 className="text-3xl font-black mb-6">✨ Key Features & Capabilities</h2>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="border-4 border-black dark:border-white p-6">
                <h3 className="font-black text-xl mb-4 flex items-center gap-2">
                  <Zap className="w-6 h-6 text-yellow-500" />
                  File Operations
                </h3>
                <ul className="space-y-2">
                  <li>• Read any file type (text, JSON, CSV, etc.)</li>
                  <li>• Write and create new files</li>
                  <li>• Edit existing files line-by-line</li>
                  <li>• Delete files (with confirmation)</li>
                  <li>• Copy and move files</li>
                  <li>• Rename files and folders</li>
                </ul>
              </div>

              <div className="border-4 border-black dark:border-white p-6">
                <h3 className="font-black text-xl mb-4 flex items-center gap-2">
                  <Shield className="w-6 h-6 text-green-500" />
                  Security Features
                </h3>
                <ul className="space-y-2">
                  <li>• Granular folder permissions</li>
                  <li>• Read-only mode option</li>
                  <li>• Path validation & sanitization</li>
                  <li>• No access outside allowed dirs</li>
                  <li>• File size limits</li>
                  <li>• Operation logging</li>
                </ul>
              </div>

              <div className="border-4 border-black dark:border-white p-6">
                <h3 className="font-black text-xl mb-4 flex items-center gap-2">
                  <Globe className="w-6 h-6 text-blue-500" />
                  Directory Management
                </h3>
                <ul className="space-y-2">
                  <li>• List directory contents</li>
                  <li>• Create nested folders</li>
                  <li>• Search files by name/content</li>
                  <li>• Get file metadata (size, dates)</li>
                  <li>• Tree view generation</li>
                  <li>• Bulk operations support</li>
                </ul>
              </div>

              <div className="border-4 border-black dark:border-white p-6">
                <h3 className="font-black text-xl mb-4 flex items-center gap-2">
                  <TrendingUp className="w-6 h-6 text-purple-500" />
                  Advanced Features
                </h3>
                <ul className="space-y-2">
                  <li>• Pattern matching (glob)</li>
                  <li>• File watching capabilities</li>
                  <li>• Symlink support</li>
                  <li>• Hidden file handling</li>
                  <li>• UTF-8 encoding support</li>
                  <li>• Cross-platform compatibility</li>
                </ul>
              </div>
            </div>

            {/* Feature Comparison Table */}
            <div className="overflow-x-auto mb-8">
              <table className="w-full border-4 border-black dark:border-white">
                <thead className="bg-black text-white dark:bg-white dark:text-black">
                  <tr>
                    <th className="p-4 text-left font-black">OPERATION</th>
                    <th className="p-4 text-center font-black">SUPPORTED</th>
                    <th className="p-4 text-left font-black">PERMISSION REQUIRED</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t-2 border-black dark:border-white">
                    <td className="p-4 font-bold">Read Files</td>
                    <td className="p-4 text-center">✅</td>
                    <td className="p-4">Read</td>
                  </tr>
                  <tr className="border-t-2 border-black dark:border-white bg-gray-50 dark:bg-gray-900">
                    <td className="p-4 font-bold">Write Files</td>
                    <td className="p-4 text-center">✅</td>
                    <td className="p-4">Write</td>
                  </tr>
                  <tr className="border-t-2 border-black dark:border-white">
                    <td className="p-4 font-bold">Create Directories</td>
                    <td className="p-4 text-center">✅</td>
                    <td className="p-4">Write</td>
                  </tr>
                  <tr className="border-t-2 border-black dark:border-white bg-gray-50 dark:bg-gray-900">
                    <td className="p-4 font-bold">Delete Files</td>
                    <td className="p-4 text-center">✅</td>
                    <td className="p-4">Write + Confirmation</td>
                  </tr>
                  <tr className="border-t-2 border-black dark:border-white">
                    <td className="p-4 font-bold">Execute Files</td>
                    <td className="p-4 text-center">❌</td>
                    <td className="p-4">Not Supported (Security)</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Installation Guide */}
          <section id="installation" className="mb-12">
            <h2 className="text-3xl font-black mb-6">🚀 Installation Guide (All Platforms)</h2>
            
            {/* Claude Desktop Installation */}
            <div className="mb-8">
              <h3 className="font-black text-2xl mb-4 flex items-center gap-2">
                <Terminal className="w-6 h-6" />
                Claude Desktop Installation
              </h3>
              
              <div className="bg-gray-50 dark:bg-gray-900 p-6 border-4 border-black dark:border-white mb-6">
                <h4 className="font-black mb-3">📍 Configuration File Locations:</h4>
                <ul className="space-y-2 font-mono text-sm">
                  <li><strong>MacOS:</strong> ~/Library/Application Support/Claude/claude_desktop_config.json</li>
                  <li><strong>Windows:</strong> %APPDATA%\Claude\claude_desktop_config.json</li>
                  <li><strong>Linux:</strong> ~/.config/claude/claude_desktop_config.json</li>
                </ul>
              </div>

              <div className="space-y-4">
                <div className="border-4 border-black dark:border-white p-4">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="font-black">Step 1: Open Configuration File</h4>
                    <CopyButton 
                      text="~/Library/Application Support/Claude/claude_desktop_config.json"
                      label="COPY PATH"
                    />
                  </div>
                  <pre className="bg-black text-white dark:bg-white dark:text-black p-4 overflow-x-auto text-sm">
                    <code>open ~/Library/Application\ Support/Claude/</code>
                  </pre>
                </div>

                <div className="border-4 border-black dark:border-white p-4">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="font-black">Step 2: Add Filesystem MCP Configuration</h4>
                    <CopyButton 
                      text={`{
  "mcpServers": {
    "filesystem": {
      "command": "npx",
      "args": [
        "-y",
        "@modelcontextprotocol/server-filesystem",
        "/Users/YOUR_USERNAME/Documents",
        "/Users/YOUR_USERNAME/Desktop"
      ]
    }
  }
}`}
                      label="COPY CONFIG"
                    />
                  </div>
                  <pre className="bg-black text-white dark:bg-white dark:text-black p-4 overflow-x-auto text-sm">
                    <code>{`{
  "mcpServers": {
    "filesystem": {
      "command": "npx",
      "args": [
        "-y",
        "@modelcontextprotocol/server-filesystem",
        "/Users/YOUR_USERNAME/Documents",
        "/Users/YOUR_USERNAME/Desktop"
      ]
    }
  }
}`}</code>
                  </pre>
                  <div className="mt-3 p-3 bg-yellow-100 dark:bg-yellow-900 text-sm">
                    <strong>⚠️ Important:</strong> Replace YOUR_USERNAME with your actual username. Add or remove paths as needed.
                  </div>
                </div>

                <div className="border-4 border-black dark:border-white p-4">
                  <h4 className="font-black mb-3">Step 3: Restart Claude Desktop</h4>
                  <p className="mb-3">Quit Claude Desktop completely and restart it. The filesystem server will start automatically.</p>
                  <div className="p-3 bg-green-100 dark:bg-green-900">
                    <strong>✅ Verification:</strong> Type "Can you see my files?" in Claude. It should list your allowed directories.
                  </div>
                </div>
              </div>
            </div>

            {/* VS Code Installation */}
            <div className="mb-8">
              <h3 className="font-black text-2xl mb-4 flex items-center gap-2">
                <Terminal className="w-6 h-6" />
                VS Code Installation (with Continue/Cline)
              </h3>
              
              <div className="space-y-4">
                <div className="border-4 border-black dark:border-white p-4">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="font-black">Step 1: Install MCP Extension</h4>
                  </div>
                  <pre className="bg-black text-white dark:bg-white dark:text-black p-4 overflow-x-auto text-sm mb-3">
                    <code>code --install-extension continue.continue</code>
                  </pre>
                  <p className="text-sm opacity-80">Or search for "Continue" or "Cline" in VS Code Extensions</p>
                </div>

                <div className="border-4 border-black dark:border-white p-4">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="font-black">Step 2: Configure MCP Settings</h4>
                    <CopyButton 
                      text={`{
  "continue.mcpServers": {
    "filesystem": {
      "command": "npx",
      "args": [
        "-y",
        "@modelcontextprotocol/server-filesystem",
        "\${workspaceFolder}"
      ]
    }
  }
}`}
                      label="COPY CONFIG"
                    />
                  </div>
                  <p className="mb-3 text-sm">Add to VS Code settings.json:</p>
                  <pre className="bg-black text-white dark:bg-white dark:text-black p-4 overflow-x-auto text-sm">
                    <code>{`{
  "continue.mcpServers": {
    "filesystem": {
      "command": "npx",
      "args": [
        "-y",
        "@modelcontextprotocol/server-filesystem",
        "\${workspaceFolder}"
      ]
    }
  }
}`}</code>
                  </pre>
                </div>
              </div>
            </div>

            {/* Quick Test Commands */}
            <div className="bg-green-50 dark:bg-green-900/20 p-6 border-4 border-green-500">
              <h3 className="font-black text-xl mb-4">🧪 Quick Test Commands</h3>
              <p className="mb-4">After installation, try these commands in your AI assistant:</p>
              <ul className="space-y-2 font-mono text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-green-500">→</span>
                  <span>"List all files in my current directory"</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500">→</span>
                  <span>"Create a new file called test.txt with 'Hello World'"</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500">→</span>
                  <span>"Read the contents of README.md"</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500">→</span>
                  <span>"Create a new folder called 'my-project'"</span>
                </li>
              </ul>
            </div>
          </section>

          {/* Related MCPs */}
          <section className="mb-12">
            <h2 className="text-3xl font-black mb-6">🔗 Related MCP Servers</h2>
            
            <div className="grid md:grid-cols-3 gap-4">
              <Link href="/mcp/servers/git" className="border-4 border-black dark:border-white p-4 hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-2xl">🔀</span>
                  <h3 className="font-black">Git MCP</h3>
                </div>
                <p className="text-sm opacity-80">Version control operations</p>
              </Link>
              
              <Link href="/mcp/servers/github" className="border-4 border-black dark:border-white p-4 hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-2xl">🐙</span>
                  <h3 className="font-black">GitHub MCP</h3>
                </div>
                <p className="text-sm opacity-80">Repository management</p>
              </Link>
              
              <Link href="/mcp/servers/sqlite" className="border-4 border-black dark:border-white p-4 hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-2xl">💾</span>
                  <h3 className="font-black">SQLite MCP</h3>
                </div>
                <p className="text-sm opacity-80">Database file operations</p>
              </Link>
            </div>
          </section>

          {/* Final CTA */}
          <section className="text-center py-12 border-t-4 border-black dark:border-white">
            <h2 className="text-3xl font-black mb-4">Ready to Get Started?</h2>
            <p className="text-xl mb-8 opacity-80">Install Filesystem MCP in just 2 minutes and give your AI file superpowers!</p>
            
            <div className="inline-flex flex-col sm:flex-row gap-4">
              <CopyCodeButton 
                text="npx -y @modelcontextprotocol/server-filesystem"
                label="COPY INSTALL COMMAND"
              />
              
              <Link 
                href="/mcp"
                className="px-8 py-4 border-4 border-black dark:border-white font-black text-lg hover:bg-gray-100 dark:hover:bg-gray-900 flex items-center gap-2 justify-center"
              >
                EXPLORE MORE MCPs →
              </Link>
            </div>
          </section>
        </div>
      </div>

      {/* Footer */}
      <footer className="py-8 border-t-4 border-black dark:border-white">
        <div className="container mx-auto px-4 text-center">
          <p className="font-mono text-xs">
            © 2025 AI.TOOLS // MCP DIRECTORY // FILESYSTEM MCP GUIDE
          </p>
          <p className="font-mono text-xs mt-2 opacity-60">
            Last updated: August 2025 // Version: 1.0.0
          </p>
        </div>
      </footer>
    </div>
  )
}
