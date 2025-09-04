// app/Sections/ShipFaster.tsx
import Image from "next/image";
import Link from "next/link";

export default function ShipFaster() {
  return (
    <section
      className="relative py-12 md:py-16 bg-black"
      // Reserve vertical space so the layout doesn't jump when fonts/content load
      style={{ minHeight: 320 }}
      aria-label="Ship code faster"
    >
      <div className="container mx-auto px-4 text-center relative">
        {/* Headline block — fixed intrinsic height prevents font-swap jump */}
        <div style={{ minHeight: 120 }}>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-4 text-white">
            SHIP CODE <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">10X FASTER</span>
          </h2>
        </div>

        {/* Subhead — also reserved height */}
        <div style={{ minHeight: 40 }}>
          <p className="text-lg md:text-xl mb-6 text-gray-300">
            Master AI Coding Tools. Fix MCP Errors. Boost Productivity.
          </p>
        </div>

        {/* CTA row — fixed height so late hydration/widgets don't push content */}
        <div className="flex gap-4 justify-center" style={{ minHeight: 56 }}>
          <Link 
            href="/blog" 
            className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold hover:scale-105 transition-transform rounded-lg"
            prefetch={true}
          >
            READ GUIDES
          </Link>
          <Link 
            href="/tools" 
            className="px-6 py-3 border-2 border-cyan-500 text-cyan-400 font-bold hover:bg-cyan-500/10 transition-colors rounded-lg"
            prefetch={true}
          >
            EXPLORE TOOLS
          </Link>
        </div>
      </div>

      {/* Accessibility/perf niceties */}
      <style jsx global>{`
        @media (prefers-reduced-motion: reduce) {
          .transition-opacity,
          .transition-transform {
            transition: none !important;
          }
        }
      `}</style>
    </section>
  );
}