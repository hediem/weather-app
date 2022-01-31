import React, { useEffect, useState } from "react";

import "./App.css";
import getWeatherAndForecast from "./apis/weather";
import City from "./components/City";
import WeatherInfo from "./components/WeatherInfo";

function App() {
  const [coordinates, setCoordinates] = useState(null);
  const [result, setResult] = useState(null);

  useEffect(() => {
    if (coordinates != null) {
      getWeatherAndForecast(coordinates, setResult);
    }
  }, [coordinates]);

  return (
    <div className="main">
      <div className="base">
        <div className="title"> Weather</div>
        <div className="cities">
          <City coordinates={coordinates} setCoordinates={setCoordinates} />
          <WeatherInfo result={result} />
        </div>
      </div>
    </div>
  );
}

export default App;
