'use client'

import { useEffect, useRef } from 'react'

export default function AIToolsPremiumText() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const animationRef = useRef<number>()
  const mouseRef = useRef({ x: 0, y: 0 })
  
  useEffect(() => {
    const canvas = canvasRef.current
    const container = containerRef.current
    if (!canvas || !container) return
    
    const ctx = canvas.getContext('2d', { 
      alpha: true,
      desynchronized: true,
      willReadFrequently: false 
    })
    if (!ctx) return
    
    // High DPI setup
    const setupCanvas = () => {
      const rect = container.getBoundingClientRect()
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      
      canvas.width = rect.width * dpr
      canvas.height = rect.height * dpr
      canvas.style.width = `${rect.width}px`
      canvas.style.height = `${rect.height}px`
      
      ctx.scale(dpr, dpr)
      return { width: rect.width, height: rect.height }
    }
    
    let { width, height } = setupCanvas()
    
    // Professional animation parameters
    let time = 0
    const text = "AI TOOLS"
    const fontSize = Math.min(width * 0.15, 120)
    
    // Sophisticated color palette
    const colors = {
      primary: { r: 0, g: 255, b: 136 },      // #00FF88
      secondary: { r: 0, g: 212, b: 255 },    // #00D4FF
      accent: { r: 255, g: 0, b: 68 },        // #FF0044
      glow: { r: 255, g: 255, b: 255 },       // White
      depth: { r: 139, g: 0, b: 255 }         // #8B00FF
    }
    
    // Interpolate between colors
    const interpolateColor = (c1: any, c2: any, t: number) => {
      return {
        r: Math.round(c1.r + (c2.r - c1.r) * t),
        g: Math.round(c1.g + (c2.g - c1.g) * t),
        b: Math.round(c1.b + (c2.b - c1.b) * t)
      }
    }
    
    // Convert color object to string
    const colorToString = (c: any, alpha = 1) => {
      return `rgba(${c.r}, ${c.g}, ${c.b}, ${alpha})`
    }
    
    // Mouse tracking
    container.addEventListener('mousemove', (e) => {
      const rect = container.getBoundingClientRect()
      mouseRef.current = {
        x: (e.clientX - rect.left) / rect.width,
        y: (e.clientY - rect.top) / rect.height
      }
    })
    
    // Advanced wave distortion
    const getWaveOffset = (x: number, y: number, time: number) => {
      const waveX = Math.sin(x * 0.01 + time * 2) * 3
      const waveY = Math.cos(y * 0.01 + time * 1.5) * 2
      const mouseInfluence = 1 - Math.abs(mouseRef.current.x - x / width) * 2
      return {
        x: waveX * (1 + mouseInfluence * 0.5),
        y: waveY * (1 + mouseInfluence * 0.5)
      }
    }
    
    // Professional text rendering with layers
    const renderText = () => {
      ctx.clearRect(0, 0, width, height)
      
      // Calculate text metrics
      ctx.font = `900 ${fontSize}px "Inter", "SF Pro Display", -apple-system, sans-serif`
      ctx.textAlign = 'center'
      ctx.textBaseline = 'middle'
      const textX = width / 2
      const textY = height / 2
      
      // Time-based animations
      const pulse = Math.sin(time * 3) * 0.5 + 0.5
      const glow = Math.sin(time * 2) * 0.3 + 0.7
      const rotation = Math.sin(time * 0.5) * 0.02
      
      ctx.save()
      ctx.translate(textX, textY)
      ctx.rotate(rotation)
      
      // Layer 1: Deep shadow for 3D depth
      for (let i = 20; i > 0; i--) {
        const depth = i * 0.5
        const opacity = 0.03
        ctx.fillStyle = colorToString(colors.accent, opacity)
        ctx.fillText(text, depth, depth)
      }
      
      // Layer 2: Neon glow backdrop
      ctx.shadowBlur = 60
      ctx.shadowColor = colorToString(colors.secondary, glow)
      ctx.fillStyle = colorToString(colors.secondary, 0.1)
      ctx.fillText(text, 0, 0)
      
      // Layer 3: Gradient fill with wave distortion
      const gradient = ctx.createLinearGradient(-fontSize * 2, 0, fontSize * 2, 0)
      const t = (Math.sin(time * 2) + 1) / 2
      const gradColor1 = interpolateColor(colors.primary, colors.secondary, t)
      const gradColor2 = interpolateColor(colors.secondary, colors.depth, t)
      const gradColor3 = interpolateColor(colors.depth, colors.primary, t)
      
      gradient.addColorStop(0, colorToString(gradColor1))
      gradient.addColorStop(0.5, colorToString(gradColor2))
      gradient.addColorStop(1, colorToString(gradColor3))
      
      // Main text with premium gradient
      ctx.shadowBlur = 30
      ctx.shadowColor = colorToString(colors.primary, glow)
      ctx.fillStyle = gradient
      ctx.fillText(text, 0, 0)
      
      // Layer 4: Chrome highlight
      const chromeGradient = ctx.createLinearGradient(
        -fontSize * 2 + time * 100 % (fontSize * 4), -fontSize,
        -fontSize * 2 + time * 100 % (fontSize * 4) + 100, fontSize
      )
      chromeGradient.addColorStop(0, 'rgba(255, 255, 255, 0)')
      chromeGradient.addColorStop(0.5, 'rgba(255, 255, 255, 0.3)')
      chromeGradient.addColorStop(1, 'rgba(255, 255, 255, 0)')
      
      ctx.globalCompositeOperation = 'overlay'
      ctx.fillStyle = chromeGradient
      ctx.fillText(text, 0, 0)
      ctx.globalCompositeOperation = 'source-over'
      
      // Layer 5: Edge lighting
      ctx.strokeStyle = colorToString(colors.glow, 0.2 + pulse * 0.3)
      ctx.lineWidth = 2
      ctx.strokeText(text, 0, 0)
      
      // Layer 6: Particle field
      const particleCount = 20
      for (let i = 0; i < particleCount; i++) {
        const angle = (i / particleCount) * Math.PI * 2 + time
        const radius = 100 + Math.sin(time * 2 + i) * 30
        const px = Math.cos(angle) * radius
        const py = Math.sin(angle) * radius
        const size = 2 + Math.sin(time * 3 + i) * 1
        
        const particleGradient = ctx.createRadialGradient(px, py, 0, px, py, size * 3)
        particleGradient.addColorStop(0, colorToString(colors.secondary, 0.8))
        particleGradient.addColorStop(1, colorToString(colors.secondary, 0))
        
        ctx.fillStyle = particleGradient
        ctx.beginPath()
        ctx.arc(px, py, size * 3, 0, Math.PI * 2)
        ctx.fill()
      }
      
      ctx.restore()
      
      // Energy lines
      ctx.strokeStyle = colorToString(colors.primary, 0.1)
      ctx.lineWidth = 1
      ctx.setLineDash([5, 10])
      ctx.lineDashOffset = time * 50
      
      for (let i = 0; i < 3; i++) {
        const y = textY - 30 + i * 30
        const wave = getWaveOffset(width / 2, y, time)
        ctx.beginPath()
        ctx.moveTo(0, y + wave.y)
        ctx.lineTo(width, y + wave.y)
        ctx.stroke()
      }
      ctx.setLineDash([])
    }
    
    // Animation loop
    const animate = () => {
      time += 0.01
      renderText()
      animationRef.current = requestAnimationFrame(animate)
    }
    
    // Start animation
    animate()
    
    // Handle resize
    const handleResize = () => {
      const newSize = setupCanvas()
      width = newSize.width
      height = newSize.height
    }
    window.addEventListener('resize', handleResize)
    
    // Cleanup
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
      window.removeEventListener('resize', handleResize)
    }
  }, [])
  
  return (
    <div ref={containerRef} className="relative w-full h-[1em] my-0">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ 
          letterSpacing: '0.02em',
          fontWeight: 900 
        }}
      />
      {/* Fallback text for accessibility */}
      <span className="sr-only">AI TOOLS</span>
    </div>
  )
}
