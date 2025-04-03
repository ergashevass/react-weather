import React from "react";


function WeatherDetails({ location, current }) {
 
  return (
    <div className="main-card">
      <div className="location-names">
        <p>{location?.name}</p>
        <p>{location?.country}</p>
      </div>
      <p>{current?.maxtemp_c} °C</p>
      <img src={current?.condition?.icon} alt="" />
      <p>{current?.condition?.text}</p>
    </div>
  );
}

export default WeatherDetails;
