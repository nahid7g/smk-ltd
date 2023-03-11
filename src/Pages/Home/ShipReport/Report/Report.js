import React from 'react'
import '../../Home.css'
import ship from '../../../../assets/ship.png'

const Report = () => {
  return (
    <div className='report text-black shadow-xl border h-36 flex justify-between p-4'>
      <div className='text-sm flex flex-col justify-between'>
        <div className=''>
          <img
            src={ship}
            alt='Ship'
            className='h-12 w-12  bg-indigo-700 rounded-full p-2'
          />
        </div>
        <div>
          <p>Renewal/Authority</p>
          <h2 className='text-sm font-semibold'>Cargo Gear</h2>
        </div>
      </div>
      <div className='flex flex-col justify-between'>
        <div className='text-end'>
          <p className='font-bold'>5</p>
        </div>
        <div className='text-xs'>
          <p>Total: 20h</p>
          <p>Total: 20h</p>
          <p>Total: 20h</p>
        </div>
      </div>
    </div>
  )
}

export default Report
