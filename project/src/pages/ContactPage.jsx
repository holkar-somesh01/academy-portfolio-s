import { useEffect } from 'react'
import SectionTitle from '../components/common/SectionTitle'
import ContactForm from '../components/contact/ContactForm'
import ContactInfo from '../components/contact/ContactInfo'
import MapSection from '../components/contact/MapSection'
import CtaSection from '../components/home/CtaSection'

const ContactPage = () => {
  useEffect(() => {
    document.title = 'Contact Us - Excel Academy'
  }, [])

  return (
    <>
      {/* Contact Hero */}
      <section className="pt-32 pb-20 bg-gradient-to-r from-primary-50 to-blue-50">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Get in <span className="text-gradient">Touch</span>
            </h1>
            <p className="text-lg text-gray-700 mb-8">
              Have questions about our courses or programs? We're here to help you find the right educational path.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <ContactForm />
            <ContactInfo />
          </div>
          
          <div className="h-96 md:h-[500px]">
            <MapSection />
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="section bg-white">
        <div className="container">
          <SectionTitle 
            title="Frequently Asked Questions" 
            subtitle="Find answers to common questions about our academy and programs."
          />
          
          <div className="max-w-3xl mx-auto">
            <div className="space-y-6">
              {[
                {
                  question: "How do I enroll in a course?",
                  answer: "You can enroll in a course by navigating to our Courses page, selecting your desired program, and clicking on the 'Enroll Now' button. Alternatively, you can contact our admissions office directly for assistance with enrollment."
                },
                {
                  question: "What payment methods do you accept?",
                  answer: "We accept all major credit cards, bank transfers, and payment plans for eligible students. Scholarships and financial aid options are also available for qualifying individuals."
                },
                {
                  question: "Are there prerequisites for your courses?",
                  answer: "Prerequisites vary by course. Some introductory courses have no prerequisites, while advanced courses may require prior knowledge or completion of foundational courses. Check individual course descriptions for specific requirements."
                },
                {
                  question: "Do you offer refunds if I'm not satisfied?",
                  answer: "Yes, we offer a 14-day satisfaction guarantee. If you're not completely satisfied with your course within the first two weeks, you can request a full refund. Terms and conditions apply."
                }
              ].map((faq, index) => (
                <div 
                  key={index}
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                  className="bg-white rounded-lg shadow-soft p-6"
                >
                  <h3 className="text-xl font-semibold mb-3">{faq.question}</h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      <CtaSection />
    </>
  )
}

export default ContactPage