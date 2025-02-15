import React from 'react'
import HeroSection from '../components/Home'

import Feedback from '../components/Feedback'

import Courses from '../components/Courses'

const Home = () => {
  return (
    <div>
        <HeroSection/>
      <Courses/>
        <Feedback/>
        
    </div>
  )
}

export default Home