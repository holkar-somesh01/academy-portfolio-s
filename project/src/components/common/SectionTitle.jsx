import { motion } from 'framer-motion'

const SectionTitle = ({ title, subtitle, center = true, light = false }) => {
  return (
    <div className={`mb-12 ${center ? 'text-center' : 'text-left'}`}>
      <motion.h2 
        className={`text-3xl md:text-4xl font-bold mb-4 ${
          light ? 'text-white' : 'text-gray-800'
        }`}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p 
          className={`text-lg max-w-3xl mx-auto ${
            light ? 'text-gray-300' : 'text-gray-600'
          }`}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  )
}

export default SectionTitle