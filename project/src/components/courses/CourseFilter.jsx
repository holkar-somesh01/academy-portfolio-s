import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { categories } from '../../data/courses'

const CourseFilter = ({ setActiveCategory, activeCategory }) => {
  return (
    <div className="mb-8">
      <h3 className="text-lg font-semibold mb-4">Filter by Category</h3>
      <div className="flex flex-wrap gap-2">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all relative ${
              activeCategory === category
                ? 'text-white'
                : 'text-gray-600 hover:text-primary-600'
            }`}
          >
            <span className="relative z-10">{category}</span>
            
            {/* Animated background for active category */}
            <AnimatePresence>
              {activeCategory === category && (
                <motion.span
                  className="absolute inset-0 bg-primary-600 rounded-full"
                  layoutId="categoryBackground"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                />
              )}
            </AnimatePresence>
          </button>
        ))}
      </div>
    </div>
  )
}

export default CourseFilter