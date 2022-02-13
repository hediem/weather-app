import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "./5DaysForcast.scss";
import { Navigation } from "swiper";
import DaysForcast from "./DaysForcast";
import "../App.scss";
const _5DaysForcast = ({ result, hour }) => {
  if (result != null) {
    return (
      <div>
        <div
          className={`forcast ${
            result != null
              ? hour >= result.current.sunrise && hour < result.current.sunset
                ? "day"
                : "night"
              : ""
          }`}
        >
          5 Days Forcast
        </div>
        {/* <div
          className={`slider ${
            result != null ? result.current.weather[0].main : ""
          } ${
            result != null
              ? hour >= result.current.sunrise && hour < result.current.sunset
                ? "day"
                : "night"
              : ""
          }`}
        > */}
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
          <div style={{ display: "flex" }}>
            {result.daily
              .filter((value, index) => index > 0 && index < 6)
              .map((value, index) => {
                return (
                  <SwiperSlide>
                    <div
                      className={`slider ${value.weather[0].main} ${
                        hour + 86400 * (index + 1) >= value.sunrise &&
                        hour + 86400 * (index + 1) < value.sunset
                          ? "day"
                          : "night"
                      }`}
                    >
                      <DaysForcast
                        key={`day${index}`}
                        result={value}
                        index={index}
                      />
                    </div>
                  </SwiperSlide>
                );
              })}
          </div>
        </Swiper>
        {/* </div> */}
      </div>
    );
  }
  return null;
};

export default _5DaysForcast;
