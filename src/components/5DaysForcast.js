import React from "react";

import DaysForcast from "./DaysForcast";

const _5DaysForcast = ({ result }) => {
  if (result != null) {
    return (
      <div style={{ display: "flex" }}>
        {result.daily
          .filter((value, index) => index > 0 && index < 6)
          .map((value, index) => {
            return (
              <DaysForcast key={`day${index}`} result={value} index={index} />
            );
          })}
      </div>
    );
  }
  return null;
};

export default _5DaysForcast;
