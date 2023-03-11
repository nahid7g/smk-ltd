import React, { useEffect, useState } from 'react'
import Ship from './Ship/Ship'

const Ships = () => {
  const [ships, setShips] = useState([])
  useEffect(() => {
    fetch('ships.json')
      .then((res) => res.json())
      .then((data) => setShips(data))
  }, [])
  return (
    <div className='flex flex-col gap-3'>
      {ships?.map((ship) => (
        <Ship ship={ship} key={ship.id} />
      ))}
    </div>
  )
}

export default Ships
