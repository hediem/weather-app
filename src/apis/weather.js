import axios from "axios";

const KEY = "f62ee084a1ef88e54f947e36ce32e9da";

const getWeatherAndForecast = (coordinates, setResult) => {
  axios
    .get(
      `https://api.openweathermap.org/data/2.5/onecall?lat=${coordinates.lat}&lon=${coordinates.lon}&appid=${KEY}&units=metric`
    )
    .then((res) => {
      setResult(res.data);
    });
};

export default getWeatherAndForecast;
