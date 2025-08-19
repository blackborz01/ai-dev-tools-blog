import Link from 'next/link'
import { Terminal, Github, Twitter, Mail, ArrowRight } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className="relative py-16 bg-black text-white z-20">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand Column */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-purple-500 flex items-center justify-center">
                <Terminal className="w-5 h-5 text-black" />
              </div>
              <div>
                <div className="text-xl font-black text-cyan-400">BOOST</div>
                <div className="text-xs font-mono text-gray-400">DEVSPEED</div>
              </div>
            </div>
            <p className="text-sm text-gray-400 mb-4">
              Ship code 3x faster with AI. Real benchmarks, MCP guides, and productivity tips.
            </p>
            <div className="flex gap-3">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" 
                 className="w-8 h-8 bg-gray-800 hover:bg-cyan-500/20 rounded flex items-center justify-center transition-colors">
                <Github className="w-4 h-4" />
              </a>
              <a href="https://x.com/BoostDevSpeed" target="_blank" rel="noopener noreferrer"
                 className="w-8 h-8 bg-gray-800 hover:bg-cyan-500/20 rounded flex items-center justify-center transition-colors" title="Follow us on X">
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div className="border-l-2 border-cyan-400 pl-4">
            <h3 className="text-sm font-bold mb-4 text-cyan-400 uppercase tracking-wider">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link href="/tools" className="text-sm text-gray-400 hover:text-cyan-400 transition-colors">
                  AI Tools Directory
                </Link>
              </li>
              <li>
                <Link href="/mcp" className="text-sm text-gray-400 hover:text-cyan-400 transition-colors">
                  MCP Servers
                </Link>
              </li>
              <li>
                <Link href="/api-directory" className="text-sm text-gray-400 hover:text-cyan-400 transition-colors">
                  API Models
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-sm text-gray-400 hover:text-cyan-400 transition-colors">
                  Blog & Tutorials
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Resources */}
          <div className="border-l-2 border-purple-400 pl-4">
            <h3 className="text-sm font-bold mb-4 text-purple-400 uppercase tracking-wider">
              Resources
            </h3>
            <ul className="space-y-2">
              <li>
                <Link href="/tools" className="text-sm text-gray-400 hover:text-purple-400 transition-colors">
                  AI Agents
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-sm text-gray-400 hover:text-purple-400 transition-colors">
                  Getting Started
                </Link>
              </li>
              <li>
                <Link href="/tools" className="text-sm text-gray-400 hover:text-purple-400 transition-colors">
                  Compare Tools
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-sm text-gray-400 hover:text-purple-400 transition-colors">
                  Tutorials
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Explore */}
          <div className="md:col-span-1">
            <div className="pl-4 border-l-2 border-pink-400">
              <h3 className="text-sm font-bold mb-4 text-pink-400 uppercase tracking-wider">
                Explore
              </h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/tools" className="text-sm text-gray-400 hover:text-pink-400 transition-colors">
                    Tool Categories
                  </Link>
                </li>
                <li>
                  <Link href="/api-directory" className="text-sm text-gray-400 hover:text-pink-400 transition-colors">
                    API Providers
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="text-sm text-gray-400 hover:text-pink-400 transition-colors">
                    Latest News
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="font-mono text-xs text-gray-500">
              © {currentYear} BOOSTDEVSPEED • SHIP CODE 3X FASTER WITH AI
            </p>
            <div className="flex gap-6">
              <Link href="/privacy" className="text-xs text-gray-500 hover:text-cyan-400 transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-xs text-gray-500 hover:text-cyan-400 transition-colors">
                Terms of Service
              </Link>
              <a href="mailto:contact@aitools.directory" className="text-xs text-gray-500 hover:text-cyan-400 transition-colors flex items-center gap-1">
                <Mail className="w-3 h-3" />
                Contact
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
