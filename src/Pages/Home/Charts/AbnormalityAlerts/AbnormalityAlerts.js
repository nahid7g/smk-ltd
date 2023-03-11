import React from 'react'
import {
  ComposedChart,
  Line,
  Area,
  YAxis,
  CartesianGrid,
  Tooltip,
} from 'recharts'

const AbnormalityAlerts = () => {
  const data = [
    {
      crane1: 140,
      crane2: 430,
      crane3: 330,
      crane4: 363,
    },
    {
      crane1: 600,
      crane2: 250,
      crane3: 420,
      crane4: 533,
    },
    {
      crane1: 300,
      crane2: 350,
      crane3: 620,
      crane4: 733,
    },
    {
      crane1: 800,
      crane2: 250,
      crane3: 320,
      crane4: 233,
    },
    {
      crane1: 600,
      crane2: 100,
      crane3: 320,
      crane4: 433,
    },
    {
      crane1: 530,
      crane2: 750,
      crane3: 720,
      crane4: 233,
    },
  ]
  return (
    <div>
      <ComposedChart
        width={500}
        height={400}
        data={data}
        margin={{
          top: 10,
          right: 30,
          left: 0,
          bottom: 0,
        }}
      >
        <CartesianGrid strokeDasharray='3 3' />
        <YAxis />
        <Tooltip />
        <Line type='monotone' dataKey='crane2' stroke='#DFCE33' />
        <Line type='monotone' dataKey='crane3' stroke='#D93D2E' />
        <Line type='monotone' dataKey='crane4' stroke='#369BE5' />
        <Area
          type='monotone'
          dataKey='crane1'
          stroke='#8884d8'
          fill='#6AC446'
        />
      </ComposedChart>
    </div>
  )
}

export default AbnormalityAlerts
