export default function EnhancedCriticalCSS() {
  return (
    <>
      <style dangerouslySetInnerHTML={{
        __html: `
          /* Enhanced Critical CSS - Comprehensive above-the-fold styles */
          
          /* Reset and Base */
          *,::after,::before{box-sizing:border-box}
          html{-webkit-text-size-adjust:100%;line-height:1.15;scroll-behavior:smooth}
          body{margin:0;padding:0;background:#000;color:#fff;font-family:Inter,system-ui,-apple-system,sans-serif;-webkit-font-smoothing:antialiased;min-height:100vh}
          
          /* Typography - Prevent FOUT */
          h1,h2,h3,h4,h5,h6{margin:0;font-weight:700}
          h1{font-size:3rem;line-height:1;font-weight:900}
          h2{font-size:2.25rem;line-height:1.2}
          h3{font-size:1.875rem;line-height:1.25}
          p{margin:0;line-height:1.75}
          a{color:inherit;text-decoration:none}
          
          /* Layout System */
          .container{width:100%;max-width:1280px;margin:0 auto;padding:0 1rem}
          .min-h-screen{min-height:100vh}
          .min-h-\\[60vh\\]{min-height:60vh}
          .min-h-\\[80vh\\]{min-height:80vh}
          
          /* Flexbox & Grid */
          .flex{display:flex}
          .inline-flex{display:inline-flex}
          .grid{display:grid}
          .hidden{display:none}
          .block{display:block}
          .inline-block{display:inline-block}
          .flex-col{flex-direction:column}
          .flex-row{flex-direction:row}
          .flex-wrap{flex-wrap:wrap}
          .items-center{align-items:center}
          .items-start{align-items:flex-start}
          .justify-center{justify-content:center}
          .justify-between{justify-content:space-between}
          .justify-start{justify-content:flex-start}
          .gap-4{gap:1rem}
          .gap-6{gap:1.5rem}
          .gap-8{gap:2rem}
          
          /* Positioning */
          .relative{position:relative}
          .absolute{position:absolute}
          .fixed{position:fixed}
          .sticky{position:sticky}
          .top-0{top:0}
          .left-0{left:0}
          .right-0{right:0}
          .bottom-0{bottom:0}
          .z-10{z-index:10}
          .z-20{z-index:20}
          .z-30{z-index:30}
          .z-40{z-index:40}
          .z-50{z-index:50}
          
          /* Spacing */
          .p-0{padding:0}
          .p-2{padding:0.5rem}
          .p-4{padding:1rem}
          .p-6{padding:1.5rem}
          .p-8{padding:2rem}
          .px-4{padding-left:1rem;padding-right:1rem}
          .px-6{padding-left:1.5rem;padding-right:1.5rem}
          .py-2{padding-top:0.5rem;padding-bottom:0.5rem}
          .py-4{padding-top:1rem;padding-bottom:1rem}
          .py-8{padding-top:2rem;padding-bottom:2rem}
          .py-12{padding-top:3rem;padding-bottom:3rem}
          .py-16{padding-top:4rem;padding-bottom:4rem}
          .py-20{padding-top:5rem;padding-bottom:5rem}
          .pt-16{padding-top:4rem}
          .pt-20{padding-top:5rem}
          .pb-16{padding-bottom:4rem}
          .pb-20{padding-bottom:5rem}
          
          /* Margins */
          .m-0{margin:0}
          .mx-auto{margin-left:auto;margin-right:auto}
          .mt-4{margin-top:1rem}
          .mt-8{margin-top:2rem}
          .mb-4{margin-bottom:1rem}
          .mb-6{margin-bottom:1.5rem}
          .mb-8{margin-bottom:2rem}
          .mb-12{margin-bottom:3rem}
          
          /* Text Styles */
          .text-xs{font-size:0.75rem;line-height:1rem}
          .text-sm{font-size:0.875rem;line-height:1.25rem}
          .text-base{font-size:1rem;line-height:1.5rem}
          .text-lg{font-size:1.125rem;line-height:1.75rem}
          .text-xl{font-size:1.25rem;line-height:1.75rem}
          .text-2xl{font-size:1.5rem;line-height:2rem}
          .text-3xl{font-size:1.875rem;line-height:2.25rem}
          .text-4xl{font-size:2.25rem;line-height:2.5rem}
          .text-5xl{font-size:3rem;line-height:1}
          .text-6xl{font-size:3.75rem;line-height:1}
          .text-7xl{font-size:4.5rem;line-height:1}
          .font-normal{font-weight:400}
          .font-medium{font-weight:500}
          .font-semibold{font-weight:600}
          .font-bold{font-weight:700}
          .font-black{font-weight:900}
          .text-center{text-align:center}
          .text-left{text-align:left}
          .text-right{text-align:right}
          .uppercase{text-transform:uppercase}
          .tracking-wide{letter-spacing:0.025em}
          .tracking-wider{letter-spacing:0.05em}
          
          /* Colors */
          .text-white{color:#fff}
          .text-gray-300{color:#d1d5db}
          .text-gray-400{color:#9ca3af}
          .text-gray-500{color:#6b7280}
          .bg-black{background-color:#000}
          .bg-gray-900{background-color:#111827}
          .bg-transparent{background-color:transparent}
          
          /* Borders & Radius */
          .border{border-width:1px}
          .border-2{border-width:2px}
          .border-gray-800{border-color:#1f2937}
          .rounded{border-radius:0.25rem}
          .rounded-md{border-radius:0.375rem}
          .rounded-lg{border-radius:0.5rem}
          .rounded-xl{border-radius:0.75rem}
          .rounded-2xl{border-radius:1rem}
          .rounded-full{border-radius:9999px}
          
          /* Navbar Specific */
          nav.fixed{height:64px;top:0;left:0;right:0;background:#0a0a0a;backdrop-filter:blur(10px);border-bottom:1px solid rgba(255,255,255,0.1)}
          body{padding-top:64px}
          
          /* Hero Section */
          .hero-section{min-height:60vh;display:flex;align-items:center;justify-content:center;position:relative;overflow:hidden}
          
          /* Buttons */
          .btn,.button{display:inline-flex;align-items:center;justify-content:center;padding:0.75rem 1.5rem;border-radius:0.5rem;font-weight:500;transition:all 0.2s}
          
          /* Gradients */
          .bg-gradient-to-r{background-image:linear-gradient(to right,var(--tw-gradient-stops))}
          .bg-gradient-to-b{background-image:linear-gradient(to bottom,var(--tw-gradient-stops))}
          .from-cyan-400{--tw-gradient-from:#22d3ee}
          .from-purple-400{--tw-gradient-from:#a855f7}
          .to-blue-500{--tw-gradient-to:#3b82f6}
          .to-pink-500{--tw-gradient-to:#ec4899}
          .bg-clip-text{-webkit-background-clip:text;background-clip:text}
          .text-transparent{color:transparent}
          
          /* Animations - Critical Only */
          .animate-pulse{animation:pulse 2s cubic-bezier(0.4,0,0.6,1) infinite}
          @keyframes pulse{0%,100%{opacity:1}50%{opacity:.5}}
          
          /* Responsive - Mobile First */
          @media(min-width:640px){
            .sm\\:text-4xl{font-size:2.25rem}
            .sm\\:text-5xl{font-size:3rem}
            .sm\\:px-6{padding-left:1.5rem;padding-right:1.5rem}
          }
          
          @media(min-width:768px){
            h1{font-size:4.5rem}
            .md\\:flex{display:flex}
            .md\\:hidden{display:none}
            .md\\:flex-row{flex-direction:row}
            .md\\:text-5xl{font-size:3rem}
            .md\\:text-6xl{font-size:3.75rem}
            .md\\:text-7xl{font-size:4.5rem}
            .md\\:text-2xl{font-size:1.5rem}
            .md\\:px-8{padding-left:2rem;padding-right:2rem}
            .md\\:py-16{padding-top:4rem;padding-bottom:4rem}
            .md\\:py-20{padding-top:5rem;padding-bottom:5rem}
          }
          
          @media(min-width:1024px){
            .lg\\:flex{display:flex}
            .lg\\:grid{display:grid}
            .lg\\:text-6xl{font-size:3.75rem}
            .lg\\:text-7xl{font-size:4.5rem}
            .lg\\:text-8xl{font-size:6rem}
            .lg\\:px-12{padding-left:3rem;padding-right:3rem}
          }
          
          /* Overflow Control */
          .overflow-hidden{overflow:hidden}
          .overflow-x-hidden{overflow-x:hidden}
          .overflow-y-auto{overflow-y:auto}
          
          /* Transitions */
          .transition{transition-property:all;transition-timing-function:cubic-bezier(0.4,0,0.2,1);transition-duration:150ms}
          .transition-all{transition-property:all}
          .transition-transform{transition-property:transform}
          .transition-opacity{transition-property:opacity}
          .duration-200{transition-duration:200ms}
          .duration-300{transition-duration:300ms}
          .ease-in-out{transition-timing-function:cubic-bezier(0.4,0,0.2,1)}
          
          /* Opacity */
          .opacity-0{opacity:0}
          .opacity-50{opacity:0.5}
          .opacity-75{opacity:0.75}
          .opacity-100{opacity:1}
          
          /* Transform */
          .transform{transform:translateZ(0)}
          .scale-100{transform:scale(1)}
          .scale-105{transform:scale(1.05)}
          
          /* Width & Height */
          .w-full{width:100%}
          .h-full{height:100%}
          .w-auto{width:auto}
          .h-auto{height:auto}
          .max-w-7xl{max-width:80rem}
          .max-w-6xl{max-width:72rem}
          .max-w-4xl{max-width:56rem}
          .max-w-2xl{max-width:42rem}
          
          /* Critical Font Loading */
          @font-face{
            font-family:'Inter';
            font-style:normal;
            font-weight:100 900;
            font-display:swap;
            src:url(https://fonts.gstatic.com/s/inter/v13/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa1ZL7.woff2) format('woff2');
            unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+2000-206F,U+2074,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD;
          }
        `
      }} />
      
      {/* Preload critical resources */}
      <link rel="preload" href="/fonts/inter-var-latin.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
    </>
  )
}