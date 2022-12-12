import React from "react";
import WeatherIcon from "./WeatherIcon.js";

export default function WeatherForecastDay(props) {
  function day() {
    let date = new Date(props.data.time * 1000);
    let days = ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"];
    let day = days[date.getDay()];

    return day;
  }

  return (
    <ul className="ListStyle">
      <li>{day()}</li>
      <li>
        <WeatherIcon icon={props.data.condition.icon} />
      </li>
      <li>{Math.round(props.data.temperature.day)}°</li>
    </ul>
  );
}
