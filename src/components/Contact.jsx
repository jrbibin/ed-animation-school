import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { MapPin, Phone, Mail, Clock, Send, MessageCircle, Calendar, Users, Globe, Star, Award, Heart } from 'lucide-react'

const Contact = () => {
  const floatingIcons = [
    { Icon: Globe, delay: 1.2, x: -75, y: 55, color: 'text-pink-400/25', size: 'h-6 w-6' },
    { Icon: Star, delay: 2.2, x: 95, y: -65, color: 'text-pink-300/30', size: 'h-5 w-5' },
    { Icon: Award, delay: 3.2, x: 115, y: 75, color: 'text-pink-500/20', size: 'h-6 w-6' },
    { Icon: Heart, delay: 4.2, x: -95, y: -85, color: 'text-pink-400/30', size: 'h-6 w-6' },
    { Icon: MessageCircle, delay: 5.2, x: 145, y: 35, color: 'text-pink-300/25', size: 'h-6 w-6' }
  ]
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Visit Our Campus',
      details: [
        'ED Animation School',
        'Sattur, Virudhunagar',
        'Tamilnadu, Pin- 626203'
      ],
      action: 'Get Directions'
    },
    {
      icon: Phone,
      title: 'Call Us',
      details: [
        'Main: +1 (555) 123-4567',
        'Admissions: +1 (555) 123-4568',
        'Student Services: +1 (555) 123-4569'
      ],
      action: 'Call Now'
    },
    {
      icon: Mail,
      title: 'Email Us',
      details: [
        'info@edanimationschool.edu',
        'admissions@edanimationschool.edu',
        'support@edanimationschool.edu'
      ],
      action: 'Send Email'
    },
    {
      icon: Clock,
      title: 'Office Hours',
      details: [
        'Monday - Friday: 8:00 AM - 6:00 PM',
        'Saturday: 9:00 AM - 4:00 PM',
        'Sunday: Closed'
      ],
      action: 'Schedule Visit'
    }
  ]

  const departments = [
    {
      name: 'Admissions Office',
      description: 'Application process, requirements, and enrollment',
      contact: 'admissions@edanimationschool.edu',
      phone: '+1 (555) 123-4568'
    },
    {
      name: 'Student Services',
      description: 'Academic support, counseling, and student life',
      contact: 'support@edanimationschool.edu',
      phone: '+1 (555) 123-4569'
    },
    {
      name: 'Career Services',
      description: 'Job placement, internships, and industry connections',
      contact: 'careers@edanimationschool.edu',
      phone: '+1 (555) 123-4570'
    },
    {
      name: 'Financial Aid',
      description: 'Scholarships, payment plans, and financial assistance',
      contact: 'financial@edanimationschool.edu',
      phone: '+1 (555) 123-4571'
    }
  ]

  const faqs = [
    {
      question: 'What are the admission requirements?',
      answer: 'We require a portfolio, academic transcripts, personal statement, and letters of recommendation. No prior animation experience is required for beginner courses.'
    },
    {
      question: 'Do you offer online courses?',
      answer: 'Yes, we offer hybrid learning options with both in-person and online components. Some courses are available fully online.'
    },
    {
      question: 'What software will I learn?',
      answer: 'Students learn industry-standard software including Maya, Blender, After Effects, Nuke, Photoshop, and more depending on their chosen specialization.'
    },
    {
      question: 'What is the job placement rate?',
      answer: 'Our graduates have a 95% job placement rate within 6 months of graduation, with many securing positions at top animation studios.'
    }
  ]

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Contact form submitted:', formData)
    setFormData({ name: '', email: '', subject: '', message: '' })
  }

  return (
    <section id="contact" className="relative section-padding bg-gradient-to-br from-gray-50 to-pink-50 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Large Geometric Shapes */}
        <div className="absolute top-28 left-20 w-76 h-76 bg-pink-400/6 rounded-full blur-3xl"></div>
        <div className="absolute bottom-24 right-20 w-68 h-68 bg-pink-300/8 rounded-full blur-3xl"></div>
        
        {/* Contact-Related UI Elements */}
        <div className="absolute top-40 right-24">
          {/* Message Interface */}
          <div className="bg-white rounded-xl shadow-lg p-4 transform -rotate-8 w-36 h-20">
            <div className="flex items-center space-x-1 mb-2">
              <MessageCircle className="h-3 w-3 text-pink-500" />
              <span className="text-xs font-medium text-gray-700">Messages</span>
            </div>
            <div className="space-y-1">
              <div className="w-full h-2 bg-pink-100 rounded"></div>
              <div className="w-3/4 h-2 bg-pink-200 rounded"></div>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-52 left-28">
          {/* Contact Card */}
          <div className="bg-white rounded-lg shadow-xl p-3 transform rotate-6 w-32 h-24">
            <div className="flex items-center space-x-1 mb-2">
              <Phone className="h-3 w-3 text-pink-600" />
              <span className="text-xs font-medium text-gray-800">Contact</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-6 h-6 bg-pink-100 rounded-full flex items-center justify-center">
                <Users className="h-3 w-3 text-pink-600" />
              </div>
              <div className="flex-1">
                <div className="w-full h-1 bg-pink-200 rounded mb-1"></div>
                <div className="w-2/3 h-1 bg-pink-300 rounded"></div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Floating Icons */}
        {floatingIcons.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0, rotate: 0 }}
            animate={{ 
              opacity: [0, 1, 1, 1, 0],
              scale: [0, 1, 1.1, 1, 0],
              rotate: [0, 360],
              x: [0, item.x * 0.3, item.x, item.x * 0.7, 0],
              y: [0, item.y * 0.3, item.y, item.y * 0.7, 0]
            }}
            transition={{
              delay: item.delay,
              duration: 26,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className={`absolute top-1/2 left-1/2 ${item.color}`}
          >
            <item.Icon className={item.size} />
          </motion.div>
        ))}
        
        {/* Floating Dots */}
        <div className="absolute top-1/6 left-1/4 w-2 h-2 bg-pink-400 rounded-full animate-pulse"></div>
        <div className="absolute bottom-1/5 right-1/3 w-3 h-3 bg-pink-300 rounded-full animate-bounce"></div>
        <div className="absolute top-5/6 right-1/4 w-2 h-2 bg-pink-200 rounded-full animate-ping"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-display text-gray-900 mb-6">
            Start Your <span className="gradient-text">Journey</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Ready to join the next generation of animation professionals? Get in touch with our admissions team 
            to learn more about our programs and how we can help you build a successful career in the industry.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {contactInfo.map((info, index) => {
            const Icon = info.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="card-floating p-6 text-center group"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-pink-100 to-pink-200 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="h-8 w-8 text-pink-600" />
                </div>
                <h3 className="font-bold text-gray-900 mb-4">{info.title}</h3>
                <div className="space-y-2 mb-4">
                  {info.details.map((detail, idx) => (
                    <p key={idx} className="text-gray-600 text-sm">{detail}</p>
                  ))}
                </div>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="text-pink-600 hover:text-pink-700 font-semibold text-sm transition-colors"
                >
                  {info.action}
                </motion.button>
              </motion.div>
            )
          })}
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white rounded-3xl p-8 shadow-lg"
          >
            <h3 className="text-3xl font-bold font-display text-gray-900 mb-6">
              Send us a Message
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all"
                    required
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Subject *
                </label>
                <select
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all"
                  required
                >
                  <option value="">Select a subject</option>
                  <option value="admissions">Admissions Inquiry</option>
                  <option value="courses">Course Information</option>
                  <option value="financial-aid">Financial Aid</option>
                  <option value="campus-tour">Campus Tour</option>
                  <option value="general">General Question</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Message *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all"
                  placeholder="Tell us how we can help you..."
                  required
                />
              </div>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full btn-primary flex items-center justify-center space-x-2"
              >
                <Send className="h-4 w-4" />
                <span>Send Message</span>
              </motion.button>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="bg-white rounded-3xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold font-display text-gray-900 mb-6">
                Contact Departments
              </h3>
              <div className="space-y-4">
                {departments.map((dept, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.6 }}
                    className="border border-gray-200 rounded-lg p-4 hover:border-pink-300 hover:bg-pink-50 transition-all duration-300"
                  >
                    <h4 className="font-semibold text-gray-900 mb-2">{dept.name}</h4>
                    <p className="text-gray-600 text-sm mb-3">{dept.description}</p>
                    <div className="flex flex-col sm:flex-row gap-2 text-sm">
                      <a
                        href={`mailto:${dept.contact}`}
                        className="text-pink-600 hover:text-pink-700 font-medium"
                      >
                        {dept.contact}
                      </a>
                      <a
                        href={`tel:${dept.phone}`}
                        className="text-primary-600 hover:text-primary-700 font-medium"
                      >
                        {dept.phone}
                      </a>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-r from-pink-500 to-pink-600 rounded-3xl p-8 text-white">
              <h3 className="text-2xl font-bold font-display mb-6">
                Quick Actions
              </h3>
              <div className="space-y-4">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-white/20 hover:bg-white/30 backdrop-blur-md rounded-lg p-4 flex items-center space-x-3 transition-all duration-300"
                >
                  <Calendar className="h-5 w-5" />
                  <span className="font-medium">Schedule Campus Tour</span>
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-white/20 hover:bg-white/30 backdrop-blur-md rounded-lg p-4 flex items-center space-x-3 transition-all duration-300"
                >
                  <MessageCircle className="h-5 w-5" />
                  <span className="font-medium">Live Chat Support</span>
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-white/20 hover:bg-white/30 backdrop-blur-md rounded-lg p-4 flex items-center space-x-3 transition-all duration-300"
                >
                  <Users className="h-5 w-5" />
                  <span className="font-medium">Meet with Advisor</span>
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-white rounded-3xl p-8 md:p-12 shadow-lg mb-16"
        >
          <h3 className="text-3xl font-bold font-display text-gray-900 text-center mb-8">
            Frequently Asked Questions
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="border-l-4 border-primary-500 pl-6"
              >
                <h4 className="font-bold text-gray-900 mb-3">{faq.question}</h4>
                <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-8">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-outline"
            >
              View All FAQs
            </motion.button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-16"
        >
          <h3 className="text-3xl font-bold font-display text-gray-900 text-center mb-8">
            Find Us on Campus
          </h3>
          <div className="bg-white rounded-3xl p-4 shadow-lg">
            <div className="h-96 bg-gradient-to-r from-primary-200 to-accent-200 rounded-2xl flex items-center justify-center">
              <div className="text-center">
                <MapPin className="h-16 w-16 text-primary-600 mx-auto mb-4" />
                <p className="text-lg font-semibold text-gray-700">Interactive Campus Map</p>
                <p className="text-gray-600">123 Animation Boulevard, Los Angeles, CA</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* FAQ Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-20"
        >
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Frequently Asked Questions
          </h3>
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {[
              {
                question: "What are the admission requirements?",
                answer: "We welcome students from all backgrounds. Basic computer literacy and a passion for animation are the primary requirements. Portfolio submission is encouraged but not mandatory for most programs."
              },
              {
                question: "Do you offer online courses?",
                answer: "Yes, we offer both in-person and online learning options. Our hybrid approach combines the best of both worlds with live instruction, recorded sessions, and hands-on projects."
              },
              {
                question: "What is your job placement rate?",
                answer: "We maintain a 95% job placement rate within 6 months of graduation. Our direct industry connections and comprehensive career services ensure our graduates are well-prepared for the workforce."
              },
              {
                question: "What software will I learn?",
                answer: "Students master industry-standard software including Autodesk Maya, Nuke, Adobe Creative Suite, Unreal Engine, Substance Painter, and many more professional tools used in major studios."
              },
              {
                question: "Are there financing options available?",
                answer: "Yes, we offer various financing options including payment plans, scholarships, and partnerships with educational loan providers to make our programs accessible to all students."
              },
              {
                question: "What makes ED School different?",
                answer: "We're not just a school - we're a working production studio. Students learn alongside 200+ professional artists creating content for major studios like Paramount, Disney+, and Netflix."
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <h4 className="text-lg font-semibold text-gray-900 mb-3">
                  {faq.question}
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  {faq.answer}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact