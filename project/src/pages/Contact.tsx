import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { 
  MapPin, Phone, Mail, Clock, Send, Facebook, Twitter, Instagram, Youtube 
} from 'lucide-react';

const ContactForm: React.FC = () => {
  const { t } = useTranslation();
  const [formStatus, setFormStatus] = React.useState<null | 'success' | 'error'>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setFormStatus('success');
    // Reset form after a delay
    setTimeout(() => {
      setFormStatus(null);
      (e.target as HTMLFormElement).reset();
    }, 3000);
  };

  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {t('contact.title')}
          </h1>
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
            {t('contact.subtitle')}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2 bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 sm:p-8"
          >
            {formStatus === 'success' ? (
              <div className="bg-success-100 dark:bg-success-900/30 border border-success-300 dark:border-success-800 text-success-800 dark:text-success-400 p-4 rounded-md mb-6 flex items-center">
                <CheckCircle size={20} className="mr-2 flex-shrink-0" />
                <span>Your message has been sent successfully. We'll get back to you soon!</span>
              </div>
            ) : formStatus === 'error' ? (
              <div className="bg-error-100 dark:bg-error-900/30 border border-error-300 dark:border-error-800 text-error-800 dark:text-error-400 p-4 rounded-md mb-6 flex items-center">
                <AlertCircle size={20} className="mr-2 flex-shrink-0" />
                <span>There was an error sending your message. Please try again later.</span>
              </div>
            ) : null}

            <form onSubmit={handleSubmit}>
              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    {t('contact.form.name')}
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    {t('contact.form.email')}
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  />
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    {t('contact.form.phone')}
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  />
                </div>
                <div>
                  <label htmlFor="course" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    {t('contact.form.course')}
                  </label>
                  <select
                    id="course"
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  >
                    <option value="">Select a course</option>
                    <option value="upsc">UPSC Civil Services</option>
                    <option value="mpsc">MPSC State Services</option>
                    <option value="defense">Defense Services</option>
                    <option value="police">Police Services</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  {t('contact.form.message')}
                </label>
                <textarea
                  id="message"
                  rows={6}
                  required
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white resize-none"
                ></textarea>
              </div>
              <button
                type="submit"
                className="inline-flex items-center px-6 py-3 bg-primary-500 hover:bg-primary-600 text-white font-medium rounded-md transition-colors duration-300"
              >
                <Send size={18} className="mr-2" />
                {t('contact.form.submit')}
              </button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-1"
          >
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 sm:p-8 mb-8">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                {t('contact.info.address')}
              </h3>
              <div className="flex mb-6">
                <MapPin size={22} className="text-primary-500 mr-3 flex-shrink-0" />
                <div>
                  <p className="text-gray-700 dark:text-gray-300">{t('contact.addressLine1')}</p>
                  <p className="text-gray-700 dark:text-gray-300">{t('contact.addressLine2')}</p>
                  <p className="text-gray-700 dark:text-gray-300">{t('contact.addressLine3')}</p>
                </div>
              </div>
              <div className="flex mb-6">
                <Mail size={22} className="text-primary-500 mr-3 flex-shrink-0" />
                <div>
                  <p className="text-gray-700 dark:text-gray-300">{t('contact.info.email')}:</p>
                  <a href="mailto:info@bharatsuccessacademy.com" className="text-primary-600 dark:text-primary-400 hover:underline">
                    {t('contact.emailAddress')}
                  </a>
                </div>
              </div>
              <div className="flex mb-6">
                <Phone size={22} className="text-primary-500 mr-3 flex-shrink-0" />
                <div>
                  <p className="text-gray-700 dark:text-gray-300">{t('contact.info.phone')}:</p>
                  <p className="text-gray-900 dark:text-white font-medium">{t('contact.phoneNumber')}</p>
                </div>
              </div>
              <div className="flex">
                <Clock size={22} className="text-primary-500 mr-3 flex-shrink-0" />
                <div>
                  <p className="text-gray-700 dark:text-gray-300">{t('contact.info.hours')}:</p>
                  <p className="text-gray-900 dark:text-white">{t('contact.operatingHours')}</p>
                </div>
              </div>
            </div>

            {/* Social Media & Map */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 sm:p-8 mb-8">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                {t('footer.connect')}
              </h3>
              <div className="flex space-x-4 mb-6">
                <a href="#" aria-label="Facebook" className="text-gray-700 dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-400 transition-colors duration-300">
                  <Facebook size={24} />
                </a>
                <a href="#" aria-label="Twitter" className="text-gray-700 dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-400 transition-colors duration-300">
                  <Twitter size={24} />
                </a>
                <a href="#" aria-label="Instagram" className="text-gray-700 dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-400 transition-colors duration-300">
                  <Instagram size={24} />
                </a>
                <a href="#" aria-label="YouTube" className="text-gray-700 dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-400 transition-colors duration-300">
                  <Youtube size={24} />
                </a>
              </div>
            </div>

            {/* Map */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d121058.92836708576!2d73.7929273403681!3d18.524665867064388!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bf2e67461101%3A0x828d43bf9d9ee343!2sPune%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1649938549562!5m2!1sen!2sin"
                width="100%"
                height="250"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Map location"
              ></iframe>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;