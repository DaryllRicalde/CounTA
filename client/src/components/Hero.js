import {React, useState} from 'react'
import data from '../resources/data.json'

function Hero({ hero, onHeroClick }) {

  const currHero = data.find(obj => obj['name_loc'] === hero.name);

  return (
    <div class='mx-8'>
      <img
        alt={currHero.name_loc}
        src={currHero.image}
        onClick={() => onHeroClick(currHero)}
      />
    </div>
  )
}

export default Hero