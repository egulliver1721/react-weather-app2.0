import React from "react";

export default function Weather() {
  return (
    <div>
      <h1>
        It is clear in <span>Perth</span>
      </h1>
      <div className="row">
        <div className="col-4">🌧</div>
        <div className="col-4">25°C</div>
        <div className="col-4">
          <ul>
            <li>🌫 8 km/h</li>
            <li>☂ 0%</li>
            <li>💧 30%</li>
          </ul>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <li>Mon</li>
          <li>🌧</li>
          <li>13°</li>
        </div>
        <div className="col">
          <li>Tues</li>
          <li>🌧</li>
          <li>13°</li>
        </div>
        <div className="col">
          <li>Wed</li>
          <li>🌧</li>
          <li>13°</li>
        </div>
        <div className="col">
          <li>Thurs</li>
          <li>🌧</li>
          <li>13°</li>
        </div>
        <div className="col">
          <li>Fri</li>
          <li>🌧</li>
          <li>13°</li>
        </div>
        <div className="col">
          <li>Sat</li>
          <li>🌧</li>
          <li>13°</li>
        </div>
      </div>
    </div>
  );
}
