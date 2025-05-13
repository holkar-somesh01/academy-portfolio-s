import { FaWhatsapp } from 'react-icons/fa'
import { motion } from 'framer-motion'

const WhatsAppButton = () => {
  return (
    <motion.a
      href="https://wa.me/15551234567"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 bg-green-500 text-white p-3 rounded-full shadow-md"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20,
        delay: 1
      }}
    >
      <FaWhatsapp className="text-2xl" />
    </motion.a>
  )
}

export default WhatsAppButton