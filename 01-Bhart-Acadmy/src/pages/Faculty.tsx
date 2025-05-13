import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Award, BookOpen } from 'lucide-react';

import facultyData from '../data/faculty.json';

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

const Faculty: React.FC = () => {
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
            {t('faculty.title')}
          </h1>
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
            {t('faculty.subtitle')}
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {facultyData.map((faculty) => (
            <motion.div
              key={faculty.id}
              variants={item}
              className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="h-64 overflow-hidden">
                <img
                  src={faculty.image}
                  alt={faculty.name}
                  className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  {faculty.name}
                </h3>
                <p className="text-primary-600 dark:text-primary-400 font-medium mb-3">
                  {faculty.position}
                </p>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                  {faculty.qualification}
                </p>
                
                <div className="mb-4">
                  <div className="flex items-start mb-2">
                    <span className="flex-shrink-0 mt-1 mr-2">
                      <BookOpen size={16} className="text-accent-500" />
                    </span>
                    <div>
                      <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300">
                        {t('faculty.subjects')}:
                      </h4>
                      <p className="text-gray-600 dark:text-gray-400">
                        {faculty.subjects.join(', ')}
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <span className="flex-shrink-0 mt-1 mr-2">
                      <Award size={16} className="text-secondary-500" />
                    </span>
                    <div>
                      <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300">
                        {t('faculty.experience')}:
                      </h4>
                      <p className="text-gray-600 dark:text-gray-400">
                        {faculty.experience}
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                  <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    {t('faculty.achievements')}:
                  </h4>
                  <ul className="space-y-1 text-sm text-gray-600 dark:text-gray-400">
                    {faculty.achievements.map((achievement, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-primary-500 mr-2">•</span>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Faculty;