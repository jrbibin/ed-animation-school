import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Play, Clock, Users, Award, ChevronRight, Star, Monitor, Gamepad2, Palette, Film, Code } from 'lucide-react'

const Courses = () => {
  const [selectedCourse, setSelectedCourse] = useState(0)
  
  const floatingIcons = [
    { Icon: Monitor, delay: 1, x: -90, y: 70, color: 'text-pink-400/25', size: 'h-6 w-6' },
    { Icon: Gamepad2, delay: 2, x: 110, y: -60, color: 'text-pink-300/30', size: 'h-7 w-7' },
    { Icon: Palette, delay: 3, x: 130, y: 90, color: 'text-pink-500/20', size: 'h-5 w-5' },
    { Icon: Film, delay: 4, x: -110, y: -80, color: 'text-pink-400/30', size: 'h-6 w-6' },
    { Icon: Code, delay: 5, x: 160, y: 50, color: 'text-pink-300/25', size: 'h-6 w-6' }
  ]

  const courses = [
    {
      id: 1,
      title: 'Diploma in 3D Animation',
      duration: '18 months',
      level: 'Professional',
      students: '25 per batch',
      rating: 4.9,
      price: 'Contact for Pricing',
      image: '/api/placeholder/400/300',
      description: 'Master the complete 3D animation pipeline with industry-standard tools and techniques used by major studios.',
      highlights: [
        'Fundamentals of Animation',
        'Character Modeling & Rigging',
        'Lighting & Rendering',
        'Visual Effects Integration',
        'Portfolio Development'
      ],
      software: ['Autodesk Maya', 'Adobe Substance Painter', 'Arnold Renderer', 'ZBrush'],
      career: ['3D Animator', 'Character Artist', 'Technical Artist', 'VFX Artist']
    },
    {
      id: 2,
      title: 'Diploma in Game Design',
      duration: '18 months',
      level: 'Professional',
      students: '20 per batch',
      rating: 4.8,
      price: 'Contact for Pricing',
      image: '/api/placeholder/400/300',
      description: 'Create immersive gaming experiences with cutting-edge game development tools and methodologies.',
      highlights: [
        'Game Mechanics Design',
        'Level Design & Architecture',
        '3D Asset Creation',
        'Interactive Storytelling',
        'Capstone Game Project'
      ],
      software: ['Unreal Engine', 'Autodesk Maya', 'Substance Suite', 'Photoshop'],
      career: ['Game Designer', 'Environment Artist', 'Character Artist', 'Technical Artist']
    },
    {
      id: 3,
      title: 'Compositing Certification',
      duration: '6 months',
      level: 'Advanced',
      students: '15 per batch',
      rating: 4.7,
      price: 'Contact for Pricing',
      image: '/api/placeholder/400/300',
      description: 'Master the art of seamless visual integration and digital compositing for film and television.',
      highlights: [
        'Digital Compositing Techniques',
        'Green Screen & Keying',
        'Color Correction & Grading',
        'Matte Painting Integration',
        'Industry Pipeline Workflow'
      ],
      software: ['Nuke', 'After Effects', 'Photoshop', 'DaVinci Resolve'],
      career: ['VFX Compositor', 'Digital Compositor', 'VFX Artist', 'Post-Production Artist']
    },
    {
      id: 4,
      title: 'Rotomation Certification',
      duration: '6 months',
      level: 'Intermediate',
      students: '18 per batch',
      rating: 4.6,
      price: 'Contact for Pricing',
      image: '/api/placeholder/400/300',
      description: 'Specialize in rotoscoping and animation techniques essential for VFX production.',
      highlights: [
        'Advanced Rotoscoping',
        'Motion Tracking',
        'Digital Paint & Cleanup',
        'Animation Principles',
        'Production Pipeline'
      ],
      software: ['Nuke', 'Mocha Pro', 'After Effects', 'Silhouette'],
       career: ['Rotoscope Artist', 'VFX Artist', 'Digital Cleanup Artist', 'Motion Graphics Artist']
     },
     {
       id: 5,
       title: 'Paint & Prep Certification',
       duration: '6 months',
       level: 'Intermediate',
       students: '15 per batch',
       rating: 4.7,
       price: 'Contact for Pricing',
       image: '/api/placeholder/400/300',
       description: 'Master digital cleanup and preparation techniques for VFX and film production.',
       highlights: [
         'Digital Cleanup Techniques',
         'Wire & Rig Removal',
         'Dust Busting & Restoration',
         'Advanced Paint Tools',
         'Production Workflows'
       ],
       software: ['Nuke', 'Mocha Pro', 'After Effects', 'Photoshop'],
       career: ['Paint & Prep Artist', 'Digital Cleanup Artist', 'VFX Artist', 'Post-Production Specialist']
     },
     {
       id: 6,
       title: 'Match-move Certification',
       duration: '6 months',
       level: 'Advanced',
       students: '12 per batch',
       rating: 4.8,
       price: 'Contact for Pricing',
       image: '/api/placeholder/400/300',
       description: 'Specialize in 3D tracking and camera matching for seamless VFX integration.',
       highlights: [
         '3D Camera Tracking',
         'Object Tracking',
         'Planar Tracking',
         'Lens Distortion Analysis',
         'Pipeline Integration'
       ],
       software: ['Maya', 'Nuke', 'Mocha Pro', 'SynthEyes'],
       career: ['Match-move Artist', '3D Tracking Specialist', 'VFX Technical Artist', 'Pipeline TD']
     },
     {
       id: 7,
       title: 'Editing Certification',
       duration: '6 months',
       level: 'Beginner to Intermediate',
       students: '20 per batch',
       rating: 4.6,
       price: 'Contact for Pricing',
       image: '/api/placeholder/400/300',
       description: 'Master professional video editing and post-production workflows.',
       highlights: [
         'Non-Linear Editing',
         'Color Correction',
         'Audio Post-Production',
         'Motion Graphics Integration',
         'Delivery & Distribution'
       ],
       software: ['Final Cut Pro', 'Avid Media Composer', 'DaVinci Resolve', 'Pro Tools'],
       career: ['Video Editor', 'Post-Production Specialist', 'Colorist', 'Sound Designer']
     },
     {
       id: 8,
       title: 'Generative AI Certification',
       duration: '3 months',
       level: 'All Levels',
       students: '25 per batch',
       rating: 4.9,
       price: 'Contact for Pricing',
       image: '/api/placeholder/400/300',
       description: 'Harness the power of AI tools for creative content generation and workflow optimization.',
       highlights: [
         'Prompt Engineering',
         'AI Image Generation',
         'Creative Pipeline Integration',
         'Ethical AI Usage',
         'Future-Ready Skills'
       ],
       software: ['Midjourney', 'Stable Diffusion', 'ChatGPT', 'RunwayML'],
       career: ['AI Creative Specialist', 'Digital Artist', 'Content Creator', 'Creative Technologist']
     }
   ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  }

  return (
    <section id="courses" className="relative section-padding bg-gradient-to-br from-gray-50 to-pink-50 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Large Geometric Shapes */}
        <div className="absolute top-20 left-16 w-72 h-72 bg-pink-400/6 rounded-full blur-3xl"></div>
        <div className="absolute bottom-32 right-20 w-64 h-64 bg-pink-300/8 rounded-full blur-3xl"></div>
        
        {/* Course-Related UI Elements */}
        <div className="absolute top-32 right-20">
          {/* Game Controller Interface */}
          <div className="bg-white rounded-xl shadow-lg p-4 transform -rotate-6 w-32 h-20">
            <div className="flex items-center space-x-1 mb-2">
              <Gamepad2 className="h-3 w-3 text-pink-500" />
              <span className="text-xs font-medium text-gray-700">Game Dev</span>
            </div>
            <div className="flex space-x-1">
              <div className="w-3 h-3 bg-pink-400 rounded-full"></div>
              <div className="w-3 h-3 bg-pink-300 rounded-full"></div>
              <div className="w-3 h-3 bg-pink-200 rounded-full"></div>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-48 left-24">
          {/* Code Editor Panel */}
          <div className="bg-white rounded-lg shadow-xl p-3 transform rotate-8 w-36 h-24">
            <div className="flex items-center space-x-1 mb-2">
              <Code className="h-3 w-3 text-pink-600" />
              <span className="text-xs font-medium text-gray-800">Script</span>
            </div>
            <div className="space-y-1">
              <div className="w-full h-1 bg-pink-100 rounded"></div>
              <div className="w-3/4 h-1 bg-pink-200 rounded"></div>
              <div className="w-5/6 h-1 bg-pink-100 rounded"></div>
              <div className="w-2/3 h-1 bg-pink-300 rounded"></div>
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
              duration: 22,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className={`absolute top-1/2 left-1/2 ${item.color}`}
          >
            <item.Icon className={item.size} />
          </motion.div>
        ))}
        
        {/* Floating Dots */}
        <div className="absolute top-1/4 left-1/3 w-2 h-2 bg-pink-400 rounded-full animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/4 w-3 h-3 bg-pink-300 rounded-full animate-bounce"></div>
        <div className="absolute top-3/4 right-1/3 w-2 h-2 bg-pink-200 rounded-full animate-ping"></div>
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
            Our <span className="gradient-text">Courses</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Choose from our comprehensive range of animation and digital arts programs, 
            designed to take you from beginner to industry professional.
          </p>
        </motion.div>

        {/* Course Navigation */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {courses.map((course, index) => (
            <motion.button
              key={course.id}
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedCourse(index)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                selectedCourse === index
                  ? 'bg-gradient-to-r from-pink-500 to-pink-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              {course.title}
            </motion.button>
          ))}
        </motion.div>

        {/* Course Details */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedCourse}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-3xl shadow-xl overflow-hidden"
          >
            <div className="grid lg:grid-cols-2 gap-0">
              {/* Course Image */}
              <div className="relative h-64 lg:h-full bg-gradient-to-br from-pink-400 to-pink-500">
                <div className="absolute inset-0 flex items-center justify-center">
                  <Play className="h-20 w-20 text-white opacity-80" fill="currentColor" />
                </div>
                <div className="absolute top-4 left-4">
                  <span className="bg-white/20 backdrop-blur-md text-white px-3 py-1 rounded-full text-sm font-medium">
                    Featured Course
                  </span>
                </div>
              </div>

              {/* Course Info */}
              <div className="p-8 lg:p-12">
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-3xl font-bold font-display text-gray-900">
                      {courses[selectedCourse].title}
                    </h3>
                    <div className="flex items-center space-x-1">
                      <Star className="h-5 w-5 text-yellow-400" fill="currentColor" />
                      <span className="font-semibold text-gray-700">
                        {courses[selectedCourse].rating}
                      </span>
                    </div>
                  </div>
                  <p className="text-lg text-gray-600 leading-relaxed mb-6">
                    {courses[selectedCourse].description}
                  </p>
                </div>

                {/* Course Stats */}
                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="flex items-center space-x-3">
                    <Clock className="h-5 w-5 text-pink-600" />
                    <div>
                      <div className="font-semibold text-gray-900">{courses[selectedCourse].duration}</div>
                      <div className="text-sm text-gray-600">Duration</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Users className="h-5 w-5 text-pink-600" />
                    <div>
                      <div className="font-semibold text-gray-900">{courses[selectedCourse].students}</div>
                      <div className="text-sm text-gray-600">Class Size</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Award className="h-5 w-5 text-pink-600" />
                    <div>
                      <div className="font-semibold text-gray-900">{courses[selectedCourse].level}</div>
                      <div className="text-sm text-gray-600">Level</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-5 h-5 bg-gradient-to-r from-pink-500 to-pink-600 rounded-full"></div>
                    <div>
                      <div className="font-semibold text-gray-900">{courses[selectedCourse].price}</div>
                      <div className="text-sm text-gray-600">Total Fee</div>
                    </div>
                  </div>
                </div>

                {/* Course Highlights */}
                <div className="mb-8">
                  <h4 className="font-bold text-gray-900 mb-4">What You'll Learn:</h4>
                  <div className="space-y-2">
                    {courses[selectedCourse].highlights.map((highlight, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <ChevronRight className="h-4 w-4 text-pink-600" />
                        <span className="text-gray-700">{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Software & Career */}
                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div>
                    <h4 className="font-bold text-gray-900 mb-3">Software:</h4>
                    <div className="flex flex-wrap gap-2">
                      {courses[selectedCourse].software.map((software, index) => (
                        <span
                          key={index}
                          className="bg-pink-100 text-pink-700 px-3 py-1 rounded-full text-sm font-medium"
                        >
                          {software}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-3">Career Paths:</h4>
                    <div className="flex flex-wrap gap-2">
                      {courses[selectedCourse].career.map((career, index) => (
                        <span
                          key={index}
                          className="bg-pink-100 text-pink-700 px-3 py-1 rounded-full text-sm font-medium"
                        >
                          {career}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="btn-primary flex-1"
                  >
                    Enroll Now
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="btn-outline flex-1"
                  >
                    Download Brochure
                  </motion.button>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}

export default Courses