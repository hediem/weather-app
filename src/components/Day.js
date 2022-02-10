import React from "react";

const Day = ({ index }) => {
  const t = new Date();
  let day = t.getDay();
  let dayName = null;
  if (index + 1 + day > 6) day = index + 1 + day - 7;
  else day = index + 1 + day;
  switch (day) {
    case 0:
      dayName = "Sunday";
      break;
    case 1:
      dayName = "Monday";
      break;
    case 2:
      dayName = "Tuesday";
      break;
    case 3:
      dayName = "Wednesday";
      break;
    case 4:
      dayName = "Thursday";
      break;
    case 5:
      dayName = "Friday";
      break;
    case 6:
      dayName = "Saturday";
      break;
  }
  return <div>{dayName}</div>;
};

export default Day;
