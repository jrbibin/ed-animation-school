import React from 'react'
import { motion } from 'framer-motion'
import { Award, Briefcase, GraduationCap, Star, Linkedin, Twitter, Globe, Users, BookOpen, Trophy, Target } from 'lucide-react'

const Faculty = () => {
  const floatingIcons = [
    { Icon: Users, delay: 1.5, x: -85, y: 65, color: 'text-pink-400/25', size: 'h-6 w-6' },
    { Icon: BookOpen, delay: 2.5, x: 105, y: -75, color: 'text-pink-300/30', size: 'h-5 w-5' },
    { Icon: Trophy, delay: 3.5, x: 125, y: 85, color: 'text-pink-500/20', size: 'h-6 w-6' },
    { Icon: Target, delay: 4.5, x: -105, y: -95, color: 'text-pink-400/30', size: 'h-6 w-6' },
    { Icon: Award, delay: 5.5, x: 155, y: 45, color: 'text-pink-300/25', size: 'h-6 w-6' }
  ]
  
  const faculty = [
    {
      id: 1,
      name: 'Dr. Michael Chen',
      title: 'Head of 3D Animation',
      experience: '15+ Years',
      education: 'PhD in Computer Graphics, MIT',
      image: '/api/placeholder/300/300',
      bio: 'Former Lead Animator at Pixar and DreamWorks. Specialized in character animation and facial rigging systems.',
      expertise: ['Character Animation', 'Facial Rigging', 'Maya Pipeline'],
      achievements: [
        'Academy Award for Technical Achievement',
        'Lead Animator on 5 Oscar-winning films',
        'Published 20+ research papers'
      ],
      companies: ['Pixar', 'DreamWorks', 'Industrial Light & Magic'],
      social: {
        linkedin: '#',
        twitter: '#',
        website: '#'
      }
    },
    {
      id: 2,
      name: 'Sarah Rodriguez',
      title: 'VFX Supervisor',
      experience: '12+ Years',
      education: 'MFA in Visual Effects, USC',
      image: '/api/placeholder/300/300',
      bio: 'Award-winning VFX Supervisor with credits on major blockbuster films. Expert in photorealistic rendering and compositing.',
      expertise: ['Visual Effects', 'Compositing', 'Digital Environments'],
      achievements: [
        'VES Award for Outstanding Visual Effects',
        'Supervised VFX for 15+ major films',
        'Guest speaker at SIGGRAPH'
      ],
      companies: ['Marvel Studios', 'Warner Bros', 'Sony Pictures'],
      social: {
        linkedin: '#',
        twitter: '#',
        website: '#'
      }
    },
    {
      id: 3,
      name: 'Hiroshi Tanaka',
      title: 'Traditional Animation Master',
      experience: '20+ Years',
      education: 'BFA in Animation, Tokyo University of Arts',
      image: '/api/placeholder/300/300',
      bio: 'Legendary animator from Studio Ghibli. Master of traditional 2D animation techniques and storytelling.',
      expertise: ['2D Animation', 'Character Design', 'Storyboarding'],
      achievements: [
        'Annie Award for Best Character Animation',
        'Key Animator on 8 Studio Ghibli films',
        'Animation mentor to 200+ students'
      ],
      companies: ['Studio Ghibli', 'Toei Animation', 'Madhouse'],
      social: {
        linkedin: '#',
        twitter: '#',
        website: '#'
      }
    },
    {
      id: 4,
      name: 'Emma Thompson',
      title: 'Game Art Director',
      experience: '10+ Years',
      education: 'MS in Game Design, DigiPen',
      image: '/api/placeholder/300/300',
      bio: 'Creative director behind award-winning indie games. Specializes in stylized art and innovative game mechanics.',
      expertise: ['Game Art', 'Concept Design', 'Art Direction'],
      achievements: [
        'Independent Games Festival Winner',
        'Art Director for 5 award-winning games',
        'Featured in Game Developer Magazine'
      ],
      companies: ['Naughty Dog', 'Insomniac Games', 'Indie Studios'],
      social: {
        linkedin: '#',
        twitter: '#',
        website: '#'
      }
    },
    {
      id: 5,
      name: 'David Kumar',
      title: 'Technical Director',
      experience: '18+ Years',
      education: 'PhD in Computer Science, Stanford',
      image: '/api/placeholder/300/300',
      bio: 'Pioneer in real-time rendering and animation technology. Former R&D lead at major animation studios.',
      expertise: ['Technical Animation', 'Pipeline Development', 'Shader Programming'],
      achievements: [
        'Technical Emmy Award',
        'Developed industry-standard tools',
        '50+ patents in computer graphics'
      ],
      companies: ['Pixar', 'NVIDIA', 'Epic Games'],
      social: {
        linkedin: '#',
        twitter: '#',
        website: '#'
      }
    },
    {
      id: 6,
      name: 'Lisa Park',
      title: 'Motion Graphics Lead',
      experience: '8+ Years',
      education: 'MFA in Motion Design, SCAD',
      image: '/api/placeholder/300/300',
      bio: 'Creative force behind viral motion graphics campaigns. Expert in brand animation and digital storytelling.',
      expertise: ['Motion Graphics', 'Brand Animation', 'After Effects'],
      achievements: [
        'Cannes Lions Gold Winner',
        'Creative lead for Fortune 500 brands',
        'Motion design workshop instructor'
      ],
      companies: ['Nike', 'Apple', 'Google Creative Lab'],
      social: {
        linkedin: '#',
        twitter: '#',
        website: '#'
      }
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
    <section id="faculty" className="relative section-padding bg-gradient-to-br from-gray-50 to-pink-50 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Large Geometric Shapes */}
        <div className="absolute top-32 left-24 w-80 h-80 bg-pink-400/6 rounded-full blur-3xl"></div>
        <div className="absolute bottom-28 right-24 w-72 h-72 bg-pink-300/8 rounded-full blur-3xl"></div>
        
        {/* Faculty-Related UI Elements */}
        <div className="absolute top-44 right-28">
          {/* Faculty Profile Card */}
          <div className="bg-white rounded-xl shadow-lg p-4 transform -rotate-6 w-40 h-24">
            <div className="flex items-center space-x-1 mb-2">
              <GraduationCap className="h-3 w-3 text-pink-500" />
              <span className="text-xs font-medium text-gray-700">Faculty</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-pink-100 rounded-full flex items-center justify-center">
                <Users className="h-4 w-4 text-pink-600" />
              </div>
              <div className="flex-1">
                <div className="w-full h-1 bg-pink-200 rounded mb-1"></div>
                <div className="w-3/4 h-1 bg-pink-300 rounded"></div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-56 left-32">
          {/* Achievement Badge */}
          <div className="bg-white rounded-lg shadow-xl p-3 transform rotate-8 w-36 h-20">
            <div className="flex items-center space-x-1 mb-2">
              <Trophy className="h-3 w-3 text-pink-600" />
              <span className="text-xs font-medium text-gray-800">Awards</span>
            </div>
            <div className="space-y-1">
              <div className="flex items-center space-x-1">
                <Star className="h-2 w-2 text-yellow-500" />
                <div className="w-full h-1 bg-pink-200 rounded"></div>
              </div>
              <div className="flex items-center space-x-1">
                <Star className="h-2 w-2 text-yellow-500" />
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
              duration: 28,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className={`absolute top-1/2 left-1/2 ${item.color}`}
          >
            <item.Icon className={item.size} />
          </motion.div>
        ))}
        
        {/* Floating Dots */}
        <div className="absolute top-1/5 left-1/5 w-2 h-2 bg-pink-400 rounded-full animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-3 h-3 bg-pink-300 rounded-full animate-bounce"></div>
        <div className="absolute top-4/5 right-1/5 w-2 h-2 bg-pink-200 rounded-full animate-ping"></div>
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
            Meet Our <span className="gradient-text">Expert Faculty</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Learn from industry legends and award-winning professionals who have shaped 
            the animation and digital arts landscape.
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16"
        >
          {[
            { number: '20+', label: 'Expert Instructors', icon: GraduationCap },
            { number: '200+', label: 'Years Combined Experience', icon: Briefcase },
            { number: '50+', label: 'Industry Awards', icon: Award },
            { number: '15+', label: 'Major Studios Represented', icon: Star }
          ].map((stat, index) => {
            const Icon = stat.icon
            return (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-pink-100 to-pink-200 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Icon className="h-8 w-8 text-pink-600" />
                </div>
                <div className="text-3xl font-bold font-display text-gray-900 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            )
          })}
        </motion.div>

        {/* Faculty Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {faculty.map((member) => (
            <motion.div
              key={member.id}
              variants={itemVariants}
              className="card-glass p-8 group"
            >
              {/* Profile Image */}
              <div className="relative mb-6">
                <div className="w-24 h-24 bg-gradient-to-r from-pink-400 to-pink-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center">
                    <span className="text-2xl font-bold text-gray-700">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                </div>
                <div className="absolute top-0 right-1/2 transform translate-x-12">
                  <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center">
                    <Star className="h-4 w-4 text-yellow-800" fill="currentColor" />
                  </div>
                </div>
              </div>

              {/* Basic Info */}
              <div className="text-center mb-6">
                <h3 className="text-xl font-bold font-display text-gray-900 mb-1">
                  {member.name}
                </h3>
                <p className="text-pink-600 font-semibold mb-2">{member.title}</p>
                <p className="text-sm text-gray-600">{member.experience} • {member.education}</p>
              </div>

              {/* Bio */}
              <p className="text-gray-600 text-sm leading-relaxed mb-6">
                {member.bio}
              </p>

              {/* Expertise */}
              <div className="mb-6">
                <h4 className="font-semibold text-gray-900 mb-3">Expertise:</h4>
                <div className="flex flex-wrap gap-2">
                  {member.expertise.map((skill, index) => (
                    <span
                      key={index}
                      className="bg-pink-100 text-pink-700 px-2 py-1 rounded text-xs font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Companies */}
              <div className="mb-6">
                <h4 className="font-semibold text-gray-900 mb-3">Previous Companies:</h4>
                <div className="flex flex-wrap gap-2">
                  {member.companies.map((company, index) => (
                    <span
                      key={index}
                      className="bg-pink-100 text-pink-700 px-2 py-1 rounded text-xs font-medium"
                    >
                      {company}
                    </span>
                  ))}
                </div>
              </div>

              {/* Achievements */}
              <div className="mb-6">
                <h4 className="font-semibold text-gray-900 mb-3">Key Achievements:</h4>
                <div className="space-y-2">
                  {member.achievements.slice(0, 2).map((achievement, index) => (
                    <div key={index} className="flex items-start space-x-2">
                      <Award className="h-3 w-3 text-yellow-500 mt-1 flex-shrink-0" fill="currentColor" />
                      <span className="text-xs text-gray-600">{achievement}</span>
                    </div>
                  ))}
                  {member.achievements.length > 2 && (
                    <span className="text-xs text-gray-500">+{member.achievements.length - 2} more achievements</span>
                  )}
                </div>
              </div>

              {/* Social Links */}
              <div className="flex justify-center space-x-4 pt-4 border-t border-gray-100">
                <motion.a
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  href={member.social.linkedin}
                  className="w-8 h-8 bg-pink-100 hover:bg-pink-200 rounded-full flex items-center justify-center transition-colors"
                >
                  <Linkedin className="h-4 w-4 text-pink-600" />
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  href={member.social.twitter}
                  className="w-8 h-8 bg-sky-100 hover:bg-sky-200 rounded-full flex items-center justify-center transition-colors"
                >
                  <Twitter className="h-4 w-4 text-sky-600" />
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  href={member.social.website}
                  className="w-8 h-8 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors"
                >
                  <Globe className="h-4 w-4 text-gray-600" />
                </motion.a>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Join Faculty CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mt-16"
        >
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-lg border border-gray-100">
            <h3 className="text-3xl md:text-4xl font-bold font-display text-gray-900 mb-4">
              Interested in Teaching with Us?
            </h3>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              We're always looking for passionate industry professionals to join our faculty 
              and share their expertise with the next generation of artists.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary"
              >
                Join Our Faculty
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-outline"
              >
                Guest Lecture Opportunities
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Faculty