import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Shield, Target, Lightbulb, Heart, Clock } from 'lucide-react';

import toppersData from '../data/toppers.json';
import { Link } from 'react-router-dom';

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

const About: React.FC = () => {
  const { t } = useTranslation();
  // Get a subset of testimonials
  const testimonials = toppersData.slice(0, 3);

  const values = [
    {
      icon: <Shield className="h-8 w-8 text-primary-500" />,
      title: t('about.values.integrity'),
      description: "We uphold the highest standards of honesty and ethical conduct in all our interactions."
    },
    {
      icon: <Target className="h-8 w-8 text-secondary-500" />,
      title: t('about.values.excellence'),
      description: "We strive for excellence in education, mentoring, and student outcomes."
    },
    {
      icon: <Lightbulb className="h-8 w-8 text-accent-500" />,
      title: t('about.values.innovation'),
      description: "We constantly evolve our teaching methodologies and content to stay relevant."
    },
    {
      icon: <Heart className="h-8 w-8 text-error-500" />,
      title: t('about.values.respect'),
      description: "We treat every student, staff member, and stakeholder with dignity and respect."
    },
    {
      icon: <Clock className="h-8 w-8 text-success-500" />,
      title: t('about.values.accountability'),
      description: "We take responsibility for our actions and are accountable to our students and society."
    }
  ];

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
            {t('about.title')}
          </h1>
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
            {t('about.subtitle')}
          </p>
        </motion.div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md"
          >
            <h2 className="text-2xl font-bold text-primary-600 dark:text-primary-400 mb-4">
              {t('about.mission.title')}
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              {t('about.mission.content')}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md"
          >
            <h2 className="text-2xl font-bold text-secondary-600 dark:text-secondary-400 mb-4">
              {t('about.vision.title')}
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              {t('about.vision.content')}
            </p>
          </motion.div>
        </div>

        {/* Our Values */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mb-16"
        >
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white text-center mb-8">
            {t('about.values.title')}
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md text-center"
              >
                <div className="flex justify-center mb-4">
                  {value.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                  {value.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Our Journey */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mb-16"
        >
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white text-center mb-8">
            {t('about.history.title')}
          </h2>
          <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md">
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
              {t('about.history.content')}
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600 dark:text-primary-400">2010</div>
                <p className="text-gray-600 dark:text-gray-400">Founded</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600 dark:text-primary-400">5</div>
                <p className="text-gray-600 dark:text-gray-400">Branches</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600 dark:text-primary-400">12,000+</div>
                <p className="text-gray-600 dark:text-gray-400">Students Trained</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600 dark:text-primary-400">500+</div>
                <p className="text-gray-600 dark:text-gray-400">Selections</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Testimonials */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white text-center mb-8">
            {t('about.testimonials.title')}
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md"
              >
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                      {testimonial.name}
                    </h3>
                    <p className="text-sm text-primary-600 dark:text-primary-400">
                      {testimonial.exam}, Rank {testimonial.rank}
                    </p>
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-400 italic">
                  "{testimonial.testimonial}"
                </p>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              to="/toppers"
              className="inline-flex items-center px-4 py-2 bg-primary-500 hover:bg-primary-600 text-white font-medium rounded-md transition-colors duration-300"
            >
              {t('about.testimonials.viewAll')}
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;