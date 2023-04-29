import React, { useEffect, useState } from "react";
import Select from "react-select";

import useTimeout from "./TimeOut";
import "./SearchBar.scss";
const SearchBar = ({ setCityName, resultCity, setCoordinates, dayORnight }) => {
  const defaultOptions = [
    {
      label: "gorgan",
      value: {
        lat: 36.8392776,
        lon: 54.4320858,
      },
    },
    {
      label: "tehran",
      value: {
        lat: 35.6892523,
        lon: 51.3896004,
      },
    },
    {
      label: "new york",
      value: {
        lat: 40.7127281,
        lon: -74.0060152,
      },
    },
    {
      label: "london",
      value: { lat: 51.5073219, lon: -0.1276474 },
    },
  ];
  const [options, setOptions] = useState(defaultOptions);

  const [time, setTime] = useState(null);
  const [tcn, setTcn] = useState("");

  useEffect(() => {
    // console.log("resultCity", resultCity);
    if (resultCity != null) {
      setOptions(
        resultCity.map((value) => {
          return {
            label: `${value.country != null ? value.country + "," : ""} ${value.state != null ? value.state + "," : ""
              } ${value.name != null ? value.name + "," : ""} ${value.local_names != null
                ? value.local_names.fa != null
                  ? value.local_names.fa
                  : ""
                : ""
              }`,
            value: { lat: value.lat, lon: value.lon },
          };
        })
      );
    }
  }, [resultCity]);

  useTimeout(() => {
    setCityName(tcn);
    setTime(null);
  }, time);

  const onInputChangeHandler = (value, action) => {
    if (typeof value === "string") setTcn(value);
    setTime(1000);
  };

  const onChangeHandler = (value) => {
    setCoordinates(value.value);
  };

  const onClickHandler = () => {
    setOptions(defaultOptions);
  };
  return (
    <div className="top row">
      <Select
        className="search col-12 col-sm-8 col-lg-5 col-xxl-4 fs-4 mb-2"
        isSearchable={true}
        name="color"
        options={options}
        maxMenuHeight={200}
        placeholder="search city"
        onInputChange={onInputChangeHandler}
        onChange={onChangeHandler}
      />
      <button
        type="button"
        className={`btn btn-primary ${dayORnight()} col-11 col-sm-2 col-lg-1`}
        onClick={onClickHandler}
        style={{ width: "auto" }}
      >
        default
      </button>
    </div>
  );
};

export default SearchBar;
