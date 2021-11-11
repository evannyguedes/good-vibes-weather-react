import React, {useState} from "react";
import "./CSS/Temperature.css";

export default function WeatherTemperature(props){
    const [unit, setUnit]= useState("celsius")
    function convertToFahrenheit(event){
        event.preventDefault();
        setUnit("fahrenheit");

    }
    function convertToCelsius(event){
        event.preventDefault();
        setUnit("celsius");
    }
    if (unit === "celsius"){
    return(
        <div>
        <span
                className="now-temperature"
                id="temperature"
                style={{ color: "black;" }}
              >
                {Math.round(props.celsius)}
              </span>
        <span className="regular-unit" style={{ color: "black;"}}>
        °C |<a href="/" onClick={convertToFahrenheit} className="units" > °F</a>
      </span>
      </div>
    );
    } else {
    let fahrenheit= (props.celsius * 9) / 5 + 32;
     return (
        <div>
        <span
                className="now-temperature"
                id="temperature"
                style={{ color: "black;" }}
              >
                {Math.round(fahrenheit)}
              </span>
        <span className="regular-unit" style={{ color: "black;" }}>
        <a href="/" onClick={convertToCelsius} className="units">
        °C |
        </a>{" "}
         °F
      </span>
      </div>
     )
    }
}