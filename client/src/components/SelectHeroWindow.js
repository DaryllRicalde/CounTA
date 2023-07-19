import React, { useState } from 'react'
import HeroPool from './HeroPool'
import Hero from './Hero'
import EnemiesPlaceholder from './EnemiesPlaceholder'
import data from '../resources/data.json'


function SelectHeroWindow() {

    const [currentActiveHero, setCurrentActiveHero] = useState('Axe');

    function onHeroClick(hero){
        setCurrentActiveHero(hero.name_loc)
    }

    var poolList = data.map((hero, index)=> 
    <div key={index}> 
    <Hero hero={{name:hero.name_loc}} onHeroClick={onHeroClick}/>
    </div>)

  return (
    <div>
        <EnemiesPlaceholder heroName={currentActiveHero}/>
        <HeroPool poolList={poolList}/>
    </div>
  )
}

export default SelectHeroWindow