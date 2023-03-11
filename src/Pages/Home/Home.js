import React from 'react'
import globe from '../../assets/globe.png'
import Charts from './Charts/Charts'
import './Home.css'
import ShipReport from './ShipReport/ShipReport'
import Ships from './Ships/Ships'

const Home = () => {
  return (
    <section className='grid p-3 md:grid-cols-3 lg:grid-cols-5 gap-4'>
      <div className='bg-black min-h-96 p-3'>
        <>
          <div className='card flex justify-center small-card text-white global-icon'>
            <div className='flex ml-3 gap-3 items-center'>
              <img src={globe} alt='Global' className='h-4 w-4' />
              <h2 className='card-title'>Global</h2>
            </div>
          </div>
        </>
        <h3 className='text-sm font-semibold individual-ship my-4'>
          Individual Ship
        </h3>
        <Ships />
      </div>
      <div className='md:col-span-2 lg:col-span-4 ship-reports'>
        <h2 className='text-lg font-bold my-4'>Global Ship Report</h2>
        <ShipReport />
        <div className='divider'>Cargo Gear</div>
        <Charts />
      </div>
    </section>
  )
}

export default Home
