import React, { useEffect, useState } from "react";
import axios from "axios";
import HourlyForecast from "./MiniComponents/HourlyForecast";
import WeatherSearch from "./MiniComponents/WeatherSearch";
import WeatherDetails from "./MiniComponents/WeatherDetails";
import DayButton from "./MiniComponents/DayButton";

function WeatherApp() {
  const [weather, setWeather] = useState(null);
  const [selectedDay, setSelectedDay] = useState(0);
  const [cityName, setCityName] = useState("");

  const getWeatherData = async (cityName) => {
    try {
      const response = await axios.get(
        `https://api.weatherapi.com/v1/forecast.json?q=${cityName}&days=7&key=03f13a3b50b744448f9113158250204`
      );
      setWeather(response.data);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    getWeatherData(cityName);
  }, []);

  return (
    <div className="container">
      <WeatherSearch
        cityName={cityName}
        setCityName={setCityName}
        getWeatherData={getWeatherData}
      />
      <WeatherDetails
        location={weather?.location}
        current={weather?.forecast?.forecastday?.[selectedDay].day}
        forecastday={weather?.forecast?.forecastday}
      />
      <div className="forecast-days">
        {weather?.forecast?.forecastday?.map((day, index) => {
          return (
            <DayButton
              key={day.date_epoch}
              day={day}
              selectedday={selectedDay}
              setSelectedday={setSelectedDay}
              index={index}
            />
          );
        })}
      </div>

      <HourlyForecast
        hour={weather?.forecast?.forecastday?.[selectedDay]?.hour}
      />
    </div>
  );
}

export default WeatherApp;
