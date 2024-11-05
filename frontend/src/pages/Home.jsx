import React from 'react'
import Hero from '../components/Hero'
import GameMenu from '../components/GameMenu'
import TopCompanion from '../components/TopCompanion'
import AOV from '../components/AOV'
import FreeFire from '../components/Freefire'
import LOL from '../components/LOL'

const Home = () => {
  return (
    <div className='mx-4 sm:mx-[10%]'>
      <Hero />
      <GameMenu />
      <TopCompanion />
      <AOV />
      <FreeFire />
      <LOL />
    </div>
  )
}

export default Home