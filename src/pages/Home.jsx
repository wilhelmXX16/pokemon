import React from 'react'
import FormHome from '../components/home/FormHome'
import Footer from '../components/shared/Footer'
import './styles/home.css'

const Home = () => {
  return (
    <div className='pokedex'>
      <img className='pokedex__img' src="https://archives.bulbagarden.net/media/upload/4/4b/Pok%C3%A9dex_logo.png" alt="pokedex logo" />
      <header className='pokedex__header'>
        <h2 className='pokedex__subtitle'>Hi Trainer</h2>
        <p className='pokedex__text'>Give me your to see the pokedex</p>
      </header>
        <FormHome />
        <Footer />
    </div>
  )
}

export default Home