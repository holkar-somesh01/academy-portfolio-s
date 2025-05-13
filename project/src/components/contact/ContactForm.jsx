import { useState } from 'react'
import { motion } from 'framer-motion'

const initialFormState = {
  name: '',
  email: '',
  phone: '',
  subject: '',
  message: '',
}

const ContactForm = () => {
  const [formData, setFormData] = useState(initialFormState)
  const [errors, setErrors] = useState({})
  const [submitting, setSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const validate = () => {
    let formErrors = {}
    
    if (!formData.name.trim()) {
      formErrors.name = 'Name is required'
    }
    
    if (!formData.email.trim()) {
      formErrors.email = 'Email is required'
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      formErrors.email = 'Email is invalid'
    }
    
    if (!formData.message.trim()) {
      formErrors.message = 'Message is required'
    }
    
    return formErrors
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    const formErrors = validate()
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors)
      return
    }
    
    setErrors({})
    setSubmitting(true)
    
    // Simulate form submission
    setTimeout(() => {
      setSubmitting(false)
      setSubmitted(true)
      setFormData(initialFormState)
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitted(false)
      }, 5000)
    }, 1500)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="bg-white p-8 rounded-lg shadow-soft"
    >
      <h3 className="text-2xl font-semibold mb-6">Get In Touch</h3>
      
      {submitted ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-success-100 text-success-500 p-4 rounded-md mb-6"
        >
          <p className="font-medium">Thank you for your message!</p>
          <p>We'll get back to you as soon as possible.</p>
        </motion.div>
      ) : null}
      
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <label htmlFor="name" className="form-label">
              Full Name <span className="text-error-500">*</span>
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={`form-input ${errors.name ? 'border-error-400 focus:border-error-500 focus:ring-error-200' : ''}`}
            />
            {errors.name && <p className="mt-1 text-sm text-error-500">{errors.name}</p>}
          </div>
          
          <div>
            <label htmlFor="email" className="form-label">
              Email Address <span className="text-error-500">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`form-input ${errors.email ? 'border-error-400 focus:border-error-500 focus:ring-error-200' : ''}`}
            />
            {errors.email && <p className="mt-1 text-sm text-error-500">{errors.email}</p>}
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <label htmlFor="phone" className="form-label">
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="form-input"
            />
          </div>
          
          <div>
            <label htmlFor="subject" className="form-label">
              Subject
            </label>
            <select
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              className="form-input"
            >
              <option value="">Select a subject</option>
              <option value="Admission Inquiry">Admission Inquiry</option>
              <option value="Course Information">Course Information</option>
              <option value="Career Opportunities">Career Opportunities</option>
              <option value="General Inquiry">General Inquiry</option>
            </select>
          </div>
        </div>
        
        <div className="mb-6">
          <label htmlFor="message" className="form-label">
            Message <span className="text-error-500">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            className={`form-input resize-none ${errors.message ? 'border-error-400 focus:border-error-500 focus:ring-error-200' : ''}`}
          ></textarea>
          {errors.message && <p className="mt-1 text-sm text-error-500">{errors.message}</p>}
        </div>
        
        <button
          type="submit"
          disabled={submitting}
          className={`btn-primary w-full flex justify-center items-center ${submitting ? 'opacity-70 cursor-not-allowed' : ''}`}
        >
          {submitting ? (
            <>
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Sending...
            </>
          ) : (
            'Send Message'
          )}
        </button>
      </form>
    </motion.div>
  )
}

export default ContactForm