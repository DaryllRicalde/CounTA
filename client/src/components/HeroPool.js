import React, { useState } from 'react'
import data from '../resources/data.json'
import heroes from '../resources/heroes.json'

import Hero from './Hero'


// const heroesList = Object.values(heroes).map(currHero => currHero)

function HeroPool({poolList}) {

    return (
        <div class='grid grid-cols-6'>

            {/* Making Hero components from each object in the heroes.json */}

            {poolList}

            {/* {
                data.map((hero, index)=>
                    <div key={index}>
                        <Hero hero={{name:hero.name_loc}}/>
                    </div>
                )
            } */}

        </div>
  )
}

export default HeroPool