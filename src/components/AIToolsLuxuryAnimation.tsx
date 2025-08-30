'use client'

import { useEffect, useRef, useState } from 'react'

interface HologramLayer {
  offset: number
  speed: number
  opacity: number
  color: string
}

interface QuantumParticle {
  x: number
  y: number
  z: number
  vx: number
  vy: number
  vz: number
  life: number
  maxLife: number
  color: string
  size: number
  glowIntensity: number
  connections: number[]
  type: 'quantum' | 'data' | 'neural' | 'plasma'
}

interface DNAPoint {
  x: number
  y: number
  z: number
  angle: number
  radius: number
  strand: number
  color: string
}

interface CyberGrid {
  x: number
  y: number
  z: number
  intensity: number
  pulsePhase: number
  active: boolean
}

interface MatrixRain {
  x: number
  y: number
  speed: number
  chars: string[]
  opacity: number
  color: string
  glitchPhase: number
}

interface TechOrb {
  x: number
  y: number
  z: number
  radius: number
  rotation: number
  color: string
  type: string
  pulseIntensity: number
  shields: number
}

export default function AIToolsLuxuryAnimation() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const animationRef = useRef<number>()
  const mouseRef = useRef({ x: 0, y: 0, velocity: { x: 0, y: 0 } })
  const [isLoaded, setIsLoaded] = useState(false)
  const timeRef = useRef(0)
  
  // Premium AI tech terms for matrix rain
  const techTerms = [
    'NEURAL', 'QUANTUM', 'CYBER', 'MATRIX', 'DIGITAL', 'PLASMA',
    'PHOTON', 'TENSOR', 'VECTOR', 'KERNEL', 'FUSION', 'NEXUS',
    'CHROME', 'NEON', 'BLADE', 'GHOST', 'PRISM', 'AXIOM',
    'FLUX', 'NOVA', 'VOID', 'APEX', 'OMEGA', 'ZENITH',
    'CRYPTO', 'PULSE', 'SYNTH', 'FORGE', 'PRIME', 'ULTRA'
  ]
  
  // Holographic color schemes
  const luxuryColors = {
    primary: '#00ffff',
    secondary: '#ff00ff',
    accent: '#ffff00',
    neon: '#39ff14',
    plasma: '#ff1493',
    quantum: '#00ff00',
    hologram: '#00e5ff',
    cyber: '#ff00a0',
    matrix: '#00ff41',
    gold: '#ffd700',
    silver: '#c0c0c0',
    chrome: '#dbdbdb'
  }
  
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    
    const ctx = canvas.getContext('2d', { alpha: true })
    if (!ctx) return
    
    // Enable premium rendering
    ctx.imageSmoothingEnabled = true
    ctx.imageSmoothingQuality = 'high'
    
    // Canvas setup with high DPI support
    const resizeCanvas = () => {
      const container = canvas.parentElement
      if (container) {
        const dpr = Math.min(window.devicePixelRatio || 1, 2) // Cap at 2 for performance
        const rect = container.getBoundingClientRect()
        
        canvas.width = rect.width * dpr
        canvas.height = rect.height * dpr
        canvas.style.width = `${rect.width}px`
        canvas.style.height = `${rect.height}px`
        
        ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      }
    }
    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)
    
    // Initialize premium animation elements
    const quantumParticles: QuantumParticle[] = []
    const dnaPoints: DNAPoint[] = []
    const cyberGrid: CyberGrid[] = []
    const matrixRain: MatrixRain[] = []
    const techOrbs: TechOrb[] = []
    const hologramLayers: HologramLayer[] = []
    
    // Create DNA double helix
    const dnaStrandCount = 2
    const dnaPointsPerStrand = 50
    for (let strand = 0; strand < dnaStrandCount; strand++) {
      for (let i = 0; i < dnaPointsPerStrand; i++) {
        dnaPoints.push({
          x: 0,
          y: -200 + (i * 8),
          z: 0,
          angle: (i * Math.PI / 10) + (strand * Math.PI),
          radius: 80,
          strand: strand,
          color: strand === 0 ? luxuryColors.primary : luxuryColors.secondary
        })
      }
    }
    
    // Create cyber grid
    const gridSize = 30
    const gridCount = 20
    for (let x = -gridCount / 2; x < gridCount / 2; x++) {
      for (let y = -gridCount / 2; y < gridCount / 2; y++) {
        cyberGrid.push({
          x: x * gridSize,
          y: y * gridSize,
          z: -100,
          intensity: 0,
          pulsePhase: Math.random() * Math.PI * 2,
          active: Math.random() > 0.7
        })
      }
    }
    
    // Create holographic layers
    for (let i = 0; i < 5; i++) {
      hologramLayers.push({
        offset: i * 20,
        speed: 0.5 + i * 0.2,
        opacity: 0.1 + i * 0.05,
        color: Object.values(luxuryColors)[i % Object.values(luxuryColors).length]
      })
    }
    
    // Create matrix rain columns
    const columnWidth = 20
    const numColumns = 40
    for (let i = 0; i < numColumns; i++) {
      const chars: string[] = []
      const term = techTerms[Math.floor(Math.random() * techTerms.length)]
      for (let j = 0; j < term.length; j++) {
        chars.push(term[j])
      }
      
      matrixRain.push({
        x: (i - numColumns / 2) * columnWidth,
        y: Math.random() * -500,
        speed: 1 + Math.random() * 2,
        chars: chars,
        opacity: 0.3 + Math.random() * 0.7,
        color: Object.values(luxuryColors)[Math.floor(Math.random() * 4)],
        glitchPhase: Math.random() * Math.PI * 2
      })
    }
    
    // Create tech orbs
    const orbTypes = ['AI', 'ML', 'QUANTUM', 'NEURAL', 'CYBER', 'DATA']
    for (let i = 0; i < 6; i++) {
      techOrbs.push({
        x: Math.cos(i * Math.PI / 3) * 200,
        y: Math.sin(i * Math.PI / 3) * 200,
        z: 0,
        radius: 30,
        rotation: 0,
        color: Object.values(luxuryColors)[i],
        type: orbTypes[i],
        pulseIntensity: 1,
        shields: 3
      })
    }
    
    // Mouse tracking with velocity
    canvas.addEventListener('mousemove', (e) => {
      const rect = canvas.getBoundingClientRect()
      const newX = e.clientX - rect.left - rect.width / 2
      const newY = e.clientY - rect.top - rect.height / 2
      
      mouseRef.current.velocity.x = newX - mouseRef.current.x
      mouseRef.current.velocity.y = newY - mouseRef.current.y
      mouseRef.current.x = newX
      mouseRef.current.y = newY
    })
    
    // Premium visual effects functions
    const drawHolographicText = (
      ctx: CanvasRenderingContext2D,
      text: string,
      x: number,
      y: number,
      size: number,
      color: string,
      glitch: boolean = false
    ) => {
      ctx.save()
      ctx.font = `bold ${size}px "Orbitron", "Roboto Mono", monospace`
      ctx.textAlign = 'center'
      ctx.textBaseline = 'middle'
      ctx.letterSpacing = '0.2em'
      
      // Draw multiple layers for holographic effect
      const layers = glitch ? 5 : 3
      for (let i = layers; i >= 0; i--) {
        const offset = i * 2
        const opacity = (1 - i / layers) * 0.8
        
        if (glitch && i > 0) {
          // Glitch offset
          const glitchX = (Math.random() - 0.5) * 5
          const glitchY = (Math.random() - 0.5) * 3
          ctx.fillStyle = color + Math.floor(opacity * 255).toString(16).padStart(2, '0')
          ctx.fillText(text, x + offset + glitchX, y + glitchY)
        } else {
          // Normal holographic layers
          ctx.fillStyle = color + Math.floor(opacity * 255).toString(16).padStart(2, '0')
          ctx.fillText(text, x + offset, y)
        }
      }
      
      ctx.restore()
    }
    
    const drawPlasmaBeam = (
      ctx: CanvasRenderingContext2D,
      x1: number, y1: number,
      x2: number, y2: number,
      color: string,
      intensity: number
    ) => {
      const gradient = ctx.createLinearGradient(x1, y1, x2, y2)
      gradient.addColorStop(0, color + '00')
      gradient.addColorStop(0.3, color + Math.floor(intensity * 100).toString(16).padStart(2, '0'))
      gradient.addColorStop(0.5, color + Math.floor(intensity * 255).toString(16).padStart(2, '0'))
      gradient.addColorStop(0.7, color + Math.floor(intensity * 100).toString(16).padStart(2, '0'))
      gradient.addColorStop(1, color + '00')
      
      ctx.strokeStyle = gradient
      ctx.lineWidth = 3 + intensity * 2
      ctx.lineCap = 'round'
      ctx.shadowBlur = 20
      ctx.shadowColor = color
      
      ctx.beginPath()
      ctx.moveTo(x1, y1)
      
      // Add electric effect
      const segments = 10
      for (let i = 1; i <= segments; i++) {
        const t = i / segments
        const x = x1 + (x2 - x1) * t + (Math.random() - 0.5) * intensity * 10
        const y = y1 + (y2 - y1) * t + (Math.random() - 0.5) * intensity * 10
        ctx.lineTo(x, y)
      }
      
      ctx.stroke()
      ctx.shadowBlur = 0
    }
    
    const drawTechOrb = (
      ctx: CanvasRenderingContext2D,
      orb: TechOrb,
      time: number
    ) => {
      ctx.save()
      ctx.translate(orb.x, orb.y)
      ctx.rotate(orb.rotation)
      
      // Draw shield layers
      for (let shield = orb.shields; shield > 0; shield--) {
        const shieldRadius = orb.radius + shield * 15
        const shieldOpacity = 0.1 * orb.pulseIntensity
        
        ctx.strokeStyle = orb.color + Math.floor(shieldOpacity * 255).toString(16).padStart(2, '0')
        ctx.lineWidth = 1
        ctx.setLineDash([5, 10])
        ctx.lineDashOffset = time * 2
        
        ctx.beginPath()
        ctx.arc(0, 0, shieldRadius, 0, Math.PI * 2)
        ctx.stroke()
        ctx.setLineDash([])
      }
      
      // Draw core with gradient
      const coreGradient = ctx.createRadialGradient(0, 0, 0, 0, 0, orb.radius)
      coreGradient.addColorStop(0, orb.color)
      coreGradient.addColorStop(0.5, orb.color + 'cc')
      coreGradient.addColorStop(1, orb.color + '33')
      
      ctx.fillStyle = coreGradient
      ctx.beginPath()
      ctx.arc(0, 0, orb.radius * orb.pulseIntensity, 0, Math.PI * 2)
      ctx.fill()
      
      // Draw tech label
      ctx.font = 'bold 10px "Roboto Mono", monospace'
      ctx.fillStyle = '#ffffff'
      ctx.textAlign = 'center'
      ctx.textBaseline = 'middle'
      ctx.fillText(orb.type, 0, 0)
      
      ctx.restore()
    }
    
    const drawQuantumParticle = (
      ctx: CanvasRenderingContext2D,
      particle: QuantumParticle,
      time: number
    ) => {
      const pulse = Math.sin(time * 5 + particle.life) * 0.5 + 0.5
      const size = particle.size * (1 + pulse * 0.3)
      
      // Draw quantum glow
      const glow = ctx.createRadialGradient(
        particle.x, particle.y, 0,
        particle.x, particle.y, size * 3
      )
      const opacityHigh = Math.floor(Math.max(0, Math.min(255, particle.glowIntensity * 255))).toString(16).padStart(2, '0')
      const opacityMid = Math.floor(Math.max(0, Math.min(255, particle.glowIntensity * 100))).toString(16).padStart(2, '0')
      glow.addColorStop(0, particle.color + opacityHigh)
      glow.addColorStop(0.5, particle.color + opacityMid)
      glow.addColorStop(1, particle.color + '00')
      
      ctx.fillStyle = glow
      ctx.fillRect(
        particle.x - size * 3,
        particle.y - size * 3,
        size * 6,
        size * 6
      )
      
      // Draw particle core
      ctx.fillStyle = particle.color
      ctx.beginPath()
      ctx.arc(particle.x, particle.y, size, 0, Math.PI * 2)
      ctx.fill()
    }
    
    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      
      const width = canvas.width / (window.devicePixelRatio || 1)
      const height = canvas.height / (window.devicePixelRatio || 1)
      
      ctx.save()
      ctx.translate(width / 2, height / 2)
      
      timeRef.current += 0.01
      const time = timeRef.current
      
      // Draw background cyber grid with perspective
      ctx.save()
      ctx.globalAlpha = 0.3
      cyberGrid.forEach(point => {
        if (!point.active) return
        
        point.pulsePhase += 0.05
        const pulse = Math.sin(point.pulsePhase) * 0.5 + 0.5
        point.intensity = pulse
        
        // Calculate perspective
        const perspective = 1 / (1 + point.z / 500)
        const projX = point.x * perspective
        const projY = point.y * perspective
        
        // Draw grid point
        const gradient = ctx.createRadialGradient(
          projX, projY, 0,
          projX, projY, 5 * perspective
        )
        gradient.addColorStop(0, luxuryColors.neon + Math.floor(point.intensity * 255).toString(16).padStart(2, '0'))
        gradient.addColorStop(1, luxuryColors.neon + '00')
        
        ctx.fillStyle = gradient
        ctx.fillRect(
          projX - 5 * perspective,
          projY - 5 * perspective,
          10 * perspective,
          10 * perspective
        )
      })
      ctx.restore()
      
      // Draw matrix rain with glitch effects
      ctx.save()
      matrixRain.forEach(column => {
        column.y += column.speed
        column.glitchPhase += 0.1
        
        if (column.y > height / 2 + 100) {
          column.y = -height / 2 - 100
          column.chars = techTerms[Math.floor(Math.random() * techTerms.length)].split('')
        }
        
        // Draw characters with cascade effect
        column.chars.forEach((char, i) => {
          const charY = column.y + i * 20
          const charOpacity = column.opacity * (1 - i / column.chars.length)
          
          // Glitch effect
          const glitchOffset = Math.sin(column.glitchPhase + i) * 2
          
          ctx.font = 'bold 14px "Roboto Mono", monospace'
          ctx.fillStyle = column.color + Math.floor(charOpacity * 255).toString(16).padStart(2, '0')
          ctx.fillText(char, column.x + glitchOffset, charY)
        })
      })
      ctx.restore()
      
      // Draw DNA helix with rotation
      ctx.save()
      ctx.globalAlpha = 0.6
      dnaPoints.forEach((point, i) => {
        const nextPoint = dnaPoints[i + 1]
        if (nextPoint && nextPoint.strand === point.strand) {
          // Update position
          point.x = Math.cos(point.angle + time) * point.radius
          point.z = Math.sin(point.angle + time) * point.radius
          
          nextPoint.x = Math.cos(nextPoint.angle + time) * nextPoint.radius
          nextPoint.z = Math.sin(nextPoint.angle + time) * nextPoint.radius
          
          // Draw connection
          const gradient = ctx.createLinearGradient(
            point.x, point.y,
            nextPoint.x, nextPoint.y
          )
          gradient.addColorStop(0, point.color)
          gradient.addColorStop(1, nextPoint.color)
          
          ctx.strokeStyle = gradient
          ctx.lineWidth = 2 + Math.sin(time * 2 + i * 0.1) * 1
          ctx.beginPath()
          ctx.moveTo(point.x, point.y)
          ctx.lineTo(nextPoint.x, nextPoint.y)
          ctx.stroke()
        }
        
        // Connect strands
        if (i % 5 === 0 && i < dnaPoints.length / 2) {
          const otherStrand = dnaPoints[i + dnaPointsPerStrand]
          if (otherStrand) {
            drawPlasmaBeam(
              ctx,
              point.x, point.y,
              otherStrand.x, otherStrand.y,
              luxuryColors.quantum,
              0.3
            )
          }
        }
      })
      ctx.restore()
      
      // Update and draw tech orbs
      techOrbs.forEach((orb, i) => {
        orb.rotation += 0.02
        orb.pulseIntensity = 1 + Math.sin(time * 2 + i) * 0.2
        
        // Orbital motion
        const angle = time * 0.5 + (i * Math.PI * 2 / techOrbs.length)
        orb.x = Math.cos(angle) * 250
        orb.y = Math.sin(angle) * 150
        orb.z = Math.sin(time + i) * 50
        
        // Mouse interaction
        const dx = mouseRef.current.x - orb.x
        const dy = mouseRef.current.y - orb.y
        const dist = Math.sqrt(dx * dx + dy * dy)
        
        if (dist < 150) {
          orb.shields = Math.min(5, orb.shields + 0.1)
          orb.pulseIntensity *= 1.2
          
          // Draw connection beam to mouse
          drawPlasmaBeam(
            ctx,
            orb.x, orb.y,
            mouseRef.current.x, mouseRef.current.y,
            orb.color,
            0.5 * (1 - dist / 150)
          )
        } else {
          orb.shields = Math.max(3, orb.shields - 0.05)
        }
        
        drawTechOrb(ctx, orb, time)
      })
      
      // Connect orbs with energy beams
      for (let i = 0; i < techOrbs.length; i++) {
        const orb1 = techOrbs[i]
        const orb2 = techOrbs[(i + 1) % techOrbs.length]
        
        const connectionIntensity = Math.sin(time * 3 + i) * 0.3 + 0.3
        drawPlasmaBeam(
          ctx,
          orb1.x, orb1.y,
          orb2.x, orb2.y,
          luxuryColors.hologram,
          connectionIntensity
        )
      }
      
      // Update and draw quantum particles
      if (quantumParticles.length < 50 && Math.random() < 0.3) {
        quantumParticles.push({
          x: (Math.random() - 0.5) * width,
          y: (Math.random() - 0.5) * height,
          z: Math.random() * 200 - 100,
          vx: (Math.random() - 0.5) * 2,
          vy: (Math.random() - 0.5) * 2,
          vz: (Math.random() - 0.5) * 1,
          life: 0,
          maxLife: 100 + Math.random() * 100,
          color: Object.values(luxuryColors)[Math.floor(Math.random() * 5)],
          size: 2 + Math.random() * 3,
          glowIntensity: 0.8,
          connections: [],
          type: ['quantum', 'data', 'neural', 'plasma'][Math.floor(Math.random() * 4)] as any
        })
      }
      
      quantumParticles.forEach((particle, i) => {
        particle.x += particle.vx
        particle.y += particle.vy
        particle.z += particle.vz
        particle.life++
        
        // Fade based on life
        const lifeRatio = particle.life / particle.maxLife
        particle.glowIntensity = (1 - lifeRatio) * 0.8
        
        // Connect nearby particles
        quantumParticles.forEach((other, j) => {
          if (i !== j) {
            const dx = other.x - particle.x
            const dy = other.y - particle.y
            const dist = Math.sqrt(dx * dx + dy * dy)
            
            if (dist < 100 && particle.type === other.type) {
              ctx.strokeStyle = particle.color + '33'
              ctx.lineWidth = 0.5
              ctx.beginPath()
              ctx.moveTo(particle.x, particle.y)
              ctx.lineTo(other.x, other.y)
              ctx.stroke()
            }
          }
        })
        
        drawQuantumParticle(ctx, particle, time)
        
        if (particle.life >= particle.maxLife) {
          quantumParticles.splice(i, 1)
        }
      })
      
      // Draw holographic overlays
      hologramLayers.forEach(layer => {
        ctx.save()
        ctx.globalAlpha = layer.opacity
        ctx.strokeStyle = layer.color
        ctx.lineWidth = 0.5
        ctx.setLineDash([10, 20])
        ctx.lineDashOffset = time * layer.speed * 10
        
        // Draw scanning lines
        const scanY = ((time * layer.speed * 100) % (height + 200)) - height / 2 - 100
        ctx.beginPath()
        ctx.moveTo(-width / 2, scanY + layer.offset)
        ctx.lineTo(width / 2, scanY + layer.offset)
        ctx.stroke()
        
        ctx.restore()
      })
      
      // Draw premium title with glitch effect
      const glitchActive = Math.sin(time * 10) > 0.9
      drawHolographicText(
        ctx,
        'AI TOOLS NEXUS',
        0, -height / 2 + 60,
        48,
        luxuryColors.primary,
        glitchActive
      )
      
      // Draw subtitle
      drawHolographicText(
        ctx,
        'QUANTUM INTELLIGENCE PLATFORM',
        0, -height / 2 + 100,
        16,
        luxuryColors.secondary,
        false
      )
      
      // Draw status indicators
      ctx.save()
      ctx.font = 'bold 10px "Roboto Mono", monospace'
      ctx.fillStyle = luxuryColors.neon + 'cc'
      ctx.textAlign = 'left'
      
      const statusY = height / 2 - 30
      ctx.fillText(`QUANTUM CORES: ${techOrbs.length}`, -width / 2 + 20, statusY)
      ctx.fillText(`NEURAL LINKS: ${quantumParticles.length}`, -width / 2 + 150, statusY)
      ctx.fillText(`SYSTEM STATUS: OPTIMAL`, -width / 2 + 280, statusY)
      
      // Blinking status dot
      const blink = Math.sin(time * 5) > 0
      if (blink) {
        ctx.fillStyle = luxuryColors.neon
        ctx.beginPath()
        ctx.arc(-width / 2 + 420, statusY, 3, 0, Math.PI * 2)
        ctx.fill()
      }
      ctx.restore()
      
      ctx.restore()
      
      animationRef.current = requestAnimationFrame(animate)
    }
    
    // Start animation
    setIsLoaded(true)
    animate()
    
    // Cleanup
    return () => {
      window.removeEventListener('resize', resizeCanvas)
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [])
  
  return (
    <div className="relative w-full h-full min-h-[600px] bg-black overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-blue-900 to-pink-900 animate-gradient-shift" />
        <div className="absolute inset-0 bg-gradient-to-tr from-cyan-900 via-purple-900 to-yellow-900 animate-gradient-shift-reverse opacity-50" />
      </div>
      
      {/* Main canvas */}
      <canvas
        ref={canvasRef}
        className={`relative z-10 w-full h-full ${isLoaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-2000`}
        style={{
          filter: 'contrast(1.1) brightness(1.1)',
          mixBlendMode: 'screen'
        }}
      />
      
      {/* Overlay effects */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Scan lines */}
        <div className="absolute inset-0 bg-scan-lines opacity-5" />
        
        {/* Vignette */}
        <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-black opacity-50" />
        
        {/* Chrome aberration simulation */}
        <div className="absolute inset-0 animate-pulse-slow">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-transparent to-red-500/10 mix-blend-screen" />
        </div>
      </div>
      
      {/* Premium indicators */}
      <div className="absolute top-4 right-4 flex items-center gap-2 text-cyan-400 font-mono text-xs uppercase tracking-wider opacity-60">
        <div className="flex items-center gap-1">
          <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse-fast shadow-glow-cyan" />
          <span>Quantum Engine Active</span>
        </div>
      </div>
      
      <div className="absolute bottom-4 left-4 flex items-center gap-4 text-xs font-mono uppercase tracking-wider opacity-40">
        <span className="text-purple-400">Neural: Online</span>
        <span className="text-cyan-400">Plasma: Stable</span>
        <span className="text-yellow-400">Matrix: Synced</span>
      </div>
      
      <style jsx>{`
        @keyframes gradient-shift {
          0%, 100% { transform: translate(0, 0) rotate(0deg) scale(1); }
          25% { transform: translate(-5%, 5%) rotate(90deg) scale(1.1); }
          50% { transform: translate(5%, -5%) rotate(180deg) scale(1); }
          75% { transform: translate(-5%, -5%) rotate(270deg) scale(1.1); }
        }
        
        @keyframes gradient-shift-reverse {
          0%, 100% { transform: translate(0, 0) rotate(0deg) scale(1); }
          25% { transform: translate(5%, -5%) rotate(-90deg) scale(1.1); }
          50% { transform: translate(-5%, 5%) rotate(-180deg) scale(1); }
          75% { transform: translate(5%, 5%) rotate(-270deg) scale(1.1); }
        }
        
        @keyframes pulse-slow {
          0%, 100% { opacity: 0; }
          50% { opacity: 1; }
        }
        
        @keyframes pulse-fast {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.3; }
        }
        
        .animate-gradient-shift {
          animation: gradient-shift 20s ease-in-out infinite;
        }
        
        .animate-gradient-shift-reverse {
          animation: gradient-shift-reverse 25s ease-in-out infinite;
        }
        
        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }
        
        .animate-pulse-fast {
          animation: pulse-fast 1s ease-in-out infinite;
        }
        
        .bg-scan-lines {
          background-image: repeating-linear-gradient(
            0deg,
            transparent,
            transparent 2px,
            rgba(255, 255, 255, 0.03) 2px,
            rgba(255, 255, 255, 0.03) 4px
          );
        }
        
        .bg-gradient-radial {
          background: radial-gradient(circle at center, var(--tw-gradient-stops));
        }
        
        .shadow-glow-cyan {
          box-shadow: 0 0 10px #00ffff, 0 0 20px #00ffff, 0 0 30px #00ffff;
        }
      `}</style>
    </div>
  )
}
