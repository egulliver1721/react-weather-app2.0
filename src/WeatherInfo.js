import React, { useState } from "react";
import "./Weather.css";

import FormattedDate from "./FormattedDate.js";

export default function WeatherInfo(props) {
  const [unit, setUnit] = useState("celcius");

  function convertToFarenheit(event) {
    event.preventDefault();
    setUnit("farenheit");
  }

  function convertToCelcius(event) {
    event.preventDefault();
    setUnit("celcius");
  }

  function farenheit() {
    return (props.data.temperature * 9) / 5 + 32;
  }

  if (unit === "celcius") {
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
        <div className="Box CelciusConversion">
          <div className="Metric">C°</div>
          <span> | </span>
          <div className="Metric">
            {" "}
            <a href="/" onClick={convertToFarenheit}>
              F°
            </a>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="CurrentWeather">
        <div className="row">
          <div className="col-4 Icon Centered">
            <img src={props.data.icon} alt="" className="Icon" />
          </div>
          <div className="col-4 CurrentTemperature Centered">
            {Math.round(farenheit())}°
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
        <div className="Box CelciusConversion">
          <div className="Metric">
            {" "}
            <a href="/" onClick={convertToCelcius}>
              C°
            </a>
          </div>
          <span> | </span>
          <div className="Metric">F°</div>
        </div>
      </div>
    );
  }
}
