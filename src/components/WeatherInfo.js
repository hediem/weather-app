import React from "react";
import Moment from "react-moment";
import "moment-timezone";

import "./WeatherInfo.css";
import Icon from "./Icon";
import Day from "./Day";

const WeatherInfo = ({ result, timeOfCountry, timezone }) => {
  if (result != null && timeOfCountry != null && timezone != null) {
    // const date = timeOfCountry.slice(0, 10).replaceAll("-", "/");
    // const time = timeOfCountry.slice(11, 16);
    return (
      <div className="weather">
        <Icon result={result.current} />

        <div className="weather_">
          <div className="weather_temp">
            <div style={{ color: "#D52727" }}>{result.current.temp}°C</div>
            Real Feel : {result.current.feels_like}
            <br />
            {result.current.weather[0].description}
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
          <Moment unix tz={timezone}>
            {timeOfCountry}
          </Moment>
          {/* <br />
          {time}
          <br /> */}
        </div>
      </div>
    );
  }
  return null;
};

export default WeatherInfo;
