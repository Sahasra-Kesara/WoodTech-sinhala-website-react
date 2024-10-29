import React from 'react'
import Hero from '../components/Hero';
import Stats from '../components/Stats';
import About from './About';
import Services from './Services';
const Home = () => {
  return (
    <div>
      <Hero/>
      <Stats/>
      <About/>
      <Services/>
    </div>
  )
}

export default Home
