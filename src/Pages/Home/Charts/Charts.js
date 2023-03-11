import React from 'react'
import frame from '../../../assets/frame.png'
import AbnormalityAlerts from './AbnormalityAlerts/AbnormalityAlerts'
import BreakdownHistory from './BreakdownHistory/BreakdownHistory'

const Charts = () => {
  return (
    <section className='grid xl:grid-cols-2 gap-2 my-4 justify-center'>
      <div className='shadow-xl p-4 bg-white'>
        <div className='flex justify-between'>
          <h2 className='text-lg font-bold my-4'>Abnormality Alerts</h2>
          <div className='flex justify-between gap-2 items-center'>
            <from>
              <select className='select w-full max-w-xs'>
                <option selected>Mv Jawad</option>
                <option>Mv Jawad 2</option>
                <option>Mv Jawad 3</option>
                <option>Mv Jawad 4</option>
              </select>
            </from>
            <img src={frame} alt='Frame' className='h-6 w-6' />
          </div>
        </div>
        <AbnormalityAlerts />
      </div>
      <div className='shadow-xl p-4 bg-white'>
        <div className='flex justify-between'>
          <h2 className='text-lg font-bold my-4'>Breakdown History</h2>
          <div className='flex justify-between gap-2 items-center'>
            <p>Total: 20 Hours</p>
            <img src={frame} alt='Frame' className='h-6 w-6' />
          </div>
        </div>
        <BreakdownHistory />
      </div>
    </section>
  )
}

export default Charts
