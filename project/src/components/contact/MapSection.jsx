import { motion } from 'framer-motion'

const MapSection = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="bg-white p-2 rounded-lg shadow-soft overflow-hidden h-96 md:h-full"
    >
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.215151889084!2d-73.9898140846074!3d40.74844097932786!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b30eac9f%3A0xaca8d3c35b9d1c9!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1659482865810!5m2!1sen!2sus"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Excel Academy Location"
      ></iframe>
    </motion.div>
  )
}

export default MapSection