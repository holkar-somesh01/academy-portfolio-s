import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const CtaSection = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-primary-800 to-primary-900 text-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full opacity-5 -translate-y-1/2 translate-x-1/3"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-white rounded-full opacity-5 translate-y-1/2 -translate-x-1/3"></div>
      
      <div className="container relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Ready to Transform Your <span className="text-secondary-300">Future</span>?
          </motion.h2>
          
          <motion.p 
            className="text-lg md:text-xl mb-10 text-gray-200 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Join thousands of successful graduates who have advanced their careers through our world-class programs. Limited spots available for upcoming cohorts.
          </motion.p>
          
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Link 
              to="/courses" 
              className="btn bg-white text-primary-800 hover:bg-gray-100"
            >
              Explore Courses
            </Link>
            <Link 
              to="/contact" 
              className="btn bg-transparent border-2 border-white hover:bg-white/10"
            >
              Request Information
            </Link>
          </motion.div>
          
          <motion.div 
            className="mt-12 flex flex-col md:flex-row justify-center gap-8 md:gap-16 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <div>
              <div className="font-bold text-3xl md:text-4xl text-secondary-300">25k+</div>
              <div className="text-gray-300">Graduates</div>
            </div>
            <div>
              <div className="font-bold text-3xl md:text-4xl text-secondary-300">96%</div>
              <div className="text-gray-300">Job Placement</div>
            </div>
            <div>
              <div className="font-bold text-3xl md:text-4xl text-secondary-300">45+</div>
              <div className="text-gray-300">Courses</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default CtaSection