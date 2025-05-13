import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const HeroSection = () => {
  return (
    <section className="relative min-h-screen pt-32 pb-20 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary-50 to-blue-50 -z-10"></div>

      {/* Decorative shapes */}
      <div className="absolute top-32 right-0 w-72 h-72 bg-primary-100 rounded-full filter blur-3xl opacity-30 animate-float"></div>
      <div className="absolute bottom-20 left-10 w-60 h-60 bg-secondary-200 rounded-full filter blur-3xl opacity-20 animate-float"></div>

      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block px-4 py-2 rounded-full bg-primary-100 text-primary-700 font-medium text-sm mb-6">
              Shaping Future Leaders
            </span>
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-gray-900"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Empower Your Future with <span className="text-gradient">Excellence</span> in Education
            </motion.h1>
            <motion.p 
              className="text-lg md:text-xl text-gray-700 mb-8 max-w-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              Discover a transformative learning experience with industry-leading instructors, cutting-edge curriculum, and personalized guidance.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <Link to="/courses" className="btn-primary">
                Browse Courses
              </Link>
              <Link to="/contact" className="btn-outline">
                Contact Us
              </Link>
            </motion.div>

            <motion.div
              className="mt-10 flex items-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div 
                    key={i}
                    className="w-10 h-10 rounded-full border-2 border-white bg-gray-200 overflow-hidden"
                  >
                    <img 
                      src={`https://images.pexels.com/photos/22088${i}/pexels-photo-22088${i}.jpeg`} 
                      alt="Student" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
              <div>
                <div className="flex items-center">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg 
                      key={star}
                      className="w-5 h-5 text-yellow-400" 
                      fill="currentColor" 
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                  ))}
                </div>
                <p className="text-sm text-gray-600">
                  <span className="font-medium">4.9/5</span> from over 2,000 students
                </p>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <div className="relative rounded-lg overflow-hidden shadow-xl">
              <img 
                src="https://images.pexels.com/photos/5428144/pexels-photo-5428144.jpeg" 
                alt="Students learning" 
                className="w-full h-full object-cover rounded-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-900/50 to-transparent"></div>
            </div>
            
            {/* Stats overlay */}
            <motion.div
              className="absolute -bottom-6 -left-6 bg-white rounded-lg shadow-medium p-4 max-w-xs"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 1 }}
            >
              <div className="flex items-start gap-3">
                <div className="bg-primary-100 p-3 rounded-full">
                  <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold">Industry-Recognized Certificates</h3>
                  <p className="text-sm text-gray-600">Boost your resume with our accredited courses</p>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              className="absolute -top-6 -right-6 bg-white rounded-lg shadow-medium p-4"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 1.2 }}
            >
              <div className="flex items-center gap-3">
                <div className="bg-secondary-100 p-3 rounded-full">
                  <svg className="w-6 h-6 text-secondary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <div>
                  <div className="flex items-center text-lg font-bold">
                    <span>25k+</span>
                  </div>
                  <p className="text-sm">Graduates</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection