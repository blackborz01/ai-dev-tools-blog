import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import HomePageContent from '@/components/HomePageContent'

// Force static generation at build time for faster LCP
export const dynamic = 'force-static'
export const revalidate = 3600 // Revalidate every hour

export default function Home() {
  return (
    <>
      <Navbar />
      <HomePageContent />
      <Footer />
    </>
  )
}