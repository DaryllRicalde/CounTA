import React from 'react'
import Hero from './Hero'

function EnemiesPlaceholder({heroName}) {

  return (
    <div class='flex flex-row my-8 px-8 items-center justify-center'>
        <Hero hero={{name: heroName}}/>
    </div>
  )
}

export default EnemiesPlaceholder