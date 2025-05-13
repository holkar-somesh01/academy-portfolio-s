import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Trophy, Calendar, MapPin } from 'lucide-react';

import toppersData from '../data/toppers.json';

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

const Toppers: React.FC = () => {
  const { t } = useTranslation();

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
            {t('toppers.title')}
          </h1>
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
            {t('toppers.subtitle')}
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {toppersData.map((topper) => (
            <motion.div
              key={topper.id}
              variants={item}
              className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="h-64 relative overflow-hidden">
                <img
                  src={topper.image}
                  alt={topper.name}
                  className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-0 right-0 bg-primary-500 text-white px-3 py-1 rounded-bl-lg font-medium">
                  <div className="flex items-center">
                    <Trophy size={16} className="mr-1" />
                    {t('toppers.rank')}: {topper.rank}
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                  {topper.name}
                </h3>
                <p className="text-accent-600 dark:text-accent-400 font-medium mb-3">
                  {topper.exam}
                </p>
                
                <div className="flex flex-wrap gap-4 mb-4 text-sm text-gray-600 dark:text-gray-400">
                  <div className="flex items-center">
                    <Calendar size={14} className="mr-1" />
                    {t('toppers.year')}: {topper.year}
                  </div>
                  <div className="flex items-center">
                    <MapPin size={14} className="mr-1" />
                    {t('toppers.currentPosting')}: {topper.current_posting}
                  </div>
                </div>
                
                <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                  <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    {t('toppers.testimonial')}:
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400 italic">
                    "{topper.testimonial}"
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Toppers;