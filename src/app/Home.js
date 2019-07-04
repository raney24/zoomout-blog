import React from 'react'
import PageHero from './components/PageHero';
import assets from '../assets/assets.js'

const Home = () => (
  <PageHero imagePath={assets['heroImageWedding']} 
      title='Zoom Out' 
      subtitle='A blog sharing the experiences we have that have taught us to take a step back and look at the bigger picture.' 
  >
  </PageHero>
)
export default Home