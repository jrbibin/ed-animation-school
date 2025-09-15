import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Calendar, CheckCircle, Clock, DollarSign, FileText, Users, Award, ArrowRight, Download, Send, GraduationCap, BookOpen, Star, Target } from 'lucide-react'

const Admissions = () => {
  const floatingIcons = [
    { Icon: GraduationCap, delay: 1.8, x: -90, y: 70, color: 'text-pink-400/25', size: 'h-6 w-6' },
    { Icon: BookOpen, delay: 2.8, x: 110, y: -80, color: 'text-pink-300/30', size: 'h-5 w-5' },
    { Icon: Star, delay: 3.8, x: 130, y: 90, color: 'text-pink-500/20', size: 'h-6 w-6' },
    { Icon: Target, delay: 4.8, x: -110, y: -100, color: 'text-pink-400/30', size: 'h-6 w-6' },
    { Icon: Award, delay: 5.8, x: 160, y: 50, color: 'text-pink-300/25', size: 'h-6 w-6' }
  ]
  
  const [selectedIntake, setSelectedIntake] = useState('spring')
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    course: '',
    experience: '',
    message: ''
  })

  const intakes = {
    spring: {
      name: 'Spring 2024',
      startDate: 'March 15, 2024',
      applicationDeadline: 'February 1, 2024',
      availableSeats: 45,
      status: 'Open'
    },
    summer: {
      name: 'Summer 2024',
      startDate: 'June 10, 2024',
      applicationDeadline: 'May 1, 2024',
      availableSeats: 30,
      status: 'Open'
    },
    fall: {
      name: 'Fall 2024',
      startDate: 'September 5, 2024',
      applicationDeadline: 'July 15, 2024',
      availableSeats: 50,
      status: 'Early Bird'
    }
  }

  const requirements = [
    {
      title: 'Portfolio Submission',
      description: 'Submit 10-15 pieces showcasing your artistic abilities and creativity',
      icon: FileText
    },
    {
      title: 'Academic Transcripts',
      description: 'High school diploma or equivalent with minimum 2.5 GPA',
      icon: Award
    },
    {
      title: 'Personal Statement',
      description: 'Essay explaining your passion for animation and career goals',
      icon: FileText
    },
    {
      title: 'Letters of Recommendation',
      description: 'Two letters from teachers, employers, or mentors',
      icon: Users
    }
  ]

  const applicationSteps = [
    {
      step: 1,
      title: 'Submit Application',
      description: 'Complete online application form with personal details',
      duration: '15 minutes'
    },
    {
      step: 2,
      title: 'Portfolio Review',
      description: 'Our faculty reviews your artistic portfolio',
      duration: '1-2 weeks'
    },
    {
      step: 3,
      title: 'Interview Process',
      description: 'Virtual or in-person interview with admissions team',
      duration: '30 minutes'
    },
    {
      step: 4,
      title: 'Admission Decision',
      description: 'Receive acceptance letter and enrollment information',
      duration: '3-5 days'
    }
  ]

  const scholarships = [
    {
      name: 'Merit Scholarship',
      amount: 'Up to $5,000',
      criteria: 'Outstanding portfolio and academic performance',
      deadline: '1 month before intake'
    },
    {
      name: 'Need-Based Aid',
      amount: 'Up to $3,000',
      criteria: 'Demonstrated financial need',
      deadline: '2 weeks before intake'
    },
    {
      name: 'Diversity Scholarship',
      amount: 'Up to $2,500',
      criteria: 'Underrepresented communities in animation',
      deadline: '1 month before intake'
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
    // Handle form submission
    console.log('Form submitted:', formData)
  }

  return (
    <section id="admissions" className="relative section-padding bg-gradient-to-br from-gray-50 to-pink-50 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Large Geometric Shapes */}
        <div className="absolute top-36 left-28 w-84 h-84 bg-pink-400/6 rounded-full blur-3xl"></div>
        <div className="absolute bottom-32 right-28 w-76 h-76 bg-pink-300/8 rounded-full blur-3xl"></div>
        
        {/* Admissions-Related UI Elements */}
        <div className="absolute top-48 right-32">
          {/* Application Form */}
          <div className="bg-white rounded-xl shadow-lg p-4 transform -rotate-5 w-44 h-28">
            <div className="flex items-center space-x-1 mb-2">
              <FileText className="h-3 w-3 text-pink-500" />
              <span className="text-xs font-medium text-gray-700">Application</span>
            </div>
            <div className="space-y-1">
              <div className="w-full h-2 bg-pink-100 rounded"></div>
              <div className="w-3/4 h-2 bg-pink-200 rounded"></div>
              <div className="w-1/2 h-2 bg-pink-300 rounded"></div>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-60 left-36">
          {/* Scholarship Badge */}
          <div className="bg-white rounded-lg shadow-xl p-3 transform rotate-7 w-38 h-22">
            <div className="flex items-center space-x-1 mb-2">
              <DollarSign className="h-3 w-3 text-pink-600" />
              <span className="text-xs font-medium text-gray-800">Scholarships</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-6 h-6 bg-pink-100 rounded-full flex items-center justify-center">
                <Award className="h-3 w-3 text-pink-600" />
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
              duration: 30,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className={`absolute top-1/2 left-1/2 ${item.color}`}
          >
            <item.Icon className={item.size} />
          </motion.div>
        ))}
        
        {/* Floating Dots */}
        <div className="absolute top-1/4 left-1/6 w-2 h-2 bg-pink-400 rounded-full animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/5 w-3 h-3 bg-pink-300 rounded-full animate-bounce"></div>
        <div className="absolute top-3/4 right-1/6 w-2 h-2 bg-pink-200 rounded-full animate-ping"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-display text-gray-900 mb-6">
            <span className="gradient-text">Admissions</span> & Enrollment
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Take the first step towards your animation career. Our streamlined admissions 
            process is designed to identify passionate and talented individuals.
          </p>
        </motion.div>

        {/* Intake Information */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h3 className="text-3xl font-bold font-display text-gray-900 text-center mb-8">
            Upcoming Intakes
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {Object.entries(intakes).map(([key, intake]) => (
              <motion.div
                key={key}
                whileHover={{ scale: 1.02 }}
                className={`card-floating p-6 cursor-pointer ${
                  selectedIntake === key
                    ? 'ring-2 ring-pink-400 shadow-pink-300/40'
                    : ''
                }`}
                onClick={() => setSelectedIntake(key)}
              >
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-xl font-bold font-display text-gray-900">
                    {intake.name}
                  </h4>
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                    intake.status === 'Open'
                      ? 'bg-green-100 text-green-700'
                      : 'bg-pink-100 text-pink-700'
                  }`}>
                    {intake.status}
                  </span>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <Calendar className="h-4 w-4 text-pink-600" />
                    <span className="text-gray-700">Starts: {intake.startDate}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="h-4 w-4 text-pink-600" />
                    <span className="text-gray-700">Deadline: {intake.applicationDeadline}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Users className="h-4 w-4 text-pink-600" />
                    <span className="text-gray-700">{intake.availableSeats} seats available</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Application Requirements */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h3 className="text-3xl font-bold font-display text-gray-900 text-center mb-8">
            Application Requirements
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {requirements.map((requirement, index) => {
              const Icon = requirement.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  className="card-modern p-6 text-center"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-pink-100 to-pink-200 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Icon className="h-8 w-8 text-pink-600" />
                  </div>
                  <h4 className="font-bold text-gray-900 mb-3">{requirement.title}</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">{requirement.description}</p>
                </motion.div>
              )
            })}
          </div>
        </motion.div>

        {/* Application Process */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h3 className="text-3xl font-bold font-display text-gray-900 text-center mb-8">
            Application Process
          </h3>
          <div className="relative">
            {/* Progress Line */}
            <div className="absolute top-8 left-0 right-0 h-0.5 bg-gray-200 hidden lg:block"></div>
            <div className="grid lg:grid-cols-4 gap-8">
              {applicationSteps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2, duration: 0.6 }}
                  className="relative"
                >
                  {/* Step Number */}
                  <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4 relative z-10">
                    <span className="text-white font-bold text-xl">{step.step}</span>
                  </div>
                  <div className="text-center">
                    <h4 className="font-bold text-gray-900 mb-2">{step.title}</h4>
                    <p className="text-gray-600 text-sm mb-2">{step.description}</p>
                    <span className="text-pink-600 font-medium text-sm">{step.duration}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Scholarships */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h3 className="text-3xl font-bold font-display text-gray-900 text-center mb-8">
            Scholarships & Financial Aid
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {scholarships.map((scholarship, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="card-modern p-6"
              >
                <div className="flex items-center justify-between mb-4">
                  <h4 className="font-bold text-gray-900">{scholarship.name}</h4>
                  <div className="flex items-center space-x-1">
                    <DollarSign className="h-4 w-4 text-green-600" />
                    <span className="font-bold text-green-600">{scholarship.amount}</span>
                  </div>
                </div>
                <p className="text-gray-600 text-sm mb-4">{scholarship.criteria}</p>
                <div className="flex items-center space-x-2 text-sm text-gray-500">
                  <Clock className="h-4 w-4" />
                  <span>Deadline: {scholarship.deadline}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Application Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-3xl p-8 md:p-12"
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Form Info */}
            <div>
              <h3 className="text-3xl font-bold font-display text-gray-900 mb-6">
                Ready to Apply?
              </h3>
              <p className="text-lg text-gray-600 mb-8">
                Start your application today and take the first step towards your dream career in animation.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span className="text-gray-700">Free application review</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span className="text-gray-700">Portfolio feedback included</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span className="text-gray-700">Scholarship opportunities</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span className="text-gray-700">Career guidance support</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-outline flex items-center space-x-2"
                >
                  <Download className="h-4 w-4" />
                  <span>Download Brochure</span>
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-outline flex items-center space-x-2"
                >
                  <Calendar className="h-4 w-4" />
                  <span>Schedule Campus Tour</span>
                </motion.button>
              </div>
            </div>

            {/* Application Form */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h4 className="text-2xl font-bold font-display text-gray-900 mb-6">
                Quick Application Form
              </h4>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
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
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Course of Interest *
                  </label>
                  <select
                    name="course"
                    value={formData.course}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all"
                    required
                  >
                    <option value="">Select a course</option>
                    <option value="3d-animation">3D Animation & Modeling</option>
                    <option value="vfx">Visual Effects (VFX)</option>
                    <option value="2d-animation">2D Animation & Illustration</option>
                    <option value="game-art">Game Art & Design</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Previous Experience
                  </label>
                  <select
                    name="experience"
                    value={formData.experience}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all"
                  >
                    <option value="">Select experience level</option>
                    <option value="beginner">Beginner</option>
                    <option value="some-experience">Some Experience</option>
                    <option value="intermediate">Intermediate</option>
                    <option value="advanced">Advanced</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message (Optional)
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={3}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all"
                    placeholder="Tell us about your goals and interests..."
                  />
                </div>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full btn-primary flex items-center justify-center space-x-2"
                >
                  <Send className="h-4 w-4" />
                  <span>Submit Application</span>
                  <ArrowRight className="h-4 w-4" />
                </motion.button>
              </form>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Admissions