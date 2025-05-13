import { useEffect } from 'react'
import HeroSection from '../components/home/HeroSection'
import FeaturesSection from '../components/home/FeaturesSection'
import FeaturedCoursesSection from '../components/home/FeaturedCoursesSection'
import TestimonialsSection from '../components/home/TestimonialsSection'
import CtaSection from '../components/home/CtaSection'

const HomePage = () => {
  useEffect(() => {
    document.title = 'Excel Academy - Shaping Future Leaders'
  }, [])

  return (
    <>
      <HeroSection />
      <FeaturesSection />
      <FeaturedCoursesSection />
      <TestimonialsSection />
      <CtaSection />
    </>
  )
}

export default HomePage