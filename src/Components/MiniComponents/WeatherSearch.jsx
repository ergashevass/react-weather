import React from "react";

function WeatherSearch({ setCityName, cityName, getWeatherData }) {
  function handleSubmit(event) {
    event.preventDefault();
    getWeatherData(cityName);
  }

  return (
    <form className="form-input" onSubmit={handleSubmit}>
      <input
        onChange={(e) => setCityName(e.target.value)}
        type="text"
        value={cityName}
        placeholder="Please enter the city name..."
      />
      <button>Click</button>
    </form>
  );
}

export default WeatherSearch;
