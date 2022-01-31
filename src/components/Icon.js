import React from "react";

const Icon = ({ result }) => {
  const src = `http://openweathermap.org/img/wn/${result.current.weather[0].icon}@2x.png`;
  const alt = result.current.weather[0].main;
  return <img src={src} alt={alt} />;
};

export default Icon;
