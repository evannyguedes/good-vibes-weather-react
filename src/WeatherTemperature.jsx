import React from "react";

export default function WeatherTemperature(props){
    return(
        <span
                className="now-temperature"
                id="temperature"
                style={{ color: "black;" }}
              >
                {Math.round(props.celsius)}
              </span>
    )
}