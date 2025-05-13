import { Link } from 'react-router-dom'
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa'
import Logo from '../common/Logo'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="mb-4">
              <Logo variant="light" />
            </div>
            <p className="mb-4 text-sm">
              Excel Academy is dedicated to providing world-class education that transforms students into future leaders through innovative teaching methods and industry-relevant curriculum.
            </p>
            <div className="flex space-x-4 text-lg">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary-400 transition-colors">
                <FaFacebook />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary-400 transition-colors">
                <FaTwitter />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary-400 transition-colors">
                <FaInstagram />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary-400 transition-colors">
                <FaLinkedin />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:text-primary-400 transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/courses" className="hover:text-primary-400 transition-colors">Courses</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-primary-400 transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-primary-400 transition-colors">Contact Us</Link>
              </li>
              <li>
                <Link to="/privacy-policy" className="hover:text-primary-400 transition-colors">Privacy Policy</Link>
              </li>
              <li>
                <Link to="/terms-of-service" className="hover:text-primary-400 transition-colors">Terms of Service</Link>
              </li>
            </ul>
          </div>

          {/* Courses */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Popular Courses</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/courses" className="hover:text-primary-400 transition-colors">Web Development</Link>
              </li>
              <li>
                <Link to="/courses" className="hover:text-primary-400 transition-colors">Digital Marketing</Link>
              </li>
              <li>
                <Link to="/courses" className="hover:text-primary-400 transition-colors">Data Science</Link>
              </li>
              <li>
                <Link to="/courses" className="hover:text-primary-400 transition-colors">UI/UX Design</Link>
              </li>
              <li>
                <Link to="/courses" className="hover:text-primary-400 transition-colors">Business Management</Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Contact Information</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <FaMapMarkerAlt className="mt-1 mr-3 text-primary-400" />
                <span>123 Education Avenue, Learning District, NY 10001</span>
              </li>
              <li className="flex items-center">
                <FaPhone className="mr-3 text-primary-400" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center">
                <FaEnvelope className="mr-3 text-primary-400" />
                <span>info@excelacademy.edu</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-10 pt-6 text-sm text-center">
          <p>&copy; {currentYear} Excel Academy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer