import { motion } from 'framer-motion'
import SectionTitle from '../common/SectionTitle'
import { FaLinkedin, FaTwitter } from 'react-icons/fa'

const team = [
  {
    name: "Dr. Jennifer Williams",
    role: "Founder & CEO",
    image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg",
    bio: "Dr. Williams founded Excel Academy with a vision to transform education through innovative teaching methods and industry-relevant curriculum.",
    linkedin: "#",
    twitter: "#"
  },
  {
    name: "Michael Thompson",
    role: "Director of Academics",
    image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg",
    bio: "With over 15 years in education, Michael leads our academic department ensuring all courses meet the highest standards of quality.",
    linkedin: "#",
    twitter: "#"
  },
  {
    name: "Sarah Chen",
    role: "Head of Technology",
    image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg",
    bio: "Sarah oversees our technology department, developing cutting-edge learning platforms and digital tools for students and instructors.",
    linkedin: "#",
    twitter: "#"
  },
  {
    name: "David Rodriguez",
    role: "Career Services Director",
    image: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg",
    bio: "David leads our career services team, connecting students with industry partners and ensuring high job placement rates.",
    linkedin: "#",
    twitter: "#"
  }
];

const TeamSection = () => {
  return (
    <section className="section bg-gray-50">
      <div className="container">
        <SectionTitle 
          title="Meet Our Leadership Team" 
          subtitle="The visionaries and experts behind Excel Academy's success."
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="card p-6 text-center"
            >
              <div className="relative w-32 h-32 mx-auto mb-4">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              
              <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
              <p className="text-primary-600 font-medium mb-3">{member.role}</p>
              <p className="text-gray-600 mb-4 text-sm">{member.bio}</p>
              
              <div className="flex justify-center space-x-3">
                <a 
                  href={member.linkedin} 
                  className="text-gray-500 hover:text-primary-600 transition-colors"
                  aria-label={`${member.name}'s LinkedIn`}
                >
                  <FaLinkedin className="text-lg" />
                </a>
                <a 
                  href={member.twitter} 
                  className="text-gray-500 hover:text-primary-600 transition-colors"
                  aria-label={`${member.name}'s Twitter`}
                >
                  <FaTwitter className="text-lg" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TeamSection