import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Facebook, Twitter, Instagram, Youtube, Mail } from 'lucide-react';
import Logo from '../common/Logo'

const Footer: React.FC = () => {
  const { t } = useTranslation();

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold text-primary-400 mb-4">{t('site.name')}</h3>
            <p className="text-gray-400 mb-4">{t('site.description')}</p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors duration-300" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors duration-300" aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors duration-300" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors duration-300" aria-label="YouTube">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">{t('footer.quickLinks')}</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-primary-400 transition-colors duration-300">
                  {t('nav.home')}
                </Link>
              </li>
              <li>
                <Link to="/courses" className="text-gray-400 hover:text-primary-400 transition-colors duration-300">
                  {t('nav.courses')}
                </Link>
              </li>
              <li>
                <Link to="/faculty" className="text-gray-400 hover:text-primary-400 transition-colors duration-300">
                  {t('nav.faculty')}
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-primary-400 transition-colors duration-300">
                  {t('nav.about')}
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-primary-400 transition-colors duration-300">
                  {t('nav.contact')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">{t('contact.info.address')}</h3>
            <address className="text-gray-400 not-italic mb-4">
              {t('contact.addressLine1')}<br />
              {t('contact.addressLine2')}<br />
              {t('contact.addressLine3')}
            </address>
            <p className="text-gray-400 flex items-center mb-2">
              <Mail size={16} className="mr-2" />
              <a href="mailto:info@bharatsuccessacademy.com" className="hover:text-primary-400 transition-colors duration-300">
                {t('contact.emailAddress')}
              </a>
            </p>
            <p className="text-gray-400">{t('contact.phoneNumber')}</p>
          </div>

          {/* Newsletter Subscription */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">{t('footer.subscribe')}</h3>
            <p className="text-gray-400 mb-4">Stay updated with our latest news and offers.</p>
            <form className="mb-2">
              <div className="flex flex-col sm:flex-row gap-2">
                <input
                  type="email"
                  placeholder="Email Address"
                  className="bg-gray-800 text-white px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-400"
                  required
                />
                <button
                  type="submit"
                  className="bg-primary-500 hover:bg-primary-600 text-white px-4 py-2 rounded-md transition-colors duration-300"
                >
                  {t('footer.subscribeButton')}
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-gray-800 text-center">
          <p className="text-gray-500">
            {t('footer.copyright').replace('2024', currentYear.toString())}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;