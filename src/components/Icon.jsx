import React from "react";

const Icon = ({ result }) => {
  const src = `http://openweathermap.org/img/wn/${result.weather[0].icon}@2x.png`;
  const alt = result.weather[0].main;
  return (
    <div className="">
      <img src={src} alt={alt} />
    </div>
  );
};

export default Icon;
