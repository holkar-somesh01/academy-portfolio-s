import { motion } from 'framer-motion'
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock } from 'react-icons/fa'

const contactInfo = [
  {
    icon: <FaMapMarkerAlt className="text-xl text-primary-600" />,
    title: "Our Location",
    details: ["123 Education Avenue", "Learning District, NY 10001"]
  },
  {
    icon: <FaPhone className="text-xl text-primary-600" />,
    title: "Phone Number",
    details: ["+1 (555) 123-4567", "+1 (555) 765-4321"]
  },
  {
    icon: <FaEnvelope className="text-xl text-primary-600" />,
    title: "Email Address",
    details: ["info@excelacademy.edu", "admissions@excelacademy.edu"]
  },
  {
    icon: <FaClock className="text-xl text-primary-600" />,
    title: "Working Hours",
    details: ["Monday - Friday: 8:00 AM - 6:00 PM", "Saturday: 9:00 AM - 1:00 PM"]
  }
];

const ContactInfo = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="bg-white p-8 rounded-lg shadow-soft"
    >
      <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
      
      <div className="space-y-6">
        {contactInfo.map((item, index) => (
          <div key={index} className="flex">
            <div className="mr-4 mt-1">{item.icon}</div>
            <div>
              <h4 className="font-medium text-lg mb-1">{item.title}</h4>
              {item.details.map((detail, i) => (
                <p key={i} className="text-gray-600">{detail}</p>
              ))}
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-8">
        <h4 className="font-medium text-lg mb-4">Follow Us</h4>
        <div className="flex space-x-4">
          {['facebook', 'twitter', 'instagram', 'linkedin'].map((social) => (
            <a
              key={social}
              href={`https://${social}.com`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-primary-100 transition-colors"
            >
              <img 
                src={`https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/${social}.svg`}
                alt={social}
                className="w-5 h-5"
              />
            </a>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

export default ContactInfo