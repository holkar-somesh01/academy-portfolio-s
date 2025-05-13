import { motion } from 'framer-motion'
import SectionTitle from '../common/SectionTitle'

const milestones = [
  {
    year: "2010",
    title: "Foundation",
    description: "Excel Academy was founded with a mission to provide accessible, quality education to students worldwide."
  },
  {
    year: "2014",
    title: "Expansion",
    description: "Expanded our course offerings to include technology, business, and design programs to meet growing industry demands."
  },
  {
    year: "2017",
    title: "Online Platform",
    description: "Launched our state-of-the-art online learning platform, making education accessible to students globally."
  },
  {
    year: "2020",
    title: "Industry Partnerships",
    description: "Established partnerships with leading tech companies to provide internship opportunities and job placements."
  },
  {
    year: "2023",
    title: "Global Recognition",
    description: "Achieved international accreditation and recognition as a premier educational institution."
  }
];

const HistorySection = () => {
  return (
    <section className="section bg-white">
      <div className="container">
        <SectionTitle 
          title="Our Journey" 
          subtitle="From humble beginnings to becoming a leading educational institution"
        />
        
        <div className="relative max-w-3xl mx-auto mt-16">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-1 bg-primary-100"></div>
          
          {/* Timeline items */}
          {milestones.map((milestone, index) => (
            <motion.div 
              key={index}
              className={`relative mb-12 ${
                index % 2 === 0 ? 'text-right' : 'text-left'
              }`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className={`flex items-center ${
                index % 2 === 0 ? 'justify-end' : 'justify-start'
              }`}>
                <div className={`${
                  index % 2 === 0 ? 'order-2 ml-8' : 'order-1 mr-8'
                } bg-white w-full max-w-sm p-6 rounded-lg shadow-soft`}>
                  <div className="text-primary-600 font-bold mb-2">{milestone.year}</div>
                  <h3 className="text-xl font-semibold mb-2">{milestone.title}</h3>
                  <p className="text-gray-600">{milestone.description}</p>
                </div>
                
                <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center">
                  <div className="w-5 h-5 rounded-full bg-primary-600 border-4 border-white"></div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default HistorySection