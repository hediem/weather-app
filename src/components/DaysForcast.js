import React from "react";

import "./DaysForcast.css";
import Icon from "./Icon";
import Day from "./Day";
//result = result.daily[i]
const DaysForcast = ({ result, index }) => {
  const min = result.temp.min,
    max = result.temp.max,
    humidity = result.humidity,
    wind = result.wind_speed,
    description = result.weather[0].description;
  return (
    <div className="daysAfter">
      <div>
        <Icon result={result} />
        <Day index={index} />
        {description}
        <div style={{ color: "#054da0" }}>{min}°C</div>
        <div style={{ color: "#D52727" }}>{max}°C</div>
        Humidity: {humidity}%
        <br />
        Wind: {(Math.round(wind * 3.6 * 100) / 100).toFixed(2)} km/h
      </div>
    </div>
  );
};

export default DaysForcast;
