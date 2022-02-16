import React, { useEffect, useState } from "react";
import useInterval from "./TimeInterval";

import "./WeatherInfo.css";
import Icon from "./Icon";
import Day from "./Day";

const WeatherInfo = ({ result, timeOfCountry, timezone }) => {
  const [time, setTime] = useState(null);

  useInterval(
    () => {
      setTime((t) => new Date(t.getTime() + 1000));
    },
    time ? 1000 : null
  );

  useEffect(() => {
    if (result != null && timeOfCountry != null && timezone != null) {
      let date = new Date(timeOfCountry * 1000);
      setTime(
        new Date(
          date.toLocaleString("en-US", {
            timeZone: timezone,
          })
        )
      );
    }
  }, [result, timeOfCountry, timezone]);

  if (result == null && timeOfCountry == null && timezone == null) {
    return null;
  }
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
          Wind :
          {(Math.round(result.current.wind_speed * 3.6 * 100) / 100).toFixed(2)}
          km/h
        </div>
      </div>
      <div className="weather_description">
        <Day index={-1} />
        {/* <Moment format="hh:mm:ss" interval={1000} date={time} duration={futureTime} /> */}
        {time
          ? `${time.getHours() < 10 ? "0" : ""}${time.getHours()}:${
              time.getMinutes() < 10 ? "0" : ""
            }${time.getMinutes()}`
          : ""}
        {/* {dd} */}
        {/* <br />
          {time}
          <br /> */}
      </div>
    </div>
  );
};

export default WeatherInfo;
