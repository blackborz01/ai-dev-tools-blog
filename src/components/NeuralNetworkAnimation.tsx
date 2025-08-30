'use client'

import { useEffect, useRef, useState } from 'react'

interface Node {
  x: number
  y: number
  z: number
  vx: number
  vy: number
  vz: number
  radius: number
  color: string
  pulsePhase: number
  label: string
  type: string
  connections: number[]
  glowIntensity: number
  rotation: number
}

interface Particle {
  x: number
  y: number
  z: number
  vx: number
  vy: number
  life: number
  maxLife: number
  color: string
  size: number
}

interface Connection {
  from: number
  to: number
  pulseOffset: number
  active: boolean
  particles: ConnectionParticle[]
  strength: number
}

interface ConnectionParticle {
  progress: number
  speed: number
  size: number
  trail: { x: number; y: number; opacity: number }[]
}

interface MatrixColumn {
  x: number
  y: number
  speed: number
  opacity: number
  phrase: string[]
  charIndex: number
  color: string
}

export default function NeuralNetworkAnimation() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const animationRef = useRef<number>()
  const mouseRef = useRef({ x: 0, y: 0 })
  const [isLoaded, setIsLoaded] = useState(false)
  
  // Matrix rain phrases - AI and tech related
  const matrixPhrases = [
    ['A', 'I', ' ', 'C', 'O', 'D', 'I', 'N', 'G'],
    ['F', 'U', 'T', 'U', 'R', 'E', ' ', 'T', 'E', 'C', 'H'],
    ['N', 'E', 'U', 'R', 'A', 'L', ' ', 'N', 'E', 'T'],
    ['M', 'A', 'C', 'H', 'I', 'N', 'E'],
    ['L', 'E', 'A', 'R', 'N', 'I', 'N', 'G'],
    ['A', 'U', 'T', 'O', 'M', 'A', 'T', 'I', 'O', 'N'],
    ['D', 'E', 'E', 'P', ' ', 'L', 'E', 'A', 'R', 'N'],
    ['G', 'P', 'T', '-', '4'],
    ['C', 'L', 'A', 'U', 'D', 'E'],
    ['C', 'U', 'R', 'S', 'O', 'R'],
    ['C', 'O', 'P', 'I', 'L', 'O', 'T'],
    ['S', 'Y', 'N', 'T', 'H', 'E', 'S', 'I', 'S'],
    ['Q', 'U', 'A', 'N', 'T', 'U', 'M'],
    ['A', 'L', 'G', 'O', 'R', 'I', 'T', 'H', 'M'],
    ['D', 'A', 'T', 'A', ' ', 'F', 'L', 'O', 'W'],
    ['C', 'O', 'D', 'E', ' ', 'G', 'E', 'N'],
    ['A', 'P', 'I'],
    ['M', 'O', 'D', 'E', 'L'],
    ['T', 'R', 'A', 'I', 'N', 'I', 'N', 'G'],
    ['I', 'N', 'F', 'E', 'R', 'E', 'N', 'C', 'E'],
    ['T', 'O', 'K', 'E', 'N', 'S'],
    ['V', 'E', 'C', 'T', 'O', 'R', 'S'],
    ['E', 'M', 'B', 'E', 'D', 'D', 'I', 'N', 'G'],
    ['T', 'R', 'A', 'N', 'S', 'F', 'O', 'R', 'M'],
    ['N', 'E', 'X', 'T', ' ', 'G', 'E', 'N'],
    ['S', 'M', 'A', 'R', 'T'],
    ['C', 'O', 'D', 'E'],
    ['F', 'A', 'S', 'T'],
    ['B', 'U', 'I', 'L', 'D'],
    ['D', 'E', 'P', 'L', 'O', 'Y'],
    ['S', 'C', 'A', 'L', 'E'],
    ['C', 'L', 'O', 'U', 'D'],
    ['E', 'D', 'G', 'E'],
    ['R', 'E', 'A', 'L', 'T', 'I', 'M', 'E']
  ]
  
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    
    const ctx = canvas.getContext('2d', { alpha: true })
    if (!ctx) return
    
    // Enable better rendering with performance optimizations
    ctx.imageSmoothingEnabled = true
    ctx.imageSmoothingQuality = 'high'
    
    // Set canvas size with proper device pixel ratio for sharp 4K rendering
    const resizeCanvas = () => {
      const container = canvas.parentElement
      if (container) {
        const dpr = window.devicePixelRatio || 1
        const rect = container.getBoundingClientRect()
        
        // Set actual canvas size (accounting for device pixel ratio)
        canvas.width = rect.width * dpr
        canvas.height = rect.height * dpr
        
        // Scale canvas back down using CSS
        canvas.style.width = `${rect.width}px`
        canvas.style.height = `${rect.height}px`
        
        // Scale the drawing context to match device pixel ratio
        // This ensures everything is drawn at the correct size
        ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      }
    }
    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)
    
    // Animation variables
    let rotation = 0
    let time = 0
    let frameCount = 0
    
    // Create nodes for different tool categories with professional design
    const nodes: Node[] = [
      // Central hub - Main AI Core
      {
        x: 0, y: 0, z: 0,
        vx: 0, vy: 0, vz: 0,
        radius: 40,
        color: '#84cc16',
        pulsePhase: 0,
        label: 'AI CORE',
        type: 'core',
        connections: [1, 2, 3, 4, 5, 6, 7, 8],
        glowIntensity: 1,
        rotation: 0
      },
      // Orbital nodes with specific types
      {
        x: 200, y: 0, z: 0,
        vx: 0, vy: 0.3, vz: 0,
        radius: 28,
        color: '#06b6d4',
        pulsePhase: 0,
        label: 'CURSOR',
        type: 'code',
        connections: [0, 3, 5],
        glowIntensity: 0.8,
        rotation: 0
      },
      {
        x: 141, y: 141, z: 30,
        vx: -0.2, vy: 0.2, vz: 0,
        radius: 28,
        color: '#9333ea',
        pulsePhase: Math.PI / 3,
        label: 'MCP',
        type: 'server',
        connections: [0, 4, 6],
        glowIntensity: 0.8,
        rotation: 0
      },
      {
        x: 0, y: 200, z: -20,
        vx: -0.3, vy: 0, vz: 0,
        radius: 28,
        color: '#f59e0b',
        pulsePhase: Math.PI / 2,
        label: 'GPT-4',
        type: 'ai',
        connections: [0, 1, 7],
        glowIntensity: 0.8,
        rotation: 0
      },
      {
        x: -141, y: 141, z: 40,
        vx: -0.2, vy: -0.2, vz: 0,
        radius: 28,
        color: '#ef4444',
        pulsePhase: Math.PI,
        label: 'GITHUB',
        type: 'git',
        connections: [0, 2, 8],
        glowIntensity: 0.8,
        rotation: 0
      },
      {
        x: -200, y: 0, z: -30,
        vx: 0, vy: -0.3, vz: 0,
        radius: 28,
        color: '#8b5cf6',
        pulsePhase: Math.PI * 1.3,
        label: 'CLAUDE',
        type: 'ai',
        connections: [0, 1, 6],
        glowIntensity: 0.8,
        rotation: 0
      },
      {
        x: -141, y: -141, z: 20,
        vx: 0.2, vy: -0.2, vz: 0,
        radius: 28,
        color: '#10b981',
        pulsePhase: Math.PI * 1.6,
        label: 'DOCKER',
        type: 'container',
        connections: [0, 2, 5],
        glowIntensity: 0.8,
        rotation: 0
      },
      {
        x: 0, y: -200, z: -40,
        vx: 0.3, vy: 0, vz: 0,
        radius: 28,
        color: '#06b6d4',
        pulsePhase: Math.PI * 1.8,
        label: 'VSCODE',
        type: 'ide',
        connections: [0, 3, 8],
        glowIntensity: 0.8,
        rotation: 0
      },
      {
        x: 141, y: -141, z: 35,
        vx: 0.2, vy: 0.2, vz: 0,
        radius: 28,
        color: '#ec4899',
        pulsePhase: Math.PI * 2,
        label: 'API',
        type: 'api',
        connections: [0, 4, 7],
        glowIntensity: 0.8,
        rotation: 0
      }
    ]
    
    // Create connections with varying strengths
    const connections: Connection[] = []
    nodes.forEach((node, i) => {
      node.connections.forEach(targetIndex => {
        if (targetIndex > i) {
          connections.push({
            from: i,
            to: targetIndex,
            pulseOffset: Math.random() * Math.PI * 2,
            active: true,
            particles: [],
            strength: i === 0 ? 1 : 0.6
          })
        }
      })
    })
    
    // Initialize connection particles with trails
    connections.forEach(conn => {
      for (let i = 0; i < 2; i++) {
        conn.particles.push({
          progress: Math.random(),
          speed: 0.002 + Math.random() * 0.003,  // Reduced from 0.003-0.01 (60% slower)
          size: 3 + Math.random() * 2,
          trail: []
        })
      }
    })
    
    // Background particles
    const particles: Particle[] = []
    const maxParticles = 40
    
    // Matrix rain columns
    const matrixColumns: MatrixColumn[] = []
    const columnWidth = 25
    const numColumns = 35 // Fixed number of columns for consistency
    
    // Initialize matrix columns spread across the canvas
    for (let i = 0; i < numColumns; i++) {
      const spread = 800 // Total spread width
      matrixColumns.push({
        x: (i * (spread / numColumns)) - spread / 2,
        y: Math.random() * -800,
        speed: 0.4 + Math.random() * 0.8,  // Reduced from 0.8-2.3 (50% slower)
        opacity: 0.08 + Math.random() * 0.15,
        phrase: matrixPhrases[Math.floor(Math.random() * matrixPhrases.length)],
        charIndex: Math.floor(Math.random() * 10),
        color: ['#84cc16', '#06b6d4', '#9333ea'][Math.floor(Math.random() * 3)]
      })
    }
    
    // Mouse interaction
    canvas.addEventListener('mousemove', (e) => {
      const rect = canvas.getBoundingClientRect()
      mouseRef.current = {
        x: e.clientX - rect.left - rect.width / 2,
        y: e.clientY - rect.top - rect.height / 2
      }
    })
    
    // Professional icon drawing functions
    const drawNodeIcon = (ctx: CanvasRenderingContext2D, x: number, y: number, type: string, size: number, color: string) => {
      ctx.save()
      ctx.translate(x, y)
      ctx.strokeStyle = color
      ctx.fillStyle = color
      ctx.lineWidth = 2.5  // Increased for sharper lines
      ctx.lineCap = 'round'
      ctx.lineJoin = 'round'
      
      switch(type) {
        case 'core':
          // Central hexagon with inner details
          drawHexagon(ctx, 0, 0, size * 0.6)
          drawHexagon(ctx, 0, 0, size * 0.4)
          drawHexagon(ctx, 0, 0, size * 0.2)
          // Add connecting lines
          for (let i = 0; i < 6; i++) {
            const angle = (Math.PI * 2 / 6) * i
            ctx.beginPath()
            ctx.moveTo(Math.cos(angle) * size * 0.2, Math.sin(angle) * size * 0.2)
            ctx.lineTo(Math.cos(angle) * size * 0.6, Math.sin(angle) * size * 0.6)
            ctx.stroke()
          }
          break
          
        case 'code':
          // Code brackets < />
          ctx.font = `${size * 0.8}px monospace`
          ctx.textAlign = 'center'
          ctx.textBaseline = 'middle'
          ctx.fillText('< />', 0, 0)
          break
          
        case 'server':
          // Server stack icon
          const layers = 3
          const layerHeight = size * 0.15
          const layerWidth = size * 0.6
          for (let i = 0; i < layers; i++) {
            const y = (i - 1) * layerHeight * 1.5
            ctx.strokeRect(-layerWidth/2, y - layerHeight/2, layerWidth, layerHeight)
            // Add dots for server indicators
            ctx.beginPath()
            ctx.arc(-layerWidth/3, y, 2, 0, Math.PI * 2)
            ctx.fill()
          }
          break
          
        case 'ai':
          // Neural network icon
          const nodeRadius = size * 0.1
          const positions = [
            [-size * 0.3, -size * 0.2],
            [-size * 0.3, size * 0.2],
            [0, -size * 0.2],
            [0, size * 0.2],
            [size * 0.3, 0]
          ]
          // Draw connections
          ctx.globalAlpha = 0.3
          positions.slice(0, 2).forEach(start => {
            positions.slice(2).forEach(end => {
              ctx.beginPath()
              ctx.moveTo(start[0], start[1])
              ctx.lineTo(end[0], end[1])
              ctx.stroke()
            })
          })
          ctx.globalAlpha = 1
          // Draw nodes
          positions.forEach(pos => {
            ctx.beginPath()
            ctx.arc(pos[0], pos[1], nodeRadius, 0, Math.PI * 2)
            ctx.fill()
          })
          break
          
        case 'git':
          // Git branch icon
          ctx.beginPath()
          ctx.arc(0, -size * 0.3, size * 0.15, 0, Math.PI * 2)
          ctx.stroke()
          ctx.beginPath()
          ctx.arc(-size * 0.3, size * 0.3, size * 0.15, 0, Math.PI * 2)
          ctx.fill()
          ctx.beginPath()
          ctx.arc(size * 0.3, size * 0.3, size * 0.15, 0, Math.PI * 2)
          ctx.stroke()
          // Connect branches
          ctx.beginPath()
          ctx.moveTo(0, -size * 0.15)
          ctx.lineTo(0, 0)
          ctx.moveTo(0, 0)
          ctx.lineTo(-size * 0.3, size * 0.15)
          ctx.moveTo(0, 0)
          ctx.lineTo(size * 0.3, size * 0.15)
          ctx.stroke()
          break
          
        case 'container':
          // Container/box icon
          ctx.strokeRect(-size * 0.4, -size * 0.4, size * 0.8, size * 0.8)
          ctx.strokeRect(-size * 0.3, -size * 0.3, size * 0.6, size * 0.6)
          ctx.strokeRect(-size * 0.2, -size * 0.2, size * 0.4, size * 0.4)
          break
          
        case 'ide':
          // IDE/editor icon
          ctx.strokeRect(-size * 0.4, -size * 0.4, size * 0.8, size * 0.8)
          // Add code lines
          for (let i = 0; i < 3; i++) {
            const y = -size * 0.2 + i * size * 0.2
            ctx.beginPath()
            ctx.moveTo(-size * 0.3, y)
            ctx.lineTo(-size * 0.3 + (0.3 + Math.random() * 0.3) * size, y)
            ctx.stroke()
          }
          break
          
        case 'api':
          // API/connection icon
          ctx.beginPath()
          // Draw plug shape
          ctx.arc(-size * 0.2, 0, size * 0.15, -Math.PI/2, Math.PI/2)
          ctx.stroke()
          ctx.arc(size * 0.2, 0, size * 0.15, Math.PI/2, -Math.PI/2)
          ctx.stroke()
          ctx.beginPath()
          ctx.moveTo(-size * 0.2, -size * 0.15)
          ctx.lineTo(size * 0.2, -size * 0.15)
          ctx.moveTo(-size * 0.2, size * 0.15)
          ctx.lineTo(size * 0.2, size * 0.15)
          ctx.stroke()
          break
      }
      
      ctx.restore()
    }
    
    const drawHexagon = (ctx: CanvasRenderingContext2D, x: number, y: number, radius: number) => {
      ctx.beginPath()
      for (let i = 0; i < 6; i++) {
        const angle = (Math.PI * 2 / 6) * i - Math.PI / 2
        const px = x + Math.cos(angle) * radius
        const py = y + Math.sin(angle) * radius
        if (i === 0) {
          ctx.moveTo(px, py)
        } else {
          ctx.lineTo(px, py)
        }
      }
      ctx.closePath()
      ctx.stroke()
    }
    
    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      
      // Get actual drawing dimensions
      const width = canvas.width / (window.devicePixelRatio || 1)
      const height = canvas.height / (window.devicePixelRatio || 1)
      
      // Set origin to center
      ctx.save()
      ctx.translate(width / 2, height / 2)
      
      // Update time
      time += 0.008  // Decreased by 20% from 0.01
      rotation += 0.00064  // Decreased by 20% from 0.0008
      frameCount++
      
      // Draw Matrix rain background first
      ctx.save()
      ctx.font = 'bold 16px "Courier New", monospace'
      ctx.textAlign = 'center'
      ctx.textBaseline = 'middle'
      ctx.letterSpacing = '2px'
      
      // Update and draw matrix columns
      matrixColumns.forEach((column, index) => {
        // Update position
        column.y += column.speed * 1.2  // Decreased by 20% from 1.5
        column.charIndex += 0.02  // Decreased by 20% from 0.025
        
        // Reset when off screen
        if (column.y > height / 2 + 200) {
          column.y = -height / 2 - 200
          column.phrase = matrixPhrases[Math.floor(Math.random() * matrixPhrases.length)]
          column.charIndex = 0
          column.speed = 0.4 + Math.random() * 0.8  // Reduced from 0.8-2.3 (50% slower)
          column.opacity = 0.08 + Math.random() * 0.15
          column.color = ['#84cc16', '#06b6d4', '#9333ea'][Math.floor(Math.random() * 3)]
        }
        
        // Draw the phrase characters vertically
        const phrase = column.phrase
        const visibleChars = 20 // Number of characters to show
        const charSpacing = 24 // Space between characters
        
        for (let i = 0; i < visibleChars; i++) {
          const charIndex = Math.floor(column.charIndex + i) % phrase.length
          const char = phrase[charIndex]
          const charY = column.y + i * charSpacing
          
          // Calculate fade based on position in the trail
          let charOpacity = column.opacity
          if (i === 0) {
            charOpacity *= 1.5 // Brightest leading char
          } else if (i < 3) {
            charOpacity *= (1.2 - i * 0.1) // Gradual fade
          } else if (i > visibleChars - 5) {
            charOpacity *= (visibleChars - i) / 5 // Fade at the end
          }
          
          // Only draw if in viewport
          if (charY > -height / 2 - 50 && charY < height / 2 + 50) {
            const finalOpacity = Math.max(0, Math.min(1, charOpacity))
            ctx.fillStyle = column.color + Math.floor(finalOpacity * 255).toString(16).padStart(2, '0')
            ctx.fillText(char, column.x, charY)
          }
        }
      })
      
      ctx.restore()
      
      // Draw subtle grid background with glow points
      if (frameCount % 2 === 0) { // Draw every other frame for performance
        ctx.strokeStyle = 'rgba(132, 204, 22, 0.02)'
        ctx.lineWidth = 0.5
        const gridSize = 60
        for (let x = -width / 2; x < width / 2; x += gridSize) {
          for (let y = -height / 2; y < height / 2; y += gridSize) {
            // Draw grid intersection points with occasional glow
            if (Math.random() < 0.01) {
              const glowRadius = 2
              const glow = ctx.createRadialGradient(x, y, 0, x, y, glowRadius)
              glow.addColorStop(0, 'rgba(132, 204, 22, 0.4)')
              glow.addColorStop(1, 'transparent')
              ctx.fillStyle = glow
              ctx.fillRect(x - glowRadius, y - glowRadius, glowRadius * 2, glowRadius * 2)
            }
          }
        }
      }
      
      // Update nodes
      nodes.forEach((node, i) => {
        node.rotation += 0.012  // Decreased by 20% from 0.015
        if (i !== 0) {
          // Orbital motion with more complex patterns
          const angle = rotation + (i - 1) * (Math.PI * 2 / 8)
          const radius = 240 + Math.sin(time + node.pulsePhase) * 30 + Math.cos(time * 0.7) * 20
          node.x = Math.cos(angle) * radius
          node.y = Math.sin(angle) * radius
          node.z = Math.sin(time * 0.5 + node.pulsePhase) * 50
          
          // Mouse influence with smoother interpolation
          const dx = mouseRef.current.x - node.x
          const dy = mouseRef.current.y - node.y
          const distance = Math.sqrt(dx * dx + dy * dy)
          if (distance < 250) {
            const force = Math.pow((250 - distance) / 250, 2)
            node.x -= (dx / distance) * force * 20
            node.y -= (dy / distance) * force * 20
            node.glowIntensity = 0.8 + force * 0.4
          } else {
            node.glowIntensity = 0.8
          }
        }
        
        // Update pulse
        node.pulsePhase += 0.016  // Decreased by 20% from 0.02
      })
      
      // Sort nodes by z-index for proper layering
      const sortedNodes = [...nodes].sort((a, b) => a.z - b.z)
      
      // Draw connections with energy flow
      connections.forEach(conn => {
        const fromNode = nodes[conn.from]
        const toNode = nodes[conn.to]
        
        // Calculate connection opacity based on distance
        const dist = Math.sqrt(Math.pow(toNode.x - fromNode.x, 2) + Math.pow(toNode.y - fromNode.y, 2))
        const opacity = Math.max(0.2, 1 - dist / 500)
        
        // Draw multiple connection layers for depth
        for (let layer = 3; layer > 0; layer--) {
          const layerOpacity = opacity * (0.3 / layer)
          const gradient = ctx.createLinearGradient(
            fromNode.x, fromNode.y,
            toNode.x, toNode.y
          )
          gradient.addColorStop(0, fromNode.color + Math.max(0, Math.floor(layerOpacity * 255)).toString(16).padStart(2, '0'))
          gradient.addColorStop(0.5, '#84cc16' + Math.max(0, Math.floor(layerOpacity * 255)).toString(16).padStart(2, '0'))
          gradient.addColorStop(1, toNode.color + Math.max(0, Math.floor(layerOpacity * 255)).toString(16).padStart(2, '0'))
          
          ctx.strokeStyle = gradient
          ctx.lineWidth = layer * conn.strength
          ctx.beginPath()
          ctx.moveTo(fromNode.x, fromNode.y)
          ctx.lineTo(toNode.x, toNode.y)
          ctx.stroke()
        }
        
        // Update and draw connection particles with trails
        conn.particles.forEach(particle => {
          particle.progress += particle.speed
          if (particle.progress > 1) {
            particle.progress = 0
            particle.speed = 0.002 + Math.random() * 0.003  // Reduced from 0.003-0.01 (60% slower)
            particle.trail = []
          }
          
          const x = fromNode.x + (toNode.x - fromNode.x) * particle.progress
          const y = fromNode.y + (toNode.y - fromNode.y) * particle.progress
          
          // Add to trail
          particle.trail.push({ x, y, opacity: 1 })
          if (particle.trail.length > 10) {
            particle.trail.shift()
          }
          
          // Draw trail
          particle.trail.forEach((point, i) => {
            point.opacity *= 0.95
            const trailOpacity = Math.max(0, Math.floor(point.opacity * 255)).toString(16).padStart(2, '0')
            ctx.fillStyle = '#84cc16' + trailOpacity
            ctx.beginPath()
            ctx.arc(point.x, point.y, particle.size * (i / particle.trail.length), 0, Math.PI * 2)
            ctx.fill()
          })
          
          // Draw main particle without glow
          ctx.fillStyle = '#84cc16'
          ctx.globalAlpha = 0.8
          ctx.beginPath()
          ctx.arc(x, y, particle.size, 0, Math.PI * 2)
          ctx.fill()
          ctx.globalAlpha = 1
        })
      })
      
      // Draw nodes with professional styling
      sortedNodes.forEach(node => {
        const scale = 1 + (node.z / 200) * 0.3
        const actualRadius = node.radius * scale * (1 + Math.sin(node.pulsePhase) * 0.05)
        
        // Skip glow layers - go straight to node body
        // Draw node background with gradient
        const nodeGradient = ctx.createRadialGradient(
          node.x - actualRadius / 3, node.y - actualRadius / 3, 0,
          node.x, node.y, actualRadius
        )
        nodeGradient.addColorStop(0, node.color)
        nodeGradient.addColorStop(0.7, node.color + 'cc')
        nodeGradient.addColorStop(1, node.color + '66')
        
        // Draw hexagonal shape for nodes with anti-aliasing
        ctx.save()
        ctx.translate(node.x, node.y)
        ctx.rotate(node.rotation)
        ctx.fillStyle = nodeGradient
        ctx.strokeStyle = node.color
        ctx.lineWidth = 2.5
        ctx.lineCap = 'round'
        ctx.lineJoin = 'round'
        
        // Enable sub-pixel rendering for smoother edges
        ctx.beginPath()
        const sides = node.type === 'core' ? 8 : 6
        for (let i = 0; i <= sides; i++) {  // <= to close the path properly
          const angle = (Math.PI * 2 / sides) * i
          const px = Math.cos(angle) * actualRadius
          const py = Math.sin(angle) * actualRadius
          if (i === 0) {
            ctx.moveTo(px, py)
          } else {
            ctx.lineTo(px, py)
          }
        }
        ctx.closePath()
        ctx.fill()
        ctx.stroke()
        ctx.restore()
        
        // Draw node icon
        drawNodeIcon(ctx, node.x, node.y, node.type, actualRadius, 'rgba(255, 255, 255, 0.9)')
        
        // Draw label with better styling and higher quality
        ctx.save()
        ctx.font = `bold ${12}px -apple-system, BlinkMacSystemFont, 'Segoe UI', monospace`
        ctx.textAlign = 'center'
        ctx.textBaseline = 'top'
        ctx.fillStyle = 'rgba(255, 255, 255, 0.95)'
        ctx.strokeStyle = 'rgba(0, 0, 0, 0.8)'
        ctx.lineWidth = 4
        ctx.lineJoin = 'round'
        ctx.strokeText(node.label, node.x, node.y + actualRadius + 10)
        ctx.fillText(node.label, node.x, node.y + actualRadius + 10)
        ctx.restore()
      })
      
      // Update and draw ambient particles
      if (particles.length < maxParticles && Math.random() < 0.1) {
        particles.push({
          x: (Math.random() - 0.5) * width,
          y: (Math.random() - 0.5) * height,
          z: Math.random() * 100 - 50,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
          life: 0,
          maxLife: 150 + Math.random() * 150,
          color: ['#84cc16', '#06b6d4', '#9333ea'][Math.floor(Math.random() * 3)],
          size: 1 + Math.random() * 2
        })
      }
      
      particles.forEach((particle, i) => {
        particle.x += particle.vx
        particle.y += particle.vy
        particle.life++
        
        const lifeRatio = particle.life / particle.maxLife
        const opacity = lifeRatio < 0.5 ? lifeRatio * 2 : (1 - lifeRatio) * 2
        
        // Draw particle without glow
        const opacityHex = Math.max(0, Math.floor(opacity * 255)).toString(16).padStart(2, '0')
        ctx.fillStyle = particle.color + opacityHex
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
        ctx.fill()
        
        if (particle.life >= particle.maxLife) {
          particles.splice(i, 1)
        }
      })
      
      ctx.restore()
      
      // Continue animation
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
    <div className="w-full h-full relative">
      <canvas
        ref={canvasRef}
        className={`w-full h-full ${isLoaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-1000`}
        style={{ 
          minHeight: '700px',
          imageRendering: 'auto',
          WebkitFontSmoothing: 'antialiased',
          MozOsxFontSmoothing: 'grayscale'
        }}
      />
      {/* Status indicator */}
      <div className="absolute bottom-4 right-4 flex items-center gap-2 opacity-30 hover:opacity-60 transition-opacity">
        <div className="w-2 h-2 bg-lime-400 rounded-full animate-pulse"></div>
        <p className="text-xs font-mono uppercase tracking-wider">Neural Network Active</p>
      </div>
    </div>
  )
}
