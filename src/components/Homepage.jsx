import React from 'react'
import HeroCarousel from './HomeCarousel'
import Feedback from './Feedback'
import HeroSection2 from './HeroSection2'
import Services from './Services'
function Homepage() {
  return (
    <>
      <HeroCarousel/>
      <HeroSection2 />
      <Services />
      <Feedback />
    </>
  )
}

export default Homepage
