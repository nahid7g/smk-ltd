import React from 'react'
import './Cards.css'

const ShipCard = ({ name, image }) => {
  return (
    <div className='card flex justify-center small-card text-white global-icon ship-small-card'>
      <div className='flex ml-3 gap-3 items-center'>
        <img src={image} alt='Global' className='h-4 w-4' />
        <h2 className='card-title'>{name}</h2>
      </div>
    </div>
  )
}

export default ShipCard
