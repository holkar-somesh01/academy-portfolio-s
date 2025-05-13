import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import SectionTitle from '../common/SectionTitle'
import { courses } from '../../data/courses'

const FeaturedCoursesSection = () => {
  // Filter featured courses
  const featuredCourses = courses.filter(course => course.featured)
  
  return (
    <section className="section bg-gray-50">
      <div className="container">
        <SectionTitle 
          title="Our Featured Courses" 
          subtitle="Discover our most popular programs designed to help you master in-demand skills and advance your career."
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredCourses.map((course, index) => (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="card card-hover overflow-hidden"
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={course.image} 
                  alt={course.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute top-3 right-3 bg-white py-1 px-3 rounded-full text-sm font-medium text-primary-700">
                  {course.category}
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{course.title}</h3>
                <p className="text-gray-600 mb-4">{course.description}</p>
                
                <div className="flex justify-between items-center mb-4">
                  <div className="flex items-center text-gray-500 text-sm">
                    <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {course.duration}
                  </div>
                  <div className="text-gray-500 text-sm">
                    {course.level}
                  </div>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-xl font-bold text-primary-700">{course.price}</span>
                  <Link 
                    to={`/courses`} 
                    className="text-primary-600 hover:text-primary-800 font-medium flex items-center"
                  >
                    View Details
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link 
            to="/courses" 
            className="btn-primary"
          >
            View All Courses
          </Link>
        </div>
      </div>
    </section>
  )
}

export default FeaturedCoursesSection