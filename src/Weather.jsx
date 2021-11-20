import React from "react";
import ShowDate from "./ShowDate";
import "./CSS/Weather.css"
import Temperature from "./Temperature.jsx";
import NightColor from "./NightColor";

export default function Weather(props){

  let color = props.data.icon

    return(
        <div className="information">
        <div className="weather row">
          <div className="current left col-6">
            <h1 className="city" id="current-city" style={NightColor(color)}>
              {props.data.city}
            </h1>
            <ul className="more-info" style={NightColor(color)}>
              <li className="day-time" id="dayTime" style={NightColor(color)}>
                <ShowDate date={props.data.date} />
              </li>
              <li
                className="weather-description"
                id="description"
                style={NightColor(color)}
              >
                {props.data.description}
              </li>
            </ul>
          </div>
          <div className="current right col-6">
            <div className="size-temperature">
              <Temperature celsius={(props.data.temperature)} color={NightColor(color)}/>
              
            </div>
            <ul className="under-temp" style={NightColor(color)}>
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