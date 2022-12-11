import React, { useState } from "react";
import WeatherForecastDay from "./WeatherForecastDay";
import "./Weather.css";
import axios from "axios";

export default function WeatherForecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecastData, setForecast] = useState(null);

  function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }

  if (loaded) {
    console.log(forecastData[0]);
    return (
      <div className="Forecast">
        <div className="row Centered">
          <div className="col-3">
            <WeatherForecastDay data={forecastData[0]} />
          </div>
        </div>
      </div>
    );
  } else {
    let apiKey = "b4ffb413431b5d4406b3ot5c80af963a";
    let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${props.name}&key=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);

    return null;
  }
}
