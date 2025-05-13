import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from '../../theme/ThemeContext';

const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const { t } = useTranslation();

  return (
    <button
      onClick={toggleTheme}
      aria-label={theme === 'light' ? t('theme.dark') : t('theme.light')}
      className="flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300 hover:bg-gray-100 dark:hover:bg-gray-800"
    >
      <motion.div
        initial={false}
        animate={{ rotate: theme === 'dark' ? 360 : 0 }}
        transition={{ duration: 0.5 }}
      >
        {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
      </motion.div>
      <span className="hidden md:inline">
        {theme === 'light' ? t('theme.dark') : t('theme.light')}
      </span>
    </button>
  );
};

export default ThemeToggle;