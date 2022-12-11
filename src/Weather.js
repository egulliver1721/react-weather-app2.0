import React from "react";
import "./Weather.css";
import axios from "axios";

export default function Weather() {
  function handleResponse(response) {
    console.log(response);
  }

  const apiKey = "b4ffb413431b5d4406b3ot5c80af963a";
  let city = "Perth";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;
  axios.get(apiUrl).then(handleResponse);
  return (
    <div className="Weather">
      <div className="Box Centered">
        <form className="SearchForm">
          <input className="InputForm" type="search" />
        </form>
      </div>
      <div className="CurrentWeather">
        <div className="row">
          <div className="col-4 Icon Centered">🌧</div>
          <div className="col-4 CurrentTemperature Centered">25°</div>
          <div className="col-4 WeatherInformation">
            <ul className="ListStyle">
              <li>🌫 8 km/h</li>
              <li>☂ 0%</li>
              <li>💧 30%</li>
            </ul>
          </div>
        </div>
      </div>
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
      <div className="Box CelciusConversion">
        <div>
          {" "}
          <a href="/">C°</a>
        </div>
        <div> | </div>
        <div>
          {" "}
          <a href="/">F°</a>
        </div>
      </div>
    </div>
  );
}
