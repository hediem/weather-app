import React from "react";

import "./WeatherInfo.css";
import Icon from "./Icon";
import Day from "./Day";

const WeatherInfo = ({ result }) => {
  if (result != null)
    return (
      <div className="weather">
        <Icon result={result.current} />
        <div className="weather_">
          <div className="weather_temp">
            <div style={{ color: "#D52727" }}>{result.current.temp}°C</div>
            Real Feel : {result.current.feels_like}
          </div>
          <br />
          <div className="weather_other">
            Humidity : {result.current.humidity}%
            <br />
            Wind :{" "}
            {(Math.round(result.current.wind_speed * 3.6 * 100) / 100).toFixed(
              2
            )}{" "}
            km/h
          </div>
        </div>
        <div className="weather_description">
          <Day index={-1} />
          {result.current.weather[0].description}
        </div>
      </div>
    );
  return null;
};

export default WeatherInfo;
