import dynamic from 'next/dynamic'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

// Dynamic import with SSR enabled for proper rendering
const HomePageContent = dynamic(() => import('@/components/HomePageContent'), {
  loading: () => (
    <div className="min-h-screen bg-black">
      <div className="animate-pulse">
        <div className="h-96 bg-gray-900/20" />
      </div>
    </div>
  ),
  ssr: true // Enable SSR for content to render properly
})

export default function Home() {
  return (
    <>
      <Navbar />
      
      {/* Main content wrapper */}
      <div className="min-h-screen bg-black">
        <HomePageContent />
      </div>

      {/* Footer */}
      <Footer />
    </>
  )
}