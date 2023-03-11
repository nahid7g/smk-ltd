import React from 'react'
import time from '../../../../assets/time.png'

const BreakdownHistory = () => {
  return (
    <div className='grid grid-cols-4'>
      <div className='flex flex-col gap-10'>
        <h2 className='text-sm font-semibold'>Crane 1</h2>
        <h2 className='text-sm font-semibold'>Crane 2</h2>
        <h2 className='text-sm font-semibold'>Crane 3</h2>
        <h2 className='text-sm font-semibold'>Crane 4</h2>
      </div>
      <div className='col-span-3'>
        <div className='flex flex-col gap-5'>
          <div className='w-64 bg-blue-700 text-white flex justify-between items-center rounded py-1 px-3'>
            <h2>4.5 Hours</h2>
            <img src={time} alt='Time Icon' className='h-3 w-3' />
          </div>
          <div className='w-64 bg-blue-700 text-white flex justify-between items-center rounded py-1 px-3'>
            <h2>4.5 Hours</h2>
            <img src={time} alt='Time Icon' className='h-3 w-3' />
          </div>
          <div className='w-64 bg-blue-700 text-white flex justify-between items-center rounded py-1 px-3'>
            <h2>4.5 Hours</h2>
            <img src={time} alt='Time Icon' className='h-3 w-3' />
          </div>
          <div className='w-64 bg-blue-700 text-white flex justify-between items-center rounded py-1 px-3'>
            <h2>4.5 Hours</h2>
            <img src={time} alt='Time Icon' className='h-3 w-3' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default BreakdownHistory
