import React from "react";

import "./DaysForcast.scss";

import Icon from "./Icon";

const Hourly = ({ result, index }) => {
    const temp = result.temp,
        wind = result.wind_speed,
        time = new Date(result.dt * 1000);
    // Get hour and minute values
    const hour = String(time.getHours()).padStart(2, '0');
    const minute = String(time.getMinutes()).padStart(2, '0');

    // Format time in "14:04" format
    const formattedTime = `${hour}:${minute}`;
    return (
        <div className="daysAfter" style={{ borderRadius: "20px", alignItems: "center" }}>
            <div style={{ color: "#D52727" }}>{temp}°C</div>
            <Icon result={result} />
            <span>{(Math.round(wind * 3.6 * 100) / 100).toFixed(2)} km/h</span>

            <span>
                {index === 1 ? "Now" : formattedTime}
            </span>
        </div>
    );
};

export default Hourly;
