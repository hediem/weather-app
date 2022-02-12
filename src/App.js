import React, { useEffect, useState } from "react";

import "./App.scss";
import getWeatherAndForecast from "./apis/weather";
import City from "./components/City";
import WeatherInfo from "./components/WeatherInfo";
import _5DaysForcast from "./components/5DaysForcast";

function App() {
  const [coordinates, setCoordinates] = useState(null);
  const [result, setResult] = useState(null);

  const time = new Date();
  const hour = Math.floor(time.getTime() / 1000);

  useEffect(() => {
    if (coordinates != null) {
      getWeatherAndForecast(coordinates, setResult);
    }
  }, [coordinates]);

  return (
    <div
      className={`main ${
        result != null ? result.current.weather[0].main : ""
      } ${
        result != null
          ? hour >= result.current.sunrise && hour < result.current.sunset
            ? "day"
            : "night"
          : ""
      }`}
    >
      <div className="base">
        <div className="title"> Weather</div>
        <div className="cities">
          <City coordinates={coordinates} setCoordinates={setCoordinates} />
          <WeatherInfo result={result} />
          <_5DaysForcast result={result} />
        </div>
      </div>
    </div>
  );
}

export default App;
