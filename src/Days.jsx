import React from "react";
import Icon from "./Icon";
import "./CSS/Forecast.css";



export default function Days (props){
    function maxTemperature(){
        let temperature = Math.round(props.data.temp.max)
        return `${temperature}°`;
    }
    
    function minTemperature(){
        let temperature = Math.round(props.data.temp.min)
        return `${temperature}°`;
    }
    
    function day(){
        let date = new Date(props.data.dt*1000);
        let day = date.getDay();
        let days= ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
    
        return days[day];
    }

return(
    <div>
        {day()}
        <br />
            <Icon iconData={props.data.weather[0].icon}/>
        <br />
            <span className="forecast-max">{maxTemperature()}</span>
            <span className="forecast-min">{minTemperature()}</span>
    </div>
)
}