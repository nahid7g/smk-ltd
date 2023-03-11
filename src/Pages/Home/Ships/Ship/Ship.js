import React from 'react'
import '../../Home.css'
import subtract from '../../../../assets/Subtract.png'

const Ship = ({ ship }) => {
  return (
    <div className='collapse collapse-arrow text-white'>
      <input type='checkbox' className='peer' />
      <div className='collapse-title flex gap-3 bg-slate-500 rounded'>
        <img src={ship.image} alt='Global' />
        <h2>{ship.owner}</h2>
      </div>
      <div className='collapse-content border-l border-slate-400 relative ml-4'>
        {ship?.ships.map((ship) => (
          <div className='bg-slate-500 mt-3 rounded px-2 w-44 h-14 flex flex-col justify-center'>
            <img src={subtract} alt='Subtract' className='absolute left-0' />
            <div className='text-xs flex flex-col gap-2'>
              <p>{ship.name}</p>
              <p className='text-slate-300'>{ship.status}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Ship
