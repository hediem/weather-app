import React from "react";

import "./WeatherInfo.css";
import Icon from "./Icon";

const WeatherInfo = ({ result }) => {
  if (result != null)
    return (
      <div className="weather">
        <div className="weather_temp">
          <Icon result={result} />
          Temperature : {result.current.temp}°C
          <br />
          Real Feel : {result.current.feels_like}
        </div>

        <div className="weather_other">
          Humidity : {result.current.humidity}%
          <br />
          Wind : {result.current.wind_speed * 3.6} km/h
        </div>
      </div>
    );
  return null;
};

export default WeatherInfo;
