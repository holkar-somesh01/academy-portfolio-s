import { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { FaBars, FaTimes } from 'react-icons/fa'
import Logo from '../common/Logo'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)
  const closeMenu = () => setIsOpen(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Courses', path: '/courses' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' }
  ]

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-soft py-3' : 'bg-transparent py-5'
      }`}>
      <div className="container flex items-center justify-between">
        <Link to="/" className="z-10">
          <Logo />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-4 space-x-1">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                `nav-link ${isActive ? 'active' : ''}`
              }
            >
              {link.name}
            </NavLink>
          ))}
          <Link to="/contact" className="ml-4 btn-primary">
            Enroll Now
          </Link>
        </div>

        {/* Mobile Navigation Toggle */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-xl p-2 focus:outline-none z-10"
          aria-label={isOpen ? "Close Menu" : "Open Menu"}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, x: '100%' }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: '100%' }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-white z-40 flex flex-col items-center justify-center md:hidden"
            >
              <div className="flex flex-col items-center space-y-6">
                {navLinks.map((link) => (
                  <NavLink
                    key={link.name}
                    to={link.path}
                    onClick={closeMenu}
                    className={({ isActive }) =>
                      `text-xl ${isActive ? 'text-primary-600 font-medium' : 'text-gray-800'}`
                    }
                  >
                    {link.name}
                  </NavLink>
                ))}
                <Link
                  to="/contact"
                  onClick={closeMenu}
                  className="mt-4 btn-primary"
                >
                  Enroll Now
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  )
}

export default Navbar