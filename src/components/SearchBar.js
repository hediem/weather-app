import react, { useEffect, useState } from "react";
import Select from "react-select";

import useTimeout from "./TimeOut";
import "./SearchBar.scss";
const SearchBar = ({ setCityName, resultCity, setCoordinates }) => {
  const [options, setOptions] = useState([]);
  const [time, setTime] = useState(null);
  const [tcn, setTcn] = useState("");

  useEffect(() => {
    console.log("resultCity", resultCity);
    if (resultCity != null) {
      setOptions(
        resultCity.map((value) => {
          return {
            label: `${value.country != null ? value.country + "," : ""} ${
              value.state != null ? value.state + "," : ""
            } ${value.name != null ? value.name + "," : ""} ${
              value.local_names != null
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
  return (
    <div>
      <Select
        className="search"
        isSearchable={true}
        name="color"
        options={options}
        maxMenuHeight={200}
        placeholder="search city"
        onInputChange={onInputChangeHandler}
        onChange={onChangeHandler}
      />
    </div>
  );
};

export default SearchBar;
