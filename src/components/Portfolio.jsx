import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Play, ExternalLink, Award, Eye, Heart, Share2, Camera, Film, Layers, Sparkles, Image } from 'lucide-react'

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [selectedProject, setSelectedProject] = useState(null)
  
  const floatingIcons = [
    { Icon: Camera, delay: 0.8, x: -85, y: 65, color: 'text-pink-400/25', size: 'h-6 w-6' },
    { Icon: Film, delay: 1.8, x: 105, y: -55, color: 'text-pink-300/30', size: 'h-7 w-7' },
    { Icon: Layers, delay: 2.8, x: 125, y: 85, color: 'text-pink-500/20', size: 'h-5 w-5' },
    { Icon: Sparkles, delay: 3.8, x: -105, y: -75, color: 'text-pink-400/30', size: 'h-6 w-6' },
    { Icon: Image, delay: 4.8, x: 155, y: 45, color: 'text-pink-300/25', size: 'h-6 w-6' }
  ]

  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: '3d', name: '3D Animation' },
    { id: 'vfx', name: 'Visual Effects' },
    { id: '2d', name: '2D Animation' },
    { id: 'games', name: 'Game Art' }
  ]

  const projects = [
    {
      id: 1,
      title: 'Mystic Forest Adventure',
      category: '3d',
      student: 'Sarah Chen',
      year: '2023',
      duration: '2:30',
      views: '125K',
      likes: '8.2K',
      description: 'A magical journey through an enchanted forest featuring advanced character animation and environmental storytelling.',
      awards: ['Best Student Film 2023', 'Animation Excellence Award'],
      image: '/api/placeholder/600/400',
      tags: ['Character Animation', 'Environment Design', 'Lighting']
    },
    {
      id: 2,
      title: 'Cyberpunk City Chase',
      category: 'vfx',
      student: 'Marcus Rodriguez',
      year: '2023',
      duration: '1:45',
      views: '89K',
      likes: '6.1K',
      description: 'High-octane chase sequence with complex particle effects, dynamic lighting, and seamless compositing.',
      awards: ['VFX Innovation Award'],
      image: '/api/placeholder/600/400',
      tags: ['Particle Effects', 'Compositing', 'Motion Graphics']
    },
    {
      id: 3,
      title: 'The Last Samurai',
      category: '2d',
      student: 'Yuki Tanaka',
      year: '2023',
      duration: '3:15',
      views: '156K',
      likes: '12.3K',
      description: 'Traditional 2D animation telling the story of honor and sacrifice with beautiful hand-drawn artistry.',
      awards: ['Traditional Animation Excellence', 'Storytelling Award'],
      image: '/api/placeholder/600/400',
      tags: ['Traditional Animation', 'Character Design', 'Storyboarding']
    },
    {
      id: 4,
      title: 'Neon Warrior Game Assets',
      category: 'games',
      student: 'Alex Thompson',
      year: '2023',
      duration: 'Interactive',
      views: '67K',
      likes: '4.8K',
      description: 'Complete game character and environment package for a futuristic action game.',
      awards: ['Game Art Excellence'],
      image: '/api/placeholder/600/400',
      tags: ['Game Assets', 'Character Modeling', 'Texturing']
    },
    {
      id: 5,
      title: 'Ocean Depths',
      category: '3d',
      student: 'Emma Wilson',
      year: '2023',
      duration: '2:00',
      views: '98K',
      likes: '7.5K',
      description: 'Underwater adventure showcasing advanced fluid simulation and marine life animation.',
      awards: ['Technical Achievement Award'],
      image: '/api/placeholder/600/400',
      tags: ['Fluid Simulation', 'Marine Animation', 'Underwater VFX']
    },
    {
      id: 6,
      title: 'Time Fracture',
      category: 'vfx',
      student: 'David Kim',
      year: '2023',
      duration: '1:20',
      views: '134K',
      likes: '9.7K',
      description: 'Mind-bending visual effects exploring time manipulation with innovative compositing techniques.',
      awards: ['Creative Innovation Award'],
      image: '/api/placeholder/600/400',
      tags: ['Time Effects', 'Advanced Compositing', 'Motion Design']
    }
  ]

  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory)

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
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5
      }
    }
  }

  return (
    <section id="portfolio" className="relative section-padding bg-gradient-to-br from-gray-50 to-pink-50 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Large Geometric Shapes */}
        <div className="absolute top-24 right-16 w-80 h-80 bg-pink-400/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-16 w-72 h-72 bg-pink-300/7 rounded-full blur-3xl"></div>
        
        {/* Portfolio-Related UI Elements */}
        <div className="absolute top-36 left-20">
          {/* Media Player Interface */}
          <div className="bg-white rounded-xl shadow-lg p-4 transform rotate-6 w-40 h-24">
            <div className="flex items-center space-x-1 mb-2">
              <Film className="h-3 w-3 text-pink-500" />
              <span className="text-xs font-medium text-gray-700">Media Player</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-6 h-4 bg-pink-100 rounded flex items-center justify-center">
                <Play className="h-2 w-2 text-pink-600" fill="currentColor" />
              </div>
              <div className="flex-1 h-1 bg-gray-200 rounded">
                <div className="w-1/3 h-full bg-pink-400 rounded"></div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-44 right-28">
          {/* Image Gallery Panel */}
          <div className="bg-white rounded-lg shadow-xl p-3 transform -rotate-12 w-32 h-20">
            <div className="flex items-center space-x-1 mb-2">
              <Image className="h-3 w-3 text-pink-600" />
              <span className="text-xs font-medium text-gray-800">Gallery</span>
            </div>
            <div className="grid grid-cols-3 gap-1">
              <div className="w-4 h-3 bg-pink-200 rounded"></div>
              <div className="w-4 h-3 bg-pink-300 rounded"></div>
              <div className="w-4 h-3 bg-pink-100 rounded"></div>
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
              duration: 24,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className={`absolute top-1/2 left-1/2 ${item.color}`}
          >
            <item.Icon className={item.size} />
          </motion.div>
        ))}
        
        {/* Floating Dots */}
        <div className="absolute top-1/5 right-1/3 w-2 h-2 bg-pink-400 rounded-full animate-pulse"></div>
        <div className="absolute bottom-1/4 left-1/4 w-3 h-3 bg-pink-300 rounded-full animate-bounce"></div>
        <div className="absolute top-4/5 left-1/3 w-2 h-2 bg-pink-200 rounded-full animate-ping"></div>
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
            Student <span className="gradient-text">Portfolio</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover the incredible work created by our talented students and graduates. 
            These projects showcase the skills and creativity developed through our programs.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                selectedCategory === category.id
                  ? 'bg-gradient-to-r from-pink-500 to-pink-600 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category.name}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                layout
                className="card-glass group cursor-pointer overflow-hidden"
                onClick={() => setSelectedProject(project)}
              >
                {/* Project Image */}
                <div className="relative h-48 bg-gradient-to-br from-pink-400 to-pink-500 overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Play className="h-12 w-12 text-white opacity-80 group-hover:scale-110 transition-transform duration-300" fill="currentColor" />
                  </div>
                  <div className="absolute top-4 left-4">
                    <span className="bg-white/20 backdrop-blur-md text-white px-2 py-1 rounded text-sm font-medium">
                      {project.duration}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4 flex space-x-2">
                    {project.awards.length > 0 && (
                      <Award className="h-5 w-5 text-yellow-400" fill="currentColor" />
                    )}
                  </div>
                </div>

                {/* Project Info */}
                <div className="p-6">
                  <h3 className="text-xl font-bold font-display text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-2">
                    {project.description}
                  </p>
                  
                  {/* Student Info */}
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <div className="font-semibold text-gray-900">{project.student}</div>
                      <div className="text-sm text-gray-500">Class of {project.year}</div>
                    </div>
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <div className="flex items-center space-x-1">
                        <Eye className="h-4 w-4" />
                        <span>{project.views}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Heart className="h-4 w-4" />
                        <span>{project.likes}</span>
                      </div>
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.slice(0, 2).map((tag, index) => (
                      <span
                        key={index}
                        className="bg-primary-100 text-primary-700 px-2 py-1 rounded text-xs font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 2 && (
                      <span className="text-xs text-gray-500">+{project.tags.length - 2} more</span>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Project Modal */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="p-8">
                  {/* Modal Header */}
                  <div className="flex items-start justify-between mb-6">
                    <div>
                      <h3 className="text-3xl font-bold font-display text-gray-900 mb-2">
                        {selectedProject.title}
                      </h3>
                      <p className="text-lg text-gray-600">
                        By {selectedProject.student} • Class of {selectedProject.year}
                      </p>
                    </div>
                    <button
                      onClick={() => setSelectedProject(null)}
                      className="text-gray-400 hover:text-gray-600 text-2xl font-bold"
                    >
                      ×
                    </button>
                  </div>

                  {/* Project Video/Image */}
                  <div className="relative h-64 md:h-96 bg-gradient-to-br from-primary-400 to-accent-500 rounded-xl mb-6 flex items-center justify-center">
                    <Play className="h-20 w-20 text-white opacity-80" fill="currentColor" />
                  </div>

                  {/* Project Details */}
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="font-bold text-gray-900 mb-4">Description</h4>
                      <p className="text-gray-600 leading-relaxed mb-6">
                        {selectedProject.description}
                      </p>
                      
                      {selectedProject.awards.length > 0 && (
                        <div>
                          <h4 className="font-bold text-gray-900 mb-4">Awards & Recognition</h4>
                          <div className="space-y-2">
                            {selectedProject.awards.map((award, index) => (
                              <div key={index} className="flex items-center space-x-2">
                                <Award className="h-4 w-4 text-yellow-500" fill="currentColor" />
                                <span className="text-gray-700">{award}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                    
                    <div>
                      <h4 className="font-bold text-gray-900 mb-4">Project Stats</h4>
                      <div className="space-y-4 mb-6">
                        <div className="flex justify-between">
                          <span className="text-gray-600">Duration:</span>
                          <span className="font-semibold">{selectedProject.duration}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Views:</span>
                          <span className="font-semibold">{selectedProject.views}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Likes:</span>
                          <span className="font-semibold">{selectedProject.likes}</span>
                        </div>
                      </div>
                      
                      <h4 className="font-bold text-gray-900 mb-4">Techniques Used</h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedProject.tags.map((tag, index) => (
                          <span
                            key={index}
                            className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-sm font-medium"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-wrap gap-4 mt-8">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="btn-primary flex items-center space-x-2"
                    >
                      <Play className="h-4 w-4" />
                      <span>Watch Full Project</span>
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="btn-outline flex items-center space-x-2"
                    >
                      <ExternalLink className="h-4 w-4" />
                      <span>View on Behance</span>
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="btn-outline flex items-center space-x-2"
                    >
                      <Share2 className="h-4 w-4" />
                      <span>Share</span>
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-primary-600 to-accent-600 rounded-3xl p-8 md:p-12 text-white">
            <h3 className="text-3xl md:text-4xl font-bold font-display mb-4">
              Ready to Create Your Masterpiece?
            </h3>
            <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
              Join our community of talented artists and bring your creative vision to life.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                const element = document.querySelector('#admissions')
                if (element) element.scrollIntoView({ behavior: 'smooth' })
              }}
              className="bg-white text-primary-600 hover:bg-gray-100 font-bold py-4 px-8 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Start Your Journey
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Portfolio