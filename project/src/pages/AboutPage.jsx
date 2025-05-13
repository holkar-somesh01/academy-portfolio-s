import { useEffect } from 'react'
import { motion } from 'framer-motion'
import SectionTitle from '../components/common/SectionTitle'
import MissionSection from '../components/about/MissionSection'
import StatsSection from '../components/about/StatsSection'
import TeamSection from '../components/about/TeamSection'
import HistorySection from '../components/about/HistorySection'
import CtaSection from '../components/home/CtaSection'

const AboutPage = () => {
  useEffect(() => {
    document.title = 'About Us - Excel Academy'
  }, [])

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-r from-primary-50 to-blue-50">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <motion.h1 
              className="text-4xl md:text-5xl font-bold mb-6 text-gray-900"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              About <span className="text-gradient">Excel Academy</span>
            </motion.h1>
            <motion.p 
              className="text-lg text-gray-700 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Discover our story, mission, and the dedicated team behind Excel Academy's commitment to transformative education.
            </motion.p>
          </div>
        </div>
      </section>

      <MissionSection />
      <StatsSection />
      <HistorySection />
      <TeamSection />
      <CtaSection />
    </>
  )
}

export default AboutPage