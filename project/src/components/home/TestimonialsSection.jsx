import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import SectionTitle from '../common/SectionTitle'
import { testimonials } from '../../data/testimonials'
import { FaQuoteLeft, FaChevronLeft, FaChevronRight } from 'react-icons/fa'

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(null)

  const nextTestimonial = () => {
    setDirection('right')
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setDirection('left')
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    )
  }

  // Auto-advance testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonial()
    }, 6000)
    
    return () => clearInterval(interval)
  }, [])

  const variants = {
    enter: (direction) => ({
      x: direction === 'right' ? 300 : -300,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1
    },
    exit: (direction) => ({
      x: direction === 'right' ? -300 : 300,
      opacity: 0
    })
  }

  return (
    <section className="section bg-primary-800 text-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute right-0 top-0 w-72 h-72 bg-primary-700 rounded-full opacity-30"></div>
      <div className="absolute left-10 bottom-10 w-48 h-48 bg-primary-600 rounded-full opacity-20"></div>
      
      <div className="container">
        <SectionTitle 
          title="What Our Students Say" 
          subtitle="Discover how our courses have transformed careers and opened new opportunities for our graduates."
          light={true}
        />
        
        <div className="max-w-4xl mx-auto relative">
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              className="bg-white text-gray-800 rounded-lg p-8 shadow-md"
            >
              <FaQuoteLeft className="text-4xl text-primary-200 mb-4" />
              
              <p className="text-lg italic mb-6">{testimonials[currentIndex].content}</p>
              
              <div className="flex items-center">
                <div className="w-14 h-14 rounded-full overflow-hidden mr-4">
                  <img 
                    src={testimonials[currentIndex].image} 
                    alt={testimonials[currentIndex].name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">{testimonials[currentIndex].name}</h4>
                  <p className="text-gray-600">{testimonials[currentIndex].role}, {testimonials[currentIndex].company}</p>
                  <div className="flex mt-1">
                    {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                      <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
          
          {/* Navigation buttons */}
          <button 
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 md:-translate-x-6 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 focus:outline-none z-10"
            aria-label="Previous testimonial"
          >
            <FaChevronLeft className="text-primary-700" />
          </button>
          
          <button 
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 md:translate-x-6 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 focus:outline-none z-10"
            aria-label="Next testimonial"
          >
            <FaChevronRight className="text-primary-700" />
          </button>
          
          {/* Indicator dots */}
          <div className="flex justify-center mt-6 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setDirection(index > currentIndex ? 'right' : 'left')
                  setCurrentIndex(index)
                }}
                className={`w-3 h-3 rounded-full ${
                  index === currentIndex ? 'bg-white' : 'bg-white/40'
                } transition-all duration-300`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default TestimonialsSection