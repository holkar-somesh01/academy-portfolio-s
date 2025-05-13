import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Calendar, Users, ArrowRight } from 'lucide-react';

import coursesData from '../data/courses.json';

const categories = [
  { id: 'all', label: 'All Courses' },
  { id: 'civil-services', label: 'Civil Services' },
  { id: 'state-services', label: 'State Services' },
  { id: 'defense', label: 'Defense' },
  { id: 'police', label: 'Police' },
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

const Courses: React.FC = () => {
  const { t } = useTranslation();
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredCourses = activeCategory === 'all'
    ? coursesData
    : coursesData.filter(course => course.category === activeCategory);

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
            {t('courses.title')}
          </h1>
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
            {t('courses.subtitle')}
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
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300 ${activeCategory === category.id
                ? 'bg-primary-500 text-white'
                : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                }`}
            >
              {category.label}
            </button>
          ))}
        </motion.div>

        {/* Courses Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredCourses.map((course) => (
            <motion.div
              key={course.id}
              variants={item}
              className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <img
                src={course.image}
                alt={course.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {course.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {course.description}
                </p>
                <div className="flex flex-wrap gap-4 mb-6">
                  <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                    <Calendar size={16} className="mr-1" />
                    {t('courses.duration')}: {course.duration}
                  </div>
                  <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                    <Users size={16} className="mr-1" />
                    {t('courses.batchSize')}: {course.batch_size}
                  </div>
                </div>
                <div className="flex justify-between">
                  <span className="font-bold text-secondary-600 dark:text-secondary-400">
                    {course.fees}
                  </span>
                  <Link
                    to={`/courses/${course.id}`}
                    className="inline-flex items-center text-primary-600 dark:text-primary-400 hover:text-primary-800 dark:hover:text-primary-300 font-medium"
                  >
                    {t('common.viewDetails')}
                    <ArrowRight size={16} className="ml-1" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {filteredCourses.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600 dark:text-gray-400 text-lg">
              No courses found in this category. Please check back later.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Courses;