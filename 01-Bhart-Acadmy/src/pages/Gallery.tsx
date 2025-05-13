import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { Image, Video, X } from 'lucide-react';

import galleryData from '../data/gallery.json';

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
  hidden: { opacity: 0, scale: 0.9 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.5 } }
};

const Gallery: React.FC = () => {
  const { t } = useTranslation();
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedItem, setSelectedItem] = useState<typeof galleryData[0] | null>(null);

  const filteredGallery = activeFilter === 'all' 
    ? galleryData 
    : galleryData.filter(item => item.type === activeFilter);

  const openLightbox = (item: typeof galleryData[0]) => {
    setSelectedItem(item);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedItem(null);
    document.body.style.overflow = 'auto';
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
            {t('gallery.title')}
          </h1>
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
            {t('gallery.subtitle')}
          </p>
        </motion.div>

        {/* Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex justify-center space-x-4 mb-12"
        >
          <button
            onClick={() => setActiveFilter('all')}
            className={`px-4 py-2 rounded-full flex items-center text-sm font-medium transition-colors duration-300 ${
              activeFilter === 'all'
                ? 'bg-primary-500 text-white'
                : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
            }`}
          >
            {t('gallery.all')}
          </button>
          <button
            onClick={() => setActiveFilter('image')}
            className={`px-4 py-2 rounded-full flex items-center text-sm font-medium transition-colors duration-300 ${
              activeFilter === 'image'
                ? 'bg-primary-500 text-white'
                : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
            }`}
          >
            <Image size={16} className="mr-1" />
            {t('gallery.images')}
          </button>
          <button
            onClick={() => setActiveFilter('video')}
            className={`px-4 py-2 rounded-full flex items-center text-sm font-medium transition-colors duration-300 ${
              activeFilter === 'video'
                ? 'bg-primary-500 text-white'
                : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
            }`}
          >
            <Video size={16} className="mr-1" />
            {t('gallery.videos')}
          </button>
        </motion.div>

        {/* Gallery Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
        >
          {filteredGallery.map((galleryItem) => (
            <motion.div
              key={galleryItem.id}
              variants={item}
              className="relative overflow-hidden rounded-lg aspect-square group cursor-pointer"
              onClick={() => openLightbox(galleryItem)}
            >
              <img
                src={galleryItem.url}
                alt={galleryItem.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                <h3 className="text-white font-bold truncate">{galleryItem.title}</h3>
                <p className="text-gray-300 text-sm">{galleryItem.date}</p>
                {galleryItem.type === 'video' && (
                  <div className="absolute top-2 right-2 bg-primary-500 text-white p-1 rounded-full">
                    <Video size={14} />
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {filteredGallery.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600 dark:text-gray-400 text-lg">
              No items found in this category. Please check back later.
            </p>
          </div>
        )}

        {/* Lightbox */}
        <AnimatePresence>
          {selectedItem && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
              onClick={closeLightbox}
            >
              <button
                className="absolute top-4 right-4 bg-white dark:bg-gray-800 p-2 rounded-full text-gray-900 dark:text-white z-10"
                onClick={closeLightbox}
              >
                <X size={24} />
              </button>
              
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="max-w-5xl max-h-[90vh] relative"
                onClick={(e) => e.stopPropagation()}
              >
                <img
                  src={selectedItem.url}
                  alt={selectedItem.title}
                  className="max-w-full max-h-[80vh] object-contain rounded-lg"
                />
                <div className="bg-white dark:bg-gray-800 p-4 rounded-b-lg">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">{selectedItem.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">{selectedItem.date}</p>
                  <p className="text-gray-700 dark:text-gray-300 mt-2">{selectedItem.description}</p>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Gallery;