import { useState, useEffect, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import CountUp from 'react-countup'
import { FaGraduationCap, FaUsers, FaLaptop, FaCertificate } from 'react-icons/fa'

const stats = [
  {
    icon: <FaGraduationCap className="text-4xl text-primary-600" />,
    count: 25000,
    label: "Graduates",
    suffix: "+"
  },
  {
    icon: <FaUsers className="text-4xl text-primary-600" />,
    count: 45,
    label: "Expert Instructors",
    suffix: "+"
  },
  {
    icon: <FaLaptop className="text-4xl text-primary-600" />,
    count: 120,
    label: "Active Courses",
    suffix: "+"
  },
  {
    icon: <FaCertificate className="text-4xl text-primary-600" />,
    count: 96,
    label: "Placement Rate",
    suffix: "%"
  }
];

const StatsSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [counted, setCounted] = useState(false)

  useEffect(() => {
    if (isInView && !counted) {
      setCounted(true)
    }
  }, [isInView, counted])

  return (
    <section className="py-16 bg-primary-800 text-white">
      <div className="container">
        <div 
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center"
        >
          {stats.map((stat, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col items-center"
            >
              <div className="mb-4">{stat.icon}</div>
              <h3 className="text-4xl font-bold mb-2">
                {isInView ? (
                  <CountUp
                    end={stat.count}
                    duration={2.5}
                    separator=","
                    suffix={stat.suffix}
                  />
                ) : (
                  "0"
                )}
              </h3>
              <p className="text-gray-300">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default StatsSection