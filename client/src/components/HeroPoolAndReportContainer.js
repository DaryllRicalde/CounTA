import React from 'react'
import HeroPool from './HeroPool'
import Counters from './Counters'

function HeroPoolAndCounterContainer() {
  return (
    <div class='flex flex-row'>
        <Counters/>
        <HeroPool/>
    </div>
  )
}

export default HeroPoolAndCounterContainer