// app/(home)/Sections/ShipFaster.tsx
export default function ShipFaster() {
  return (
    <section
      className="relative py-12 md:py-16 bg-black"
      style={{ minHeight: 480, contain: 'layout style paint' }}
      aria-label="Ship code faster"
    >
      <div className="container mx-auto px-6 md:px-10">
        {/* Headline block — fixed intrinsic height prevents font-swap jump */}
        <div className="max-w-4xl mx-auto text-center" style={{ minHeight: 140 }}>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-semibold leading-tight tracking-[-0.01em] text-white">
            SHIP CODE <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">10X FASTER</span>
          </h2>
        </div>

        {/* Subhead — also reserved height */}
        <div className="mt-4 md:mt-5 max-w-3xl mx-auto text-center" style={{ minHeight: 80 }}>
          <p className="text-lg md:text-xl text-neutral-300 leading-relaxed">
            Master AI Coding Tools. Fix MCP Errors. Boost Productivity.
          </p>
        </div>

        {/* CTA row — fixed height so late hydration/widgets don't push content */}
        <div className="mt-6 md:mt-8 flex flex-wrap gap-3 justify-center" style={{ minHeight: 56 }}>
          <a
            href="/blog"
            className="inline-flex items-center rounded-lg px-5 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-medium hover:scale-105 transition-transform"
          >
            READ GUIDES
          </a>
          <a
            href="/tools"
            className="inline-flex items-center rounded-lg px-5 py-3 border-2 border-cyan-500 text-cyan-400 font-medium hover:bg-cyan-500/10 transition-colors"
          >
            EXPLORE TOOLS
          </a>
        </div>
      </div>
    </section>
  );
}