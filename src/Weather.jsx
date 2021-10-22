import React from "react";
import "./CSS/Weather.css";

export default function Weather() {
  return (
    <div className="information">
      <div className="weather row">
        <div className="current left col-6">
          <h1 className="city" id="current-city" style={{ color: "black;" }}>
            Berlin
          </h1>
          <ul className="more-info" style={{ color: "black;" }}>
            <li className="day-time" id="dayTime" style={{ color: "black;" }}>
              Thursday, 15:23
            </li>
            <li
              className="weather-description"
              id="description"
              style={{ color: "black;" }}
            >
              Clear Sky
            </li>
          </ul>
        </div>
        <div className="current right col-6">
          <div className="size-temperature">
            <span
              className="now-temperature"
              id="temperature"
              style={{ color: "black;" }}
            >
              18
            </span>
            <span className="celsius" style={{ color: "black;" }}>
              °C
            </span>
          </div>
          <ul className="under-temp" style={{ color: "black;" }}>
            <li>
              {" "}
              Humidity:30%
              <span id="humidity"></span>%
            </li>
            <li>
              {" "}
              Windy:4
              <span id="wind"></span>
              km/h
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}