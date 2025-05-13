import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import SectionTitle from '../components/common/SectionTitle'
import CourseCard from '../components/courses/CourseCard'
import CourseFilter from '../components/courses/CourseFilter'
import CourseSearch from '../components/courses/CourseSearch'
import { courses } from '../data/courses'

const CoursesPage = () => {
  const [activeCategory, setActiveCategory] = useState('All')
  const [searchTerm, setSearchTerm] = useState('')
  const [filteredCourses, setFilteredCourses] = useState(courses)

  useEffect(() => {
    document.title = 'Courses - Excel Academy'
  }, [])

  useEffect(() => {
    let result = courses

    // Apply category filter
    if (activeCategory !== 'All') {
      result = result.filter(course => course.category === activeCategory)
    }

    // Apply search filter
    if (searchTerm) {
      const term = searchTerm.toLowerCase()
      result = result.filter(
        course => 
          course.title.toLowerCase().includes(term) || 
          course.description.toLowerCase().includes(term)
      )
    }

    setFilteredCourses(result)
  }, [activeCategory, searchTerm])

  const handleSearch = (term) => {
    setSearchTerm(term)
  }

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  }

  return (
    <div className="pt-32 pb-20">
      <div className="container">
        <SectionTitle 
          title="Explore Our Courses" 
          subtitle="Discover a wide range of courses designed to help you achieve your academic and career goals."
        />

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-1">
            <CourseSearch onSearch={handleSearch} />
            <CourseFilter 
              activeCategory={activeCategory}
              setActiveCategory={setActiveCategory}
            />
          </div>

          <div className="lg:col-span-3">
            {filteredCourses.length > 0 ? (
              <motion.div 
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8"
                variants={container}
                initial="hidden"
                animate="show"
              >
                {filteredCourses.map(course => (
                  <motion.div key={course.id} variants={item}>
                    <CourseCard course={course} />
                  </motion.div>
                ))}
              </motion.div>
            ) : (
              <div className="text-center py-12">
                <h3 className="text-xl font-semibold mb-2">No courses found</h3>
                <p className="text-gray-600">
                  Try adjusting your search or filter to find what you're looking for.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default CoursesPage