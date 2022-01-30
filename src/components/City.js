import React from "react";

const City = ({ coordinates, setCoordinates }) => {
  const cities = [
    {
      name: "gorgan",
      lat: 36.8456,
      lon: 54.4393,
    },
    {
      name: "tehran",
      lat: 35.6892,
      lon: 51.389,
    },
    {
      name: "new york",
      lat: 40.7128,
      lon: 74.006,
    },
    {
      name: "london",
      lat: 51.5072,
      lon: 0.1276,
    },
  ];

  console.log(coordinates);
  return (
    <div>
      <div>Select City</div>
      <button
        type="button"
        className="btn btn-primary"
        onClick={() => setCoordinates(cities[0])}
      >
        Gorgan
      </button>
      <button
        type="button"
        className="btn btn-primary"
        onClick={() => setCoordinates(cities[1])}
      >
        Tehran
      </button>
      <button
        type="button"
        className="btn btn-primary"
        onClick={() => setCoordinates(cities[2])}
      >
        New York
      </button>
      <button
        type="button"
        className="btn btn-primary"
        onClick={() => setCoordinates(cities[3])}
      >
        London
      </button>
    </div>
  );
};

export default City;
