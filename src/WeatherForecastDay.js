import React from "react";
import WeatherIcon from "./WeatherIcon.js";

export default function WeatherForecastDay(props) {
  return (
    <ul className="ListStyle">
      <li>Mon</li>
      <li>
        <WeatherIcon icon={props.data.condition.icon} />
      </li>
      <li>{Math.round(props.data.temperature.day)}°</li>
    </ul>
  );
}
