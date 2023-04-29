import React, { useEffect, useState } from "react";

import "./App.scss";
import { getWeatherAndForecast, getCityCoordinates } from "./apis/API";
import SearchBar from "./components/SearchBar";
import WeatherInfo from "./components/WeatherInfo";
import _5DaysForcast from "./components/5DaysForcast";

function App() {
  const [coordinates, setCoordinates] = useState(null);
  const [result, setResult] = useState(null);
  const [cityName, setCityName] = useState(null);
  const [resultCity, setResultCity] = useState(null);
  const [timeOfCountry, setTimeOfCountry] = useState(null);
  const [timezone, setTimezone] = useState(null);
  const [loading, setLoading] = useState(false);

  const t = new Date();
  const hour = Math.floor(t.getTime() / 1000);

  const dayORnight = () => {
    return result != null
      ? hour >= result.current.sunrise && hour < result.current.sunset
        ? "day"
        : "night"
      : "";
  };

  // async function x() {
  //   setLoading(false);
  //   if (coordinates != null) {
  //     await getWeatherAndForecast(coordinates, setResult);
  //   }
  //   if (cityName != null) {
  //     await getCityCoordinates(cityName, setResultCity);
  //   }
  //   setLoading(true);
  // }
  // useEffect(() => {
  //   x();
  // }, []);
  useEffect(() => {
    if (coordinates != null) {
      getWeatherAndForecast(coordinates, setResult);
    }
  }, [coordinates]);

  useEffect(() => {
    if (result != null) {
      setTimeOfCountry(result.current.dt);
      setTimezone(result.timezone);
    }
  }, [result]);

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
      className={`main ${result != null ? result.current.weather[0].main : ""
        } ${dayORnight()}`}
    >
      <div className="base">
        <div className={`title ${dayORnight()} fs-1`}> Weather</div>
        <div className="cities row col-12">
          <SearchBar
            setCityName={setCityName}
            resultCity={resultCity}
            setCoordinates={setCoordinates}
            dayORnight={dayORnight}
          />
          <div className="info row justify-content-center justify-content-md-evenly">
            <WeatherInfo
              result={result}
              timeOfCountry={timeOfCountry}
              timezone={timezone}
            />
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
