import React from "react";
import "./Weather.css";

export default function WeatherForecast() {
  return (
    <div className="Forecast">
      <div className="row Centered">
        <div className="col-3">
          <ul className="ListStyle">
            <li>Mon</li>
            <li>🌧</li>
            <li>13°</li>
          </ul>
        </div>
        <div className="col-3">
          <ul className="ListStyle">
            <li>Tues</li>
            <li>🌧</li>
            <li>13°</li>
          </ul>
        </div>
        <div className="col-3">
          <ul className="ListStyle">
            <li>Wed</li>
            <li>🌧</li>
            <li>13°</li>
          </ul>
        </div>
        <div className="col-3">
          <ul className="ListStyle">
            <li>Thurs</li>
            <li>🌧</li>
            <li>13°</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
