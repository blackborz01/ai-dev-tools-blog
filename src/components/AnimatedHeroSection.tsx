'use client'

import { useEffect, useRef } from 'react'

export default function AnimatedHeroSection() {
  const particlesRef = useRef<HTMLDivElement>(null)
  const typingRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Generate particles
    if (particlesRef.current) {
      for (let i = 0; i < 20; i++) {
        const particle = document.createElement('div')
        particle.className = 'particle'
        particle.style.left = Math.random() * 100 + '%'
        particle.style.animationDelay = Math.random() * 15 + 's'
        particle.style.animationDuration = (15 + Math.random() * 10) + 's'
        particlesRef.current.appendChild(particle)
      }
    }

    // Terminal typing animation
    const terminalTexts = [
      "$ finding perfect tool",
      "$ analyzing 1247 tools",
      "$ matching preferences",
      "$ tool found: Windsurf AI",
      "$ boosting productivity"
    ]
    
    let textIndex = 0
    let charIndex = 0
    let isDeleting = false
    
    function typeWriter() {
      if (!typingRef.current) return
      
      const currentText = terminalTexts[textIndex]
      
      if (!isDeleting) {
        typingRef.current.innerHTML = currentText.substring(0, charIndex) + '<span class="cursor"></span>'
        charIndex++
        
        if (charIndex > currentText.length) {
          isDeleting = true
          setTimeout(typeWriter, 2000)
          return
        }
      } else {
        typingRef.current.innerHTML = currentText.substring(0, charIndex) + '<span class="cursor"></span>'
        charIndex--
        
        if (charIndex === 0) {
          isDeleting = false
          textIndex = (textIndex + 1) % terminalTexts.length
        }
      }
      
      const typingSpeed = isDeleting ? 30 : 100
      setTimeout(typeWriter, typingSpeed)
    }

    const typingTimeout = setTimeout(typeWriter, 1000)

    // Mouse parallax effect
    const handleMouseMove = (e: MouseEvent) => {
      const mouseX = e.clientX / window.innerWidth - 0.5
      const mouseY = e.clientY / window.innerHeight - 0.5
      
      document.querySelectorAll('.code-block').forEach((block, index) => {
        const speed = (index + 1) * 5
        ;(block as HTMLElement).style.transform = `translate(${mouseX * speed}px, ${mouseY * speed}px)`
      })
      
      const glowOrb = document.querySelector('.glow-orb') as HTMLElement
      if (glowOrb) {
        glowOrb.style.transform = `translate(${mouseX * 50}px, ${mouseY * 50}px)`
      }
    }

    document.addEventListener('mousemove', handleMouseMove)

    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
      clearTimeout(typingTimeout)
    }
  }, [])

  return (
    <div className="relative h-[600px] flex items-center justify-center">
      <div className="relative w-full h-full">
        {/* Particles background */}
        <div ref={particlesRef} className="particles absolute w-full h-full overflow-hidden" />
        
        {/* Glowing orb */}
        <div className="glow-orb absolute w-[300px] h-[300px] rounded-full" />
        
        {/* Floating code blocks */}
        <div className="code-block absolute top-[10%] left-[5%] bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-white/10 backdrop-blur-md p-4 rounded-xl font-mono text-sm text-gray-200">
          <span className="text-pink-400">const</span> <span className="text-blue-400">aiTool</span> = <span className="text-green-400">"GPT-5"</span>;
        </div>
        
        <div className="code-block absolute top-[25%] right-[10%] bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-white/10 backdrop-blur-md p-4 rounded-xl font-mono text-sm text-gray-200">
          <span className="text-gray-500">// Ship faster with AI</span><br/>
          <span className="text-blue-400">generate</span>(<span className="text-green-400">"app"</span>);
        </div>
        
        <div className="code-block absolute bottom-[30%] left-[10%] bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-white/10 backdrop-blur-md p-4 rounded-xl font-mono text-sm text-gray-200">
          <span className="text-pink-400">import</span> {' { '}<span className="text-blue-400">Claude</span>{' } '} <span className="text-pink-400">from</span> <span className="text-green-400">"opus-4.1"</span>;
        </div>
        
        <div className="code-block absolute bottom-[10%] right-[15%] bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-white/10 backdrop-blur-md p-4 rounded-xl font-mono text-sm text-gray-200">
          <span className="text-blue-400">productivity</span> *= <span className="text-orange-400">10</span>;
        </div>
        
        {/* Rotating motivational phrases */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full text-center z-10">
          <div className="phrase absolute w-full opacity-0 text-3xl md:text-4xl font-black">
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-orange-400 bg-clip-text text-transparent">
              Build 10x Faster
            </span>
          </div>
          <div className="phrase absolute w-full opacity-0 text-3xl md:text-4xl font-black" style={{ animationDelay: '3s' }}>
            <span className="bg-gradient-to-r from-green-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              Code Like a Wizard
            </span>
          </div>
          <div className="phrase absolute w-full opacity-0 text-3xl md:text-4xl font-black" style={{ animationDelay: '6s' }}>
            <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
              AI is Your Superpower
            </span>
          </div>
          <div className="phrase absolute w-full opacity-0 text-3xl md:text-4xl font-black" style={{ animationDelay: '9s' }}>
            <span className="bg-gradient-to-r from-orange-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
              The Future is Now
            </span>
          </div>
        </div>
        
        {/* Tech stack icons */}
        <div className="tech-icon absolute top-[15%] left-[80%] text-5xl opacity-20">⚛️</div>
        <div className="tech-icon absolute top-[70%] left-[85%] text-5xl opacity-20" style={{ animationDelay: '5s' }}>🐍</div>
        <div className="tech-icon absolute top-[40%] left-[75%] text-5xl opacity-20" style={{ animationDelay: '10s' }}>⚡</div>
        
        {/* Terminal with typing effect */}
        <div className="absolute bottom-[20%] left-1/2 transform -translate-x-1/2 bg-slate-900/90 border border-gray-700/50 rounded-lg p-3 min-w-[280px] font-mono text-sm">
          <div className="flex gap-1.5 mb-2">
            <div className="w-2.5 h-2.5 rounded-full bg-red-500"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-yellow-500"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-green-500"></div>
          </div>
          <div ref={typingRef} className="text-green-400">
            $ finding perfect tool<span className="cursor"></span>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          25% { transform: translateY(-20px) rotate(1deg); }
          50% { transform: translateY(10px) rotate(-1deg); }
          75% { transform: translateY(-10px) rotate(0.5deg); }
        }

        .code-block {
          animation: float 20s infinite ease-in-out;
        }

        .code-block:nth-child(2) { animation-delay: 2s; }
        .code-block:nth-child(3) { animation-delay: 4s; }
        .code-block:nth-child(4) { animation-delay: 6s; }

        @keyframes phraseRotate {
          0%, 25% { opacity: 0; transform: translateY(20px); }
          8%, 17% { opacity: 1; transform: translateY(0); }
          25%, 100% { opacity: 0; transform: translateY(-20px); }
        }

        .phrase {
          animation: phraseRotate 12s infinite;
        }

        @keyframes particleFloat {
          0% { transform: translateY(100vh) translateX(0); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translateY(-100vh) translateX(100px); opacity: 0; }
        }

        .particle {
          position: absolute;
          width: 4px;
          height: 4px;
          background: rgba(255, 255, 255, 0.5);
          border-radius: 50%;
          animation: particleFloat 15s infinite linear;
        }

        @keyframes techFloat {
          0%, 100% { transform: translate(0, 0) rotate(0deg) scale(1); }
          33% { transform: translate(30px, -30px) rotate(180deg) scale(1.1); }
          66% { transform: translate(-20px, 20px) rotate(360deg) scale(0.9); }
        }

        .tech-icon {
          animation: techFloat 25s infinite ease-in-out;
        }

        @keyframes orbMove {
          0%, 100% { transform: translate(0, 0); }
          25% { transform: translate(100px, -50px); }
          50% { transform: translate(-50px, 100px); }
          75% { transform: translate(-100px, -30px); }
        }

        .glow-orb {
          background: radial-gradient(circle, rgba(96, 165, 250, 0.3), transparent 70%);
          filter: blur(40px);
          animation: orbMove 20s infinite ease-in-out;
        }

        @keyframes blink {
          0%, 49% { opacity: 1; }
          50%, 100% { opacity: 0; }
        }

        .cursor {
          display: inline-block;
          width: 8px;
          height: 16px;
          background: #4ADE80;
          animation: blink 1s infinite;
        }
      `}</style>
    </div>
  )
}
