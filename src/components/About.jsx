import React from 'react'
import { motion } from 'framer-motion'
import { Award, Users, Globe, Zap, Play, Star, Film, Palette, Layers, Monitor, Camera } from 'lucide-react'

const About = () => {
  const floatingIcons = [
    { Icon: Film, delay: 0.5, x: -80, y: 60, color: 'text-pink-400/30', size: 'h-6 w-6' },
    { Icon: Palette, delay: 1.5, x: 100, y: -50, color: 'text-pink-300/30', size: 'h-5 w-5' },
    { Icon: Layers, delay: 2.5, x: 120, y: 80, color: 'text-pink-500/25', size: 'h-6 w-6' },
    { Icon: Monitor, delay: 3.5, x: -100, y: -70, color: 'text-pink-400/25', size: 'h-7 w-7' },
    { Icon: Camera, delay: 4.5, x: 150, y: 40, color: 'text-pink-300/35', size: 'h-6 w-6' }
  ]

  const stats = [
    { icon: Users, number: '500+', label: 'Graduates' },
    { icon: Award, number: '95%', label: 'Job Placement' },
    { icon: Globe, number: '25+', label: 'Years Experience' },
    { icon: Star, number: '200+', label: 'Studio Artists' }
  ]

  const partners = [
    'Paramount', 'Disney+', 'Amazon Studios', 'Netflix', 'Lionsgate', 'Warner Bros.'
  ]

  const features = [
    {
      title: 'Direct Industry Pipeline',
      description: 'We operate a major international production house with 200+ professional artists creating world-class content.',
      icon: Award
    },
    {
      title: 'TPN Audited Studio',
      description: 'Our studio is TPN (Trusted Partner Network) Audited - the gold standard for content security demanded by leading studios.',
      icon: Zap
    },
    {
      title: 'Hollywood Experience',
      description: 'Learn from founders with 25+ years at the heart of the global animation and VFX industry.',
      icon: Globe
    },
    {
      title: 'Real-World Training',
      description: 'Bridge the gap between classroom theory and the fast-paced, high-stakes demands of real studio work.',
      icon: Users
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  }

  return (
    <section id="about" className="relative py-20 pt-32 bg-gradient-to-br from-gray-50 to-pink-50 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Large Geometric Shapes */}
        <div className="absolute top-32 right-20 w-64 h-64 bg-pink-400/8 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-pink-300/6 rounded-full blur-3xl"></div>
        
        {/* Industry UI Elements */}
        <div className="absolute top-40 left-16">
          {/* 3D Viewport Panel */}
          <div className="bg-white rounded-xl shadow-lg p-4 transform rotate-12 w-36 h-24">
            <div className="flex items-center space-x-1 mb-2">
              <Monitor className="h-3 w-3 text-pink-500" />
              <span className="text-xs font-medium text-gray-700">3D View</span>
            </div>
            <div className="grid grid-cols-2 gap-1">
              <div className="bg-pink-100 rounded h-3 flex items-center justify-center">
                <div className="w-1 h-1 bg-pink-500 rounded-full"></div>
              </div>
              <div className="bg-gray-100 rounded h-3"></div>
              <div className="bg-gray-100 rounded h-3"></div>
              <div className="bg-pink-50 rounded h-3"></div>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-40 right-24">
          {/* Color Palette Panel */}
          <div className="bg-white rounded-lg shadow-xl p-3 transform -rotate-8 w-28">
            <div className="flex items-center space-x-1 mb-2">
              <Palette className="h-3 w-3 text-pink-600" />
              <span className="text-xs font-medium text-gray-800">Colors</span>
            </div>
            <div className="grid grid-cols-4 gap-1">
              <div className="w-4 h-4 bg-pink-400 rounded"></div>
              <div className="w-4 h-4 bg-pink-300 rounded"></div>
              <div className="w-4 h-4 bg-pink-500 rounded"></div>
              <div className="w-4 h-4 bg-pink-200 rounded"></div>
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
              duration: 20,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className={`absolute top-1/2 left-1/2 ${item.color}`}
          >
            <item.Icon className={item.size} />
          </motion.div>
        ))}
        
        {/* Floating Dots */}
        <div className="absolute top-1/3 right-1/4 w-2 h-2 bg-pink-300 rounded-full animate-pulse"></div>
        <div className="absolute bottom-1/4 left-1/3 w-3 h-3 bg-pink-200 rounded-full animate-bounce"></div>
        <div className="absolute top-2/3 left-1/4 w-2 h-2 bg-pink-400 rounded-full animate-ping"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            About <span className="text-pink-600">ED School</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-8">
            ED School of Animation is more than just an educational institution - we're a direct pipeline to the industry. 
            With 25+ years at the heart of the global animation and VFX industry, we operate a major international production house 
            with 200+ professional artists creating world-class content for leading studios.
          </p>
          
          {/* Industry Partners */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-12"
          >
            <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-6">Trusted by Industry Leaders</p>
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
              {partners.map((partner, index) => (
                <motion.div
                  key={partner}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="text-lg font-semibold text-gray-700 hover:text-pink-600 transition-colors"
                >
                  {partner}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Mission Statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-gradient-to-r from-primary-50 to-accent-50 rounded-3xl p-8 md:p-12 mb-16"
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-4xl font-bold font-display text-gray-900 mb-4">
                Our Mission
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                To empower creative minds with the technical skills, artistic vision, 
                and industry knowledge needed to excel in the rapidly evolving world 
                of animation and digital arts.
              </p>
              <div className="flex items-center space-x-4">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className="w-10 h-10 rounded-full bg-gradient-to-r from-primary-400 to-accent-400 border-2 border-white flex items-center justify-center text-white font-semibold"
                    >
                      {i}
                    </div>
                  ))}
                </div>
                <span className="text-gray-600">500+ Successful Graduates</span>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <div className="text-3xl font-bold text-primary-600">15+</div>
                    <div className="text-base font-semibold text-gray-600">Years Experience</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-accent-600">50+</div>
                    <div className="text-base font-semibold text-gray-600">Industry Partners</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-primary-600">95%</div>
                    <div className="text-base font-semibold text-gray-600">Job Placement</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-accent-600">20+</div>
                    <div className="text-base font-semibold text-gray-600">Expert Faculty</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20"
        >
          {stats.map((stat, index) => {
            const IconComponent = stat.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center group"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-pink-100 rounded-full mb-4 group-hover:bg-pink-200 transition-colors">
                  <IconComponent className="w-8 h-8 text-pink-600" />
                </div>
                <div className="text-4xl md:text-5xl font-bold text-pink-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="card-modern p-8 group"
              >
                <div className="mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-pink-100 to-pink-200 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Icon className="h-8 w-8 text-pink-600" />
                  </div>
                </div>
                <h3 className="text-xl font-bold font-display text-gray-900 mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-pink-500 to-pink-600 rounded-3xl p-8 md:p-12 text-white shadow-2xl">
            <h3 className="text-3xl md:text-4xl font-bold font-display mb-4">
              Ready to Start Your Animation Journey?
            </h3>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join thousands of successful graduates who have launched their careers 
              in animation, gaming, film, and digital media.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                const element = document.querySelector('#courses')
                if (element) element.scrollIntoView({ behavior: 'smooth' })
              }}
              className="btn-primary bg-gradient-to-r from-pink-400 to-pink-500 hover:from-pink-500 hover:to-pink-600 text-white"
            >
              Explore Our Programs
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About