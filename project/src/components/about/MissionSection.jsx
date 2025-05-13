import { motion } from 'framer-motion'
import SectionTitle from '../common/SectionTitle'

const MissionSection = () => {
  return (
    <section className="section bg-white">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <img 
              src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg" 
              alt="Our Mission" 
              className="rounded-lg shadow-md w-full"
            />
          </motion.div>
          
          <div>
            <SectionTitle 
              title="Our Mission & Values" 
              subtitle="We're driven by a clear purpose and guided by strong values."
              center={false}
            />
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h3 className="text-xl font-semibold mb-3 text-primary-600">Our Mission</h3>
              <p className="text-gray-700 mb-6">
                To empower individuals with quality education and practical skills that prepare them for success in a rapidly evolving global economy, fostering a community of lifelong learners who drive positive change in their industries and communities.
              </p>
              
              <h3 className="text-xl font-semibold mb-3 text-primary-600">Our Values</h3>
              <ul className="space-y-4">
                <li className="flex">
                  <div className="mr-4 flex-shrink-0">
                    <div className="w-8 h-8 rounded-full bg-primary-100 flex items-center justify-center">
                      <svg className="w-4 h-4 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-medium">Excellence</h4>
                    <p className="text-gray-600">We strive for excellence in our curriculum, teaching methods, and student outcomes.</p>
                  </div>
                </li>
                
                <li className="flex">
                  <div className="mr-4 flex-shrink-0">
                    <div className="w-8 h-8 rounded-full bg-primary-100 flex items-center justify-center">
                      <svg className="w-4 h-4 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-medium">Innovation</h4>
                    <p className="text-gray-600">We embrace new ideas and technologies to continuously improve the learning experience.</p>
                  </div>
                </li>
                
                <li className="flex">
                  <div className="mr-4 flex-shrink-0">
                    <div className="w-8 h-8 rounded-full bg-primary-100 flex items-center justify-center">
                      <svg className="w-4 h-4 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-medium">Integrity</h4>
                    <p className="text-gray-600">We uphold the highest standards of honesty, transparency, and ethical conduct.</p>
                  </div>
                </li>
                
                <li className="flex">
                  <div className="mr-4 flex-shrink-0">
                    <div className="w-8 h-8 rounded-full bg-primary-100 flex items-center justify-center">
                      <svg className="w-4 h-4 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-medium">Inclusivity</h4>
                    <p className="text-gray-600">We foster a diverse and inclusive learning environment where all perspectives are valued.</p>
                  </div>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default MissionSection