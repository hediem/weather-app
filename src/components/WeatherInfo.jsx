import React, { useEffect, useState } from "react";
import useInterval from "./TimeInterval";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "./WeatherInfo.scss";

import Icon from "./Icon";
import Day from "./Day";
import Hourly from "./Hourly";

const WeatherInfo = ({ result, timeOfCountry, timezone }) => {
  const [time, setTime] = useState(null);

  useInterval(
    () => {
      setTime((t) => new Date(t.getTime() + 1000));
    },
    time ? 1000 : null
  );

  useEffect(() => {
    if (timeOfCountry != null && timezone != null) {
      let date = new Date(timeOfCountry * 1000);
      setTime(
        new Date(
          date.toLocaleString("en-US", {
            timeZone: timezone,
          })
        )
      );
    }
  }, [timeOfCountry, timezone]);

  if (result == null && timeOfCountry == null && timezone == null) {
    return null;
  }
  return (
    <div className="weather d-flex d-lg-flex flex-column flex-lg-row col-12 col-sm-9 col-md-5 col-lg-5 col-xxl-4 row text-center fs-4">
      <Icon result={result.current} />

      <div className="weather_ col-lg-7">
        <div className="weather_temp">
          <div style={{ color: "#D52727" }}>{result.current.temp}°C</div>
          Real Feel : {result.current.feels_like}
          <br />
          {result.current.weather[0].description}
        </div>

        <div className="weather_other">
          Humidity : {result.current.humidity}%
          <br />
          Wind :
          {(Math.round(result.current.wind_speed * 3.6 * 100) / 100).toFixed(2)}
          km/h
        </div>
      </div>
      <div className="weather_description col-lg-3">
        <Day index={-1} />
        {time
          ? `${time.getHours() < 10 ? "0" : ""}${time.getHours()}:${time.getMinutes() < 10 ? "0" : ""
          }${time.getMinutes()}`
          : ""}
      </div>
      <div className="mt-3">
        <Swiper className="mySwiper" spaceBetween={20} breakpoints={
          {
            640: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
            1400: {
              slidesPerView: 4,
            }
          }
        }>
          {result.hourly.slice(0, 25).map((value, index) => {
            return (
              <SwiperSlide key={`slide${index}`}>
                <Hourly
                  key={`day${index}`}
                  result={value}
                  index={index}
                />
              </SwiperSlide>
            );
          })}
        </Swiper>

      </div>
    </div>
  );
};

export default WeatherInfo;
