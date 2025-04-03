import React from 'react'
import HourlyCard from './HourlyCard'

function HourlyForecast( {hour}) {
console.log(hour)

  return (
    <div className='hourlyForecast'>
      {hour?.map((e) => {
        return <HourlyCard hours={e} key={e.time_epoch} />;
      })}
    </div>
  )
}

export default HourlyForecast