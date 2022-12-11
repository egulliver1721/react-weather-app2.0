import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      temperature: response.data.temperature.current,
      humidity: response.data.temperature.humidity,
      wind: response.data.wind.speed,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  function search() {
    const apiKey = "b4ffb413431b5d4406b3ot5c80af963a";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <div className="Box Centered">
          <form className="SearchForm" onSubmit={handleSubmit}>
            <input
              className="InputForm"
              type="search"
              placeholder="Enter a city..."
              onChange={handleCityChange}
            />
            <input type="submit" />
          </form>
        </div>
        <div className="CurrentWeather">
          <div className="row">
            <div className="col-4 Icon Centered">🌧</div>
            <div className="col-4 CurrentTemperature Centered">
              {Math.round(weatherData.temperature)}°
            </div>
            <div className="col-4 WeatherInformation">
              <ul className="ListStyle">
                <li>🌫 {Math.round(weatherData.wind)} km/h</li>
                <li>☂ 0%</li>
                <li>💧 {weatherData.humidity}%</li>
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
  } else {
    search();
    return "Loading...";
  }
}
