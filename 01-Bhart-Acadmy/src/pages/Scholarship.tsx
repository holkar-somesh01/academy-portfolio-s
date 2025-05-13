import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Award, CheckCircle, AlertCircle } from 'lucide-react';

import scholarshipsData from '../data/scholarships.json';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const Scholarship: React.FC = () => {
  const { t } = useTranslation();

  // Add a date for the next scholarship test
  const nextTestDate = new Date();
  nextTestDate.setDate(nextTestDate.getDate() + 15); // 15 days from now

  const formattedTestDate = nextTestDate.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

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
            {t('scholarship.title')}
          </h1>
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
            {t('scholarship.subtitle')}
          </p>
        </motion.div>

        {/* Scholarship Card Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-gradient-to-r from-primary-500 to-accent-500 p-8 rounded-xl text-white mb-12"
        >
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0">
              <h2 className="text-2xl font-bold mb-2">{t('scholarship.nextTest')}</h2>
              <p className="text-xl">{formattedTestDate}</p>
              <p className="mt-2 max-w-md">Register now to get a chance to avail scholarships up to 75% on our courses.</p>
            </div>
            <button className="px-6 py-3 bg-white text-primary-600 font-bold rounded-full hover:bg-gray-100 transition-colors duration-300 shadow-lg">
              {t('scholarship.apply')}
            </button>
          </div>
        </motion.div>

        {/* Scholarships List */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="space-y-8"
        >
          {scholarshipsData.map((scholarship, index) => (
            <motion.div
              key={scholarship.id}
              variants={item}
              className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md"
            >
              <div className="p-6 border-b border-gray-200 dark:border-gray-700 flex flex-col md:flex-row md:items-center md:justify-between">
                <div className="flex-1 mb-4 md:mb-0">
                  <div className="flex items-center mb-2">
                    <Award size={24} className={`mr-2 text-${index % 2 === 0 ? 'primary' : 'secondary'}-500`} />
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                      {scholarship.title}
                    </h3>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300">
                    {scholarship.description}
                  </p>
                </div>
                <button className={`px-4 py-2 rounded-md text-white font-medium transition-colors duration-300 ${
                  index % 2 === 0 ? 'bg-primary-500 hover:bg-primary-600' : 'bg-secondary-500 hover:bg-secondary-600'
                }`}>
                  {t('scholarship.apply')}
                </button>
              </div>
              <div className="p-6 md:grid md:grid-cols-3 gap-6">
                <div>
                  <h4 className="text-lg font-medium text-gray-900 dark:text-white mb-3 flex items-center">
                    <AlertCircle size={18} className="mr-2 text-primary-500" />
                    {t('scholarship.eligibility')}
                  </h4>
                  <ul className="space-y-2">
                    {scholarship.eligibility.map((item, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="text-primary-500 mr-2">•</span>
                        <span className="text-gray-600 dark:text-gray-400">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-medium text-gray-900 dark:text-white mb-3 flex items-center">
                    <CheckCircle size={18} className="mr-2 text-secondary-500" />
                    {t('scholarship.benefits')}
                  </h4>
                  <ul className="space-y-2">
                    {scholarship.benefits.map((item, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="text-secondary-500 mr-2">•</span>
                        <span className="text-gray-600 dark:text-gray-400">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-medium text-gray-900 dark:text-white mb-3">
                    {t('scholarship.applicationProcess')}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400">
                    {scholarship.application_process}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Important Notes */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="mt-12 bg-gray-50 dark:bg-gray-700 p-6 rounded-lg border-l-4 border-primary-500"
        >
          <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">Important Notes:</h3>
          <ul className="space-y-2 text-gray-700 dark:text-gray-300">
            <li className="flex items-start">
              <span className="text-primary-500 mr-2">•</span>
              All scholarship decisions are made by the scholarship committee and are final.
            </li>
            <li className="flex items-start">
              <span className="text-primary-500 mr-2">•</span>
              Scholarships are applicable for new admissions only and cannot be combined with other offers.
            </li>
            <li className="flex items-start">
              <span className="text-primary-500 mr-2">•</span>
              Scholarship recipients must maintain good academic performance and attendance.
            </li>
            <li className="flex items-start">
              <span className="text-primary-500 mr-2">•</span>
              Supporting documents must be submitted within 7 days of scholarship approval.
            </li>
          </ul>
        </motion.div>
      </div>
    </div>
  );
};

export default Scholarship;