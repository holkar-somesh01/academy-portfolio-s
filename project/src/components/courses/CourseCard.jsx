import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const CourseCard = ({ course }) => {
  return (
    <motion.div 
      whileHover={{ y: -5 }}
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
            to={`/contact`} 
            className="btn bg-primary-600 hover:bg-primary-700 text-white text-sm px-4 py-2"
          >
            Enroll Now
          </Link>
        </div>
      </div>
    </motion.div>
  )
}

export default CourseCard