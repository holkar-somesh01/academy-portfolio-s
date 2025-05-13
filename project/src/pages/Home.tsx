import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { ArrowRight, Award, BookOpen, Users, Calendar } from 'lucide-react';

import courses from '../data/courses.json';

const animVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5 }
  })
};

const Home: React.FC = () => {
  const { t } = useTranslation();
  const featuredCourses = courses.slice(0, 3);

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Students studying"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 to-gray-900/50 dark:from-gray-900/95 dark:to-gray-900/75" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <motion.div 
            className="max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
              {t('home.hero.title')}
            </h1>
            <p className="text-xl sm:text-2xl text-gray-200 mb-8">
              {t('home.hero.subtitle')}
            </p>
            <Link 
              to="/courses" 
              className="inline-flex items-center px-6 py-3 bg-primary-500 hover:bg-primary-600 text-white font-medium rounded-md transition-colors duration-300"
            >
              {t('home.hero.cta')}
              <ArrowRight size={20} className="ml-2" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { icon: <Calendar className="h-10 w-10 mx-auto text-primary-500" />, value: "13+", label: t('home.stats.years') },
              { icon: <Award className="h-10 w-10 mx-auto text-secondary-500" />, value: "500+", label: t('home.stats.selections') },
              { icon: <Users className="h-10 w-10 mx-auto text-accent-500" />, value: "25+", label: t('home.stats.faculty') },
              { icon: <BookOpen className="h-10 w-10 mx-auto text-primary-500" />, value: "12+", label: t('home.stats.courses') }
            ].map((stat, index) => (
              <motion.div
                key={index}
                custom={index}
                variants={animVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                className="p-6 rounded-lg bg-gray-50 dark:bg-gray-700 shadow-sm"
              >
                {stat.icon}
                <h3 className="mt-4 text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">{stat.value}</h3>
                <p className="mt-2 text-gray-600 dark:text-gray-300">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              {t('home.intro.title')}
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
              {t('home.intro.content')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Courses */}
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              {t('home.featured.title')}
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300">
              {t('home.featured.subtitle')}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredCourses.map((course, index) => (
              <motion.div
                key={course.id}
                custom={index}
                variants={animVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                className="bg-gray-50 dark:bg-gray-700 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
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
                      {course.duration}
                    </div>
                    <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                      <Users size={16} className="mr-1" />
                      {t('courses.batchSize')}: {course.batch_size}
                    </div>
                  </div>
                  <Link
                    to={`/courses/${course.id}`}
                    className="inline-flex items-center text-primary-600 dark:text-primary-400 hover:text-primary-800 dark:hover:text-primary-300 font-medium"
                  >
                    {t('common.viewDetails')}
                    <ArrowRight size={16} className="ml-1" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              to="/courses"
              className="inline-flex items-center px-6 py-3 bg-primary-500 hover:bg-primary-600 text-white font-medium rounded-md transition-colors duration-300"
            >
              {t('home.featured.viewAll')}
              <ArrowRight size={20} className="ml-2" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;