import React from "react";
import "./Weather.css";

import FormattedDate from "./FormattedDate.js";

export default function WeatherInfo(props) {
  return (
    <div className="CurrentWeather">
      <div className="row">
        <div className="col-4 Icon Centered">
          <img src={props.data.icon} alt="" className="Icon" />
        </div>
        <div className="col-4 CurrentTemperature Centered">
          {Math.round(props.data.temperature)}°
        </div>
        <div className="col-4 WeatherInformation">
          <ul className="ListStyle">
            <li>
              <FormattedDate date={props.data.date} />
            </li>
            <li>🌫 {Math.round(props.data.wind)} km/h</li>
            <li>💧 {props.data.humidity}%</li>
            <li className="Capitalise">{props.data.description}</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
