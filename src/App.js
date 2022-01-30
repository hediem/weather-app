import React, { useEffect, useState } from "react";

import getWeatherAndForecast from "./apis/weather";
import City from "./components/City";

function App() {
  const [coordinates, setCoordinates] = useState(null);

  useEffect(() => {
    getWeatherAndForecast(coordinates);
  }, [coordinates]);

  return (
    <div>
      <div>Weather</div>
      <City coordinates={coordinates} setCoordinates={setCoordinates} />
    </div>
  );
}

export default App;
