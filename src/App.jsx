import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Courses from './components/Courses'
import Portfolio from './components/Portfolio'
import Faculty from './components/Faculty'
import Admissions from './components/Admissions'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Courses />
      <Portfolio />
      <Faculty />
      <Admissions />
      <Contact />
      <Footer />
    </div>
  )
}

export default App