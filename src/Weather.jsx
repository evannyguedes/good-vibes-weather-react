import React from "react";
import ShowDate from "./ShowDate";
import "./CSS/Weather.css"
import WeatherTemperature from "./WeatherTemperature"

export default function Weather(props){
    return(
        <div className="information">
        <div className="weather row">
          <div className="current left col-6">
            <h1 className="city" id="current-city" style={{ color: "black;" }}>
              {props.data.city}
            </h1>
            <ul className="more-info" style={{ color: "black;" }}>
              <li className="day-time" id="dayTime" style={{ color: "black;" }}>
                <ShowDate date={props.data.date} />
              </li>
              <li
                className="weather-description"
                id="description"
                style={{ color: "black;" }}
              >
                {props.data.description}
              </li>
            </ul>
          </div>
          <div className="current right col-6">
            <div className="size-temperature">
              <WeatherTemperature celsius={(props.data.temperature)} />
              <span className="celsius" style={{ color: "black;" }}>
                °C
              </span>
            </div>
            <ul className="under-temp" style={{ color: "black;" }}>
              <li>
                {" "}
                Humidity: {props.data.humidity}
                <span id="humidity"></span>%
              </li>
              <li>
                {" "}
                Windy: {Math.round(props.data.wind)}
                <span id="wind"></span>
                km/h
              </li>
            </ul>
          </div>
        </div>
      </div>
    )
}