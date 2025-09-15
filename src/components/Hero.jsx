import React from 'react'
import { motion } from 'framer-motion'
import { Play, ArrowRight, Star, Zap, Palette, Film, Layers, Clapperboard } from 'lucide-react'

const Hero = () => {
  const scrollToSection = (href) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const floatingIcons = [
    { Icon: Film, delay: 0.5, x: -100, y: 90, color: 'text-pink-500/40', size: 'h-7 w-7' },
    { Icon: Palette, delay: 1, x: 140, y: -70, color: 'text-pink-400/40', size: 'h-6 w-6' },
    { Icon: Layers, delay: 2, x: 180, y: 120, color: 'text-pink-300/40', size: 'h-7 w-7' },
    { Icon: Clapperboard, delay: 4, x: 160, y: -100, color: 'text-pink-500/35', size: 'h-8 w-8' },
    { Icon: Star, delay: 0, x: 120, y: 60, color: 'text-pink-400/40', size: 'h-8 w-8' },
    { Icon: Zap, delay: 3, x: 200, y: -30, color: 'text-pink-400/35', size: 'h-7 w-7' }
  ]

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-50 to-pink-50 pt-24">
      {/* Slack-Inspired Background Elements */}
       <div className="absolute inset-0 overflow-hidden">
         {/* Large Geometric Shapes */}
         <div className="absolute top-20 right-10 w-80 h-80 bg-pink-500/10 rounded-full blur-3xl"></div>
         <div className="absolute bottom-10 left-10 w-96 h-96 bg-pink-400/8 rounded-full blur-3xl"></div>
         
         {/* Colorful UI Elements */}

         
         <div className="absolute bottom-32 right-32">
           {/* VFX Layers Panel */}
           <div className="bg-white rounded-xl shadow-xl p-4 transform -rotate-6 w-32">
             <div className="flex items-center space-x-1 mb-3">
               <Layers className="h-3 w-3 text-pink-500" />
               <span className="text-xs font-medium text-gray-700">Layers</span>
             </div>
             <div className="space-y-2">
               <div className="flex items-center space-x-2">
                 <div className="w-2 h-2 bg-pink-500 rounded"></div>
                 <div className="w-12 h-1.5 bg-gray-200 rounded"></div>
               </div>
               <div className="flex items-center space-x-2">
                 <div className="w-2 h-2 bg-pink-400 rounded"></div>
                 <div className="w-10 h-1.5 bg-gray-200 rounded"></div>
               </div>
               <div className="flex items-center space-x-2">
                 <div className="w-2 h-2 bg-pink-300 rounded"></div>
                 <div className="w-14 h-1.5 bg-gray-200 rounded"></div>
               </div>
             </div>
           </div>
         </div>
         

         

         

         
         <div className="absolute bottom-20 left-32">
           {/* Chart/Graph */}
           <div className="bg-white rounded-lg shadow-lg p-3 transform rotate-6 w-24 h-16">
             <div className="flex items-end justify-between h-full">
               <div className="w-2 bg-pink-400 rounded-t" style={{height: '60%'}}></div>
               <div className="w-2 bg-pink-500 rounded-t" style={{height: '80%'}}></div>
               <div className="w-2 bg-pink-300 rounded-t" style={{height: '40%'}}></div>
               <div className="w-2 bg-pink-600 rounded-t" style={{height: '90%'}}></div>
             </div>
           </div>
         </div>
         


         <div className="absolute bottom-20 left-20">
           {/* Storyboard Panel */}
           <div className="bg-white rounded-xl p-3 shadow-xl transform rotate-6 w-44 h-32">
             <div className="flex items-center space-x-1 mb-2">
               <Clapperboard className="h-3 w-3 text-pink-600" />
               <div className="text-xs text-gray-800 font-medium">Storyboard</div>
             </div>
             <div className="grid grid-cols-3 gap-1">
               <div className="bg-gray-200 rounded aspect-square flex items-center justify-center">
                 <div className="w-2 h-2 bg-pink-400 rounded-full"></div>
               </div>
               <div className="bg-gray-200 rounded aspect-square flex items-center justify-center">
                 <div className="w-3 h-1 bg-pink-500 rounded"></div>
               </div>
               <div className="bg-gray-200 rounded aspect-square flex items-center justify-center">
                 <div className="w-2 h-2 bg-pink-600 rounded"></div>
               </div>
               <div className="bg-gray-200 rounded aspect-square flex items-center justify-center">
                 <div className="w-1 h-3 bg-pink-400 rounded"></div>
               </div>
               <div className="bg-pink-100 rounded aspect-square flex items-center justify-center">
                 <Play className="h-2 w-2 text-pink-600" />
               </div>
               <div className="bg-gray-200 rounded aspect-square flex items-center justify-center">
                 <div className="w-2 h-1 bg-pink-500 rounded"></div>
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
             duration: 25,
             repeat: Infinity,
             ease: "easeInOut"
           }}
           className={`absolute top-1/2 left-1/2 ${item.color}`}
         >
           <item.Icon className={item.size} />
         </motion.div>
       ))}



         {/* Floating Dots */}
         <div className="absolute top-1/4 right-1/3 w-3 h-3 bg-pink-400 rounded-full animate-pulse"></div>
         <div className="absolute bottom-1/3 left-1/4 w-2 h-2 bg-pink-300 rounded-full animate-bounce"></div>
         <div className="absolute top-2/3 right-1/4 w-4 h-4 bg-pink-200 rounded-full animate-ping"></div>
         <div className="absolute top-1/2 left-1/3 w-2 h-2 bg-pink-500 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
         <div className="absolute bottom-1/4 right-1/2 w-3 h-3 bg-pink-300 rounded-full animate-bounce" style={{animationDelay: '0.5s'}}></div>
       </div>
      
      {/* Simple Decorative Elements */}


      {/* Main Content */}
       <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
         {/* Clean Layout without Card */}
         <div className="py-8 md:py-12 lg:py-16">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Badge */}
             <motion.div
               initial={{ opacity: 0, scale: 0.8 }}
               animate={{ opacity: 1, scale: 1 }}
               transition={{ delay: 0.2, duration: 0.6 }}
               className="inline-flex items-center space-x-2 bg-pink-500 text-white rounded-full px-6 py-3 shadow-lg"
             >
               <Star className="h-5 w-5 text-white" fill="currentColor" />
               <span className="font-bold text-lg">TPN Audited Studio • 25+ Years Industry Experience</span>
             </motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-5xl md:text-7xl lg:text-8xl font-bold font-display text-gray-800 leading-tight"
            >
              Your Direct Pipeline to
              <span className="block bg-gradient-to-r from-pink-500 to-pink-600 bg-clip-text text-transparent">
                 Hollywood Studios
               </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto leading-relaxed"
            >
              Learn from founders with 25+ years at the heart of the global animation industry. 
              Train in our TPN-audited production house with 200+ professional artists creating content for Paramount, Disney+, Netflix, and more.
            </motion.p>
            
            {/* Feature Highlights */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-6"
            >
              <div className="flex items-center justify-center space-x-2 text-gray-600">
                <div className="w-3 h-3 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full"></div>
                <span className="font-bold text-lg">Industry Veterans</span>
              </div>
              <div className="flex items-center justify-center space-x-2 text-gray-600">
                <div className="w-3 h-3 bg-gradient-to-r from-pink-400 to-pink-500 rounded-full"></div>
                <span className="font-bold text-lg">Real Studio Projects</span>
              </div>
              <div className="flex items-center justify-center space-x-2 text-gray-600">
                <div className="w-3 h-3 bg-gradient-to-r from-pink-400 to-pink-600 rounded-full"></div>
                <span className="font-bold text-lg">Career Placement</span>
              </div>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="flex flex-wrap justify-center gap-8 text-gray-700"
            >
              {[
                { number: '200+', label: 'Professional Artists' },
                { number: '25+', label: 'Years Experience' },
                { number: '95%', label: 'Job Placement' },
                { number: '15+', label: 'Industry Awards' }
              ].map((stat, index) => (
                <div key={index} className="text-center">
                   <div className="text-3xl md:text-4xl font-bold font-display bg-gradient-to-r from-pink-500 to-pink-600 bg-clip-text text-transparent">{stat.number}</div>
                   <div className="text-gray-600 font-semibold text-lg">{stat.label}</div>
                 </div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <motion.button
                 whileHover={{ scale: 1.05 }}
                 whileTap={{ scale: 0.95 }}
                 onClick={() => scrollToSection('#courses')}
                 className="group bg-pink-500 hover:bg-pink-600 text-white font-bold py-4 px-8 rounded-full transition-all duration-300 shadow-xl hover:shadow-pink-500/30 flex items-center space-x-2"
               >
                 <span>Explore Courses</span>
                 <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
               </motion.button>
               
               <motion.button
                 whileHover={{ scale: 1.05 }}
                 whileTap={{ scale: 0.95 }}
                 onClick={() => scrollToSection('#portfolio')}
                 className="group border-2 border-pink-500 text-pink-500 hover:bg-pink-500 hover:text-white font-bold py-4 px-8 rounded-full transition-all duration-300 flex items-center space-x-2"
               >
                 <Play className="h-5 w-5" fill="currentColor" />
                 <span>Watch Demo Reel</span>
               </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-white/70 rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero