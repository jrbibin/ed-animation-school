import React from 'react'
import { motion } from 'framer-motion'
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Youtube, 
  Linkedin, 
  Mail, 
  Phone, 
  MapPin,
  ArrowRight,
  Heart,
  ExternalLink
} from 'lucide-react'

const Footer = () => {
  const quickLinks = [
    { name: 'About Us', href: '#about' },
    { name: 'Courses', href: '#courses' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Faculty', href: '#faculty' },
    { name: 'Admissions', href: '#admissions' },
    { name: 'Contact', href: '#contact' }
  ]

  const programs = [
    { name: '3D Animation & Modeling', href: '#courses' },
    { name: 'Visual Effects', href: '#courses' },
    { name: '2D Animation & Illustration', href: '#courses' },
    { name: 'Game Art & Design', href: '#courses' },
    { name: 'Motion Graphics', href: '#courses' },
    { name: 'Character Design', href: '#courses' }
  ]

  const resources = [
    { name: 'Student Portal', href: '#', external: true },
    { name: 'Career Services', href: '#', external: true },
    { name: 'Alumni Network', href: '#', external: true },
    { name: 'Industry Partners', href: '#', external: true },
    { name: 'Scholarships', href: '#admissions' },
    { name: 'Campus Life', href: '#' }
  ]

  const socialLinks = [
    { icon: Facebook, href: '#', name: 'Facebook' },
    { icon: Twitter, href: '#', name: 'Twitter' },
    { icon: Instagram, href: '#', name: 'Instagram' },
    { icon: Youtube, href: '#', name: 'YouTube' },
    { icon: Linkedin, href: '#', name: 'LinkedIn' }
  ]

  const achievements = [
    { number: '95%', label: 'Job Placement Rate' },
    { number: '500+', label: 'Industry Partners' },
    { number: '15+', label: 'Years of Excellence' },
    { number: '2000+', label: 'Successful Graduates' }
  ]

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-500 to-accent-500" />
        <div className="absolute inset-0 mesh-bg" />
      </div>

      <div className="relative">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
          {/* Top Section */}
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8 mb-12">
            {/* Brand Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-1"
            >
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-accent-500 rounded-xl flex items-center justify-center">
                  <span className="text-xl font-bold">ED</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold font-display">ED Animation School</h3>
                  <p className="text-gray-400 text-sm">Animate Your Dreams</p>
                </div>
              </div>
              <p className="text-gray-100 mb-6 leading-relaxed">
                Empowering the next generation of animators and digital artists with 
                industry-leading education and cutting-edge technology.
              </p>
              
              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-white">
                  <MapPin className="h-4 w-4 text-primary-400" />
                  <span className="text-sm">Sattur, Virudhunagar, Tamilnadu, Pin- 626203</span>
                </div>
                <div className="flex items-center space-x-3 text-white">
                  <Phone className="h-4 w-4 text-primary-400" />
                  <span className="text-sm">+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-3 text-white">
                  <Mail className="h-4 w-4 text-primary-400" />
                  <span className="text-sm">info@edanimationschool.edu</span>
                </div>
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.6 }}
            >
              <h4 className="text-lg font-bold font-display mb-6 text-white">Quick Links</h4>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <motion.a
                      href={link.href}
                      whileHover={{ x: 5 }}
                      className="text-gray-200 hover:text-primary-400 transition-colors duration-300 flex items-center group"
                    >
                      <ArrowRight className="h-3 w-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                      {link.name}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Programs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <h4 className="text-xl font-bold font-display mb-6 text-white">Programs</h4>
              <ul className="space-y-3">
                {programs.map((program, index) => (
                  <li key={index}>
                    <motion.a
                      href={program.href}
                      whileHover={{ x: 5 }}
                      className="text-gray-200 hover:text-primary-400 transition-colors duration-300 flex items-center group"
                    >
                      <ArrowRight className="h-3 w-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                      {program.name}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Resources */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              <h4 className="text-xl font-bold font-display mb-6 text-white">Resources</h4>
              <ul className="space-y-3">
                {resources.map((resource, index) => (
                  <li key={index}>
                    <motion.a
                      href={resource.href}
                      whileHover={{ x: 5 }}
                      className="text-gray-200 hover:text-primary-400 transition-colors duration-300 flex items-center group"
                    >
                      <ArrowRight className="h-3 w-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                      {resource.name}
                      {resource.external && (
                        <ExternalLink className="h-3 w-3 ml-1 opacity-60" />
                      )}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Achievements Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="border-t border-gray-700 pt-12 mb-12"
          >
            <h4 className="text-2xl font-bold font-display text-center mb-8 text-white">
              Our <span className="gradient-text">Achievements</span>
            </h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  className="text-center"
                >
                  <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">
                    {achievement.number}
                  </div>
                  <div className="text-gray-200 text-sm">{achievement.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Newsletter Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="bg-gradient-to-r from-primary-600/20 to-accent-600/20 backdrop-blur-sm rounded-3xl p-8 mb-12 border border-primary-500/20"
          >
            <div className="text-center max-w-2xl mx-auto">
              <h4 className="text-3xl font-bold font-display mb-4 text-white">
                Stay Updated with ED Animation School
              </h4>
              <p className="text-gray-100 mb-6">
                Get the latest news, course updates, and industry insights delivered to your inbox.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-3 bg-gradient-to-r from-primary-500 to-accent-500 rounded-lg font-semibold hover:from-primary-600 hover:to-accent-600 transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  <span>Subscribe</span>
                  <ArrowRight className="h-4 w-4" />
                </motion.button>
              </div>
            </div>
          </motion.div>

          {/* Social Links & Bottom Section */}
          <div className="border-t border-gray-700 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
              {/* Social Links */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="flex items-center space-x-4"
              >
                <span className="text-gray-200 text-sm mr-2">Follow us:</span>
                {socialLinks.map((social, index) => {
                  const Icon = social.icon
                  return (
                    <motion.a
                      key={index}
                      href={social.href}
                      whileHover={{ scale: 1.2, y: -2 }}
                      whileTap={{ scale: 0.9 }}
                      className="w-10 h-10 bg-white/10 hover:bg-gradient-to-r hover:from-primary-500 hover:to-accent-500 rounded-lg flex items-center justify-center transition-all duration-300 group"
                      aria-label={social.name}
                    >
                      <Icon className="h-4 w-4 text-gray-200 group-hover:text-white transition-colors" />
                    </motion.a>
                  )
                })}
              </motion.div>

              {/* Copyright */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.7, duration: 0.6 }}
                className="flex items-center space-x-2 text-gray-200 text-sm"
              >
                <span>© 2024 ED Animation School. Made with</span>
                <Heart className="h-4 w-4 text-pink-500 fill-current" />
                <span>for aspiring animators.</span>
              </motion.div>
            </div>

            {/* Legal Links */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="flex flex-wrap justify-center md:justify-start space-x-6 mt-6 pt-6 border-t border-gray-700"
            >
              {['Privacy Policy', 'Terms of Service', 'Cookie Policy', 'Accessibility', 'Sitemap'].map((link, index) => (
                <a
                  key={index}
                  href="#"
                  className="text-gray-200 hover:text-primary-400 text-sm transition-colors duration-300"
                >
                  {link}
                </a>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer