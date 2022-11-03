import React from 'react'
import About from '../components/About'
import Heroe from '../components/Heroe'
import Portfolio from '../components/Portfolio'
import Services from '../components/Services'
import Teams from '../components/Teams'
import Testimonials from '../components/Testimonials'
import VisionAndMission from '../components/VisionAndMission'

const Home = () => {
  return (
    <div>
     <Heroe />
     <Services />
     <About />
     <Teams />
     <Portfolio />
     <VisionAndMission />
     <Testimonials />
    </div>
  )
}

export default Home