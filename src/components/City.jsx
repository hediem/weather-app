import React from "react";

import "./City.scss";

const City = ({ setCoordinates, dayORnight }) => {
  const cities = [
    {
      name: "gorgan",
      lat: 36.8392776,
      lon: 54.4320858,
    },
    {
      name: "tehran",
      lat: 35.6892523,
      lon: 51.3896004,
    },
    {
      name: "new york",
      lat: 40.7127281,
      lon: -74.0060152,
    },
    {
      name: "london",
      lat: 51.5073219,
      lon: -0.1276474,
    },
  ];
  return (
    <div>
      <button
        type="button"
        className={`btn btn-primary ${dayORnight()}`}
        onClick={() => setCoordinates(cities[0])}
      >
        Gorgan
      </button>
      <button
        type="button"
        className={`btn btn-primary ${dayORnight()}`}
        onClick={() => setCoordinates(cities[1])}
      >
        Tehran
      </button>
      <button
        type="button"
        className={`btn btn-primary ${dayORnight()}`}
        onClick={() => setCoordinates(cities[2])}
      >
        New York
      </button>
      <button
        type="button"
        className={`btn btn-primary ${dayORnight()}`}
        onClick={() => setCoordinates(cities[3])}
      >
        London
      </button>
    </div>
  );
};

export default City;
