import React from 'react'
import Header from '../components/Header.jsx'
import Hero from '../components/Hero.jsx'
import Categories from '../components/Categories.jsx'
import WhyChooseus from '../components/WhyChooseus.jsx'
import Testimonials from '../components/Testimonials.jsx'
import CallToAction from '../components/CallToAction.jsx'
function Home() {
  return (
    <div>
      <Header/>
      <Hero/>
      <Categories/>
      <WhyChooseus/>
      <Testimonials/>
      <CallToAction/>
      
    </div>
  )
}

export default Home
