export default function CriticalCSS() {
  return (
    <style dangerouslySetInnerHTML={{
      __html: `
        /* Critical CSS - Only above-the-fold styles */
        *,::after,::before{box-sizing:border-box}
        html{-webkit-text-size-adjust:100%;line-height:1.15}
        body{margin:0;padding:0;background:#000;color:#fff;font-family:Inter,system-ui,-apple-system,sans-serif;-webkit-font-smoothing:antialiased}
        
        /* Prevent layout shift - Reserve space for key elements */
        .min-h-screen{min-height:100vh}
        .min-h-\\[60vh\\]{min-height:60vh}
        .container{width:100%;max-width:1280px;margin:0 auto;padding:0 1rem}
        
        /* Critical positioning to prevent CLS */
        .fixed{position:fixed}
        .relative{position:relative}
        .absolute{position:absolute}
        .z-10{z-index:10}
        .z-20{z-index:20}
        .z-50{z-index:50}
        
        /* Text sizes to prevent font-loading shifts */
        .text-5xl{font-size:3rem;line-height:1}
        .text-7xl{font-size:4.5rem;line-height:1}
        .text-xl{font-size:1.25rem;line-height:1.75rem}
        .text-2xl{font-size:1.5rem;line-height:2rem}
        .text-base{font-size:1rem;line-height:1.5rem}
        .font-bold{font-weight:700}
        .font-black{font-weight:900}
        
        /* Layout stability */
        .flex{display:flex}
        .items-center{align-items:center}
        .justify-center{justify-content:center}
        .py-20{padding-top:5rem;padding-bottom:5rem}
        .mb-6{margin-bottom:1.5rem}
        .mb-8{margin-bottom:2rem}
        
        /* Hero section specific - prevent SHIP CODE shift */
        section.min-h-\\[60vh\\]{min-height:60vh;display:flex;align-items:center;justify-content:center}
        h1{font-size:3rem;margin:0 0 1.5rem 0;font-weight:900}
        @media(min-width:768px){
          h1{font-size:4.5rem}
          .md\\:text-7xl{font-size:4.5rem}
          .md\\:text-2xl{font-size:1.5rem}
        }
        
        /* Navbar height reservation */
        nav.fixed{height:64px;top:0;left:0;right:0;background:#0a0a0a}
        body{padding-top:64px}
        
        /* Animation placeholders - keep animations working */
        .animate-pulse{animation:pulse 2s cubic-bezier(0.4,0,0.6,1) infinite}
        @keyframes pulse{0%,100%{opacity:1}50%{opacity:.5}}
        
        /* Font loading optimization */
        .font-inter{font-family:Inter,system-ui,-apple-system,sans-serif}
        
        /* Prevent FOUC for critical text */
        .bg-gradient-to-r{background-image:linear-gradient(to right,var(--tw-gradient-stops))}
        .from-cyan-400{--tw-gradient-from:#22d3ee}
        .to-blue-500{--tw-gradient-to:#3b82f6}
        .bg-clip-text{-webkit-background-clip:text;background-clip:text}
        .text-transparent{color:transparent}
      `
    }} />
  )
}