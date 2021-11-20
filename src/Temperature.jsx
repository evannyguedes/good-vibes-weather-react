import React from "react";
import "./CSS/Temperature.css";

export default function Temperature(props){
    return(
        <div>
        <span
                className="now-temperature"
                id="temperature"
                style={props.color}
              >
                {Math.round(props.celsius)}
              </span>
        <span className="regular-unit" style={props.color}>
        °C
      </span>
      </div>
    );
   
}