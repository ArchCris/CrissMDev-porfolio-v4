import React from 'react'
import '../styles/Home.css'
import Typing from '../components/Typing';
import ScrollDown from '../components/ScrollDown';

import { Player } from '@lottiefiles/react-lottie-player';
import hotCoffee from '../images/lottie/hotCoffee.json'

const Home = () => {
  return (
    <div className='home__conteiner' id='Home'>
      <div className='home__secA'>
        <h2 className='home__name'>Cristian Masci</h2>
        <Typing/>
        <h1 className='home__message'>Let's work together !</h1>
      </div>
      <div className='home__secB'>
        <Player className='home__coffee' autoplay loop src={hotCoffee}/>
      </div>
      <ScrollDown/>
    </div>
  )
}

export default Home