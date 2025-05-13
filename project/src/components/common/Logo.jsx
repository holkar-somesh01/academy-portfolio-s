import { Link } from 'react-router-dom'

const Logo = ({ variant = 'dark' }) => {
  return (
    <Link to="/" className="flex items-center">
      <span className={`text-2xl font-bold font-poppins ${variant === 'light' ? 'text-white' : 'text-primary-800'
        }`}>
        Excel<span className={variant === 'light' ? 'text-secondary-300' : 'text-secondary-400'}>Academy</span>
      </span>
    </Link>
  )
}

export default Logo