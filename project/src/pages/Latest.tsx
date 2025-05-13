import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { 
  Calendar, ArrowRight, Users, Award, Bell, Book, BookOpen
} from 'lucide-react';

import updatesData from '../data/updates.json';

const categories = [
  { id: 'all', label: 'updates.categories.all', icon: <Bell size={16} /> },
  { id: 'batch', label: 'updates.categories.batch', icon: <Users size={16} /> },
  { id: 'result', label: 'updates.categories.result', icon: <Award size={16} /> },
  { id: 'event', label: 'updates.categories.event', icon: <Calendar size={16} /> },
  { id: 'scholarship', label: 'updates.categories.scholarship', icon: <BookOpen size={16} /> },
  { id: 'material', label: 'updates.categories.material', icon: <Book size={16} /> },
];

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

const getCategoryIcon = (category: string) => {
  switch (category) {
    case 'batch':
      return <Users size={20} className="text-primary-500" />;
    case 'result':
      return <Award size={20} className="text-secondary-500" />;
    case 'event':
      return <Calendar size={20} className="text-accent-500" />;
    case 'scholarship':
      return <BookOpen size={20} className="text-success-500" />;
    case 'material':
      return <Book size={20} className="text-warning-500" />;
    default:
      return <Bell size={20} className="text-primary-500" />;
  }
};

const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }).format(date);
};

const Latest: React.FC = () => {
  const { t } = useTranslation();
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredUpdates = activeCategory === 'all' 
    ? updatesData 
    : updatesData.filter(update => update.category === activeCategory);

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
            {t('updates.title')}
          </h1>
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
            {t('updates.subtitle')}
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`flex items-center px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300 ${
                activeCategory === category.id
                  ? 'bg-primary-500 text-white'
                  : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
              }`}
            >
              <span className="mr-1">{category.icon}</span>
              {t(category.label)}
            </button>
          ))}
        </motion.div>

        {/* Updates List */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="space-y-6"
        >
          {filteredUpdates.map((update) => (
            <motion.div
              key={update.id}
              variants={item}
              className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="p-6">
                <div className="flex items-start">
                  <div className="p-3 rounded-full bg-gray-100 dark:bg-gray-700 mr-4">
                    {getCategoryIcon(update.category)}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        {formatDate(update.date)}
                      </span>
                      <span className={`text-xs px-2 py-1 rounded-full font-medium 
                        ${update.category === 'batch' ? 'bg-primary-100 text-primary-800 dark:bg-primary-900 dark:text-primary-300' : ''}
                        ${update.category === 'result' ? 'bg-secondary-100 text-secondary-800 dark:bg-secondary-900 dark:text-secondary-300' : ''}
                        ${update.category === 'event' ? 'bg-accent-100 text-accent-800 dark:bg-accent-900 dark:text-accent-300' : ''}
                        ${update.category === 'scholarship' ? 'bg-success-100 text-success-800 dark:bg-success-900 dark:text-success-300' : ''}
                        ${update.category === 'material' ? 'bg-warning-100 text-warning-800 dark:bg-warning-900 dark:text-warning-300' : ''}
                      `}>
                        {t(`updates.categories.${update.category}`)}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                      {update.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      {update.description}
                    </p>
                    <Link
                      to={update.link}
                      className="inline-flex items-center text-primary-600 dark:text-primary-400 hover:text-primary-800 dark:hover:text-primary-300 font-medium"
                    >
                      {t('updates.readMore')}
                      <ArrowRight size={16} className="ml-1" />
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {filteredUpdates.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600 dark:text-gray-400 text-lg">
              No updates found in this category. Please check back later.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Latest;