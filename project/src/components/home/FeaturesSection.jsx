import SectionTitle from '../common/SectionTitle'
import { FaGraduationCap, FaLaptopCode, FaUserTie, FaChartLine, FaUsers, FaCertificate } from 'react-icons/fa'

const features = [
  {
    icon: <FaGraduationCap className="w-6 h-6 text-primary-600" />,
    title: "Expert Instructors",
    description: "Learn from industry professionals with years of practical experience and passion for teaching."
  },
  {
    icon: <FaLaptopCode className="w-6 h-6 text-primary-600" />,
    title: "Hands-on Projects",
    description: "Apply your knowledge with real-world projects that build your portfolio and demonstrate your skills."
  },
  {
    icon: <FaUserTie className="w-6 h-6 text-primary-600" />,
    title: "Career Support",
    description: "Get personalized career guidance, resume reviews, interview preparation, and job placement assistance."
  },
  {
    icon: <FaChartLine className="w-6 h-6 text-primary-600" />,
    title: "Industry-Relevant Curriculum",
    description: "Our courses are designed in collaboration with industry leaders to ensure you learn what employers need."
  },
  {
    icon: <FaUsers className="w-6 h-6 text-primary-600" />,
    title: "Collaborative Learning",
    description: "Join a community of like-minded learners for networking, support, and collaborative projects."
  },
  {
    icon: <FaCertificate className="w-6 h-6 text-primary-600" />,
    title: "Recognized Certification",
    description: "Earn certificates that are recognized by top employers and add value to your professional profile."
  }
];

const FeaturesSection = () => {
  return (
    <section className="section bg-white relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute left-0 top-0 w-64 h-64 bg-primary-100 rounded-full -translate-x-1/2 -translate-y-1/2 opacity-30"></div>
      <div className="absolute right-0 bottom-0 w-96 h-96 bg-secondary-100 rounded-full translate-x-1/3 translate-y-1/3 opacity-30"></div>
      
      <div className="container relative z-10">
        <SectionTitle 
          title="Why Choose Excel Academy" 
          subtitle="We provide a comprehensive learning experience designed to help you succeed in today's competitive job market."
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="card p-6 card-hover"
            >
              <div className="mb-4 bg-primary-50 w-14 h-14 rounded-lg flex items-center justify-center">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FeaturesSection