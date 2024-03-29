import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

import DaysForcast from "./DaysForcast";

import "swiper/css";
import "swiper/css/navigation";
import "./5DaysForcast.scss";
import "../App.scss";
const _5DaysForcast = ({ result, dayORnight }) => {
  if (result != null) {
    return (
      <div className="col-12 col-sm-9 col-md-7 col-lg-5 col-xxl-4">
        <div className={`forcast ${dayORnight()}`}>5 Days Forcast</div>
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
          <div style={{ display: "flex" }}>
            {result.daily
              .filter((value, index) => index > 0 && index < 6)
              .map((value, index) => {
                return (
                  <SwiperSlide key={`slide${index}`}>
                    {/* if want to have background fits to weather of day */}
                    {/* <div
                      className={`slider ${value.weather[0].main} ${
                        hour + 86400 * (index + 1) >= value.sunrise &&
                        hour + 86400 * (index + 1) < value.sunset
                          ? "day"
                          : "night"
                      }`}
                    > */}
                    <DaysForcast
                      key={`day${index}`}
                      result={value}
                      index={index}
                    />
                    {/* </div> */}
                  </SwiperSlide>
                );
              })}
          </div>
        </Swiper>
      </div>
    );
  }
  return null;
};

export default _5DaysForcast;
