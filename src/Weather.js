import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <div className=".Box Centered">
        <form className="SearchForm">
          <h1 className="Centered">
            It is clear in <span> </span>
          </h1>
          <input className="InputForm" type="search" value="Perth" />
        </form>
      </div>
      <div className="row Centered">
        <div className="col-4">🌧</div>
        <div className="col-4">25°C</div>
        <div className="col-4">
          <ul className="ListStyle">
            <li>🌫 8 km/h</li>
            <li>☂ 0%</li>
            <li>💧 30%</li>
          </ul>
        </div>
      </div>
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
      <div className="Box">
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
