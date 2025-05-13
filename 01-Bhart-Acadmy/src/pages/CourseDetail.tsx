import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Calendar, Users, ArrowLeft, Clock, CheckCircle } from 'lucide-react';

import coursesData from '../data/courses.json';

const CourseDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { t } = useTranslation();
  const [course, setCourse] = useState<typeof coursesData[0] | null>(null);

  useEffect(() => {
    if (id) {
      const foundCourse = coursesData.find(c => c.id.toString() === id);
      setCourse(foundCourse || null);
    }
  }, [id]);

  if (!course) {
    return (
      <div className="py-16 px-4 text-center">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
          Course not found
        </h2>
        <Link
          to="/courses"
          className="inline-flex items-center text-primary-600 dark:text-primary-400 hover:text-primary-800 dark:hover:text-primary-300 font-medium"
        >
          <ArrowLeft size={16} className="mr-1" />
          Back to courses
        </Link>
      </div>
    );
  }

  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          to="/courses"
          className="inline-flex items-center text-primary-600 dark:text-primary-400 hover:text-primary-800 dark:hover:text-primary-300 font-medium mb-8"
        >
          <ArrowLeft size={16} className="mr-1" />
          {t('nav.courses')}
        </Link>

        <div className="grid md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="md:col-span-2"
          >
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              {course.title}
            </h1>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
              {course.description}
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-8">
              <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                <Calendar size={24} className="text-primary-500 mb-2" />
                <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">{t('courses.duration')}</h3>
                <p className="text-lg font-bold text-gray-900 dark:text-white">{course.duration}</p>
              </div>
              <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                <Clock size={24} className="text-secondary-500 mb-2" />
                <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">{t('courses.fees')}</h3>
                <p className="text-lg font-bold text-gray-900 dark:text-white">{course.fees}</p>
              </div>
              <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                <Users size={24} className="text-accent-500 mb-2" />
                <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">{t('courses.batchSize')}</h3>
                <p className="text-lg font-bold text-gray-900 dark:text-white">{course.batch_size}</p>
              </div>
            </div>

            <div className="mb-8">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                {t('courses.highlights')}
              </h2>
              <ul className="space-y-2">
                {course.highlights.map((highlight, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="flex items-start"
                  >
                    <CheckCircle size={20} className="text-primary-500 mt-1 mr-2 flex-shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300">{highlight}</span>
                  </motion.li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                {t('courses.outcomes')}
              </h2>
              <ul className="space-y-2">
                {course.outcomes.map((outcome, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 + 0.5 }}
                    className="flex items-start"
                  >
                    <CheckCircle size={20} className="text-accent-500 mt-1 mr-2 flex-shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300">{outcome}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="md:col-span-1"
          >
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden sticky top-24">
              <img
                src={course.image}
                alt={course.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                  Enroll Now
                </h3>
                <div className="mb-6">
                  <p className="text-gray-700 dark:text-gray-300 mb-2">
                    Next batch starting soon. Limited seats available.
                  </p>
                  <p className="text-xl font-bold text-secondary-600 dark:text-secondary-400 mb-4">
                    {course.fees}
                  </p>
                </div>
                <div className="space-y-3">
                  <button className="w-full px-4 py-3 bg-primary-500 hover:bg-primary-600 text-white font-medium rounded-md transition-colors duration-300">
                    {t('courses.apply')}
                  </button>
                  <button className="w-full px-4 py-3 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-800 dark:text-white font-medium rounded-md transition-colors duration-300">
                    {t('courses.enquire')}
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetail;