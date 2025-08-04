import Header from '@/components/layout/Header'
import HeroSection from '@/components/sections/HeroSection'
import StudyJourneyProcess from '@/components/sections/StudyJourneyProcess'
import AdvancedSearchSection from '@/components/sections/AdvancedSearchSection'
import FeaturedConsultancies from '@/components/sections/FeaturedConsultancies'
import FeaturedUniversities from '@/components/sections/FeaturedUniversities'
import FeaturedCourses from '@/components/sections/FeaturedCourses'
import TrendingStudyAreas from '@/components/sections/TrendingStudyAreas'
import StudyDestinations from '@/components/sections/StudyDestinations'
import FeaturedEvents from '@/components/sections/FeaturedEvents'
import BlogArticlesSection from '@/components/sections/BlogArticlesSection'
import CallToAction from '@/components/sections/CallToAction'
import Footer from '@/components/layout/Footer'

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <HeroSection />
        <StudyJourneyProcess />
        <AdvancedSearchSection />
        <FeaturedConsultancies />
        <FeaturedUniversities />
        <FeaturedCourses />
        <TrendingStudyAreas />
        <StudyDestinations />
        <FeaturedEvents />
        <BlogArticlesSection />
        <CallToAction />
      </main>
      <Footer />
    </div>
  )
}
