import React from "react";
//description = result.current.weather[0].description
//main = result.current.weather[0].main
const BackGround = ({ description, main }) => {
  switch ((description, main)) {
    case "clear sky" || "Clear":
      break;
    case "few clouds" || "Clouds":
      break;
    case "scattered clouds" || " Clouds":
      break;
    case "broken clouds" || " Clouds":
      break;
    case "shower rain" || "Rain" || "Drizzle":
      break;
    case "rain" || "Rain" || "Drizzle":
      break;
    case "thunderstorm" || "Thunderstorm":
      break;
    case "snow" || "Snow":
      break;
    case "mist" || "Atmosphere":
      break;
  }
};
