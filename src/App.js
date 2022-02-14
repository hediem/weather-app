import React, { useEffect, useState } from "react";

import "./App.scss";
import { getWeatherAndForecast, getCityCoordinates } from "./apis/API";
import SearchBar from "./components/SearchBar";
import City from "./components/City";
import WeatherInfo from "./components/WeatherInfo";
import _5DaysForcast from "./components/5DaysForcast";

function App() {
  const [coordinates, setCoordinates] = useState(null);
  const [result, setResult] = useState(null);
  const [cityName, setCityName] = useState(null);
  const [resultCity, setResultCity] = useState(null);

  const time = new Date();
  const hour = Math.floor(time.getTime() / 1000);

  const dayORnight = () => {
    return result != null
      ? hour >= result.current.sunrise && hour < result.current.sunset
        ? "day"
        : "night"
      : "";
  };
  useEffect(() => {
    if (coordinates != null) {
      getWeatherAndForecast(coordinates, setResult);
    }
  }, [coordinates]);

  const x = async () => {
    if (cityName != null) {
      await getCityCoordinates(cityName, setResultCity);
    }
  };
  useEffect(() => {
    x();
  }, [cityName]);

  return (
    <div
      className={`main ${
        result != null ? result.current.weather[0].main : ""
      } ${dayORnight()}`}
    >
      <div className="base">
        <div className={`title ${dayORnight()}`}> Weather</div>
        <div className="cities">
          <SearchBar
            setCityName={setCityName}
            resultCity={resultCity}
            setCoordinates={setCoordinates}
          />
          <City setCoordinates={setCoordinates} dayORnight={dayORnight} />
          <div className="info">
            <WeatherInfo result={result} />
            <_5DaysForcast
              result={result}
              hour={hour}
              dayORnight={dayORnight}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
