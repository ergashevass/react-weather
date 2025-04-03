import React from 'react'

function HourlyCard({hours}) {
  const dataaa = hours?.time?.slice(-5)
  return (
    <div className='hourlyCard'>
      <p>{dataaa}</p>
      <img src={hours?.condition?.icon} alt="" />
      <p className='textt'>{hours?.condition?.text}</p>
    </div>
  );
}

export default HourlyCard