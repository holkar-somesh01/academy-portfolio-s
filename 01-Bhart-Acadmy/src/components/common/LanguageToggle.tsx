import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Globe, ChevronDown } from 'lucide-react';

const languages = [
  { code: 'en', name: 'English' },
  { code: 'hi', name: 'हिंदी' },
  { code: 'mr', name: 'मराठी' },
];

const LanguageToggle: React.FC = () => {
  const { i18n, t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const changeLanguage = (code: string) => {
    i18n.changeLanguage(code);
    setIsOpen(false);
  };

  const currentLanguage = languages.find((lang) => lang.code === i18n.language) || languages[0];

  return (
    <div className="relative">
      <button
        onClick={toggleDropdown}
        className="flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300 hover:bg-gray-100 dark:hover:bg-gray-800"
        aria-label="Select language"
      >
        <Globe size={18} />
        <span className="hidden md:inline">{t(`language.${currentLanguage.code}`)}</span>
        <ChevronDown size={16} className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2 }}
          className="absolute bottom-6 md:bottom-0 md:top-2 md:right-4 md:bg-white mt-2 w-40 bg-white dark:bg-gray-800 rounded-md shadow-lg py-1 z-50"
        >
          {languages.map((language) => (
            <button
              key={language.code}
              onClick={() => changeLanguage(language.code)}
              className={`block w-full text-left px-4 py-2 text-sm ${i18n.language === language.code
                ? 'text-primary-600 dark:text-primary-400 font-medium bg-primary-50 dark:bg-gray-700'
                : 'text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700'
                }`}
            >
              {t(`language.${language.code}`)}
            </button>
          ))}
        </motion.div>
      )}
    </div>
  );
};

export default LanguageToggle;