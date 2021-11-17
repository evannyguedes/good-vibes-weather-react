import React from "react";
import "./CSS/Forecast.css";
import sun from "./media/icon-sunny.png";
import cloud from "./media/icon-few-clouds.png";
import rain from "./media/icon-shower-rain.png";
import mist from "./media/icon-mist.png";
import snow from "./media/icon-snow.png";
import thunderstorm from "./media/icon-thunderstorm.png";
import showerRain from "./media/icon-shower-rain.png";

export default function WeatherIcon(props) {
  const codeMapping = {
    "01d": sun,
    "01n": sun,
    "02d": cloud,
    "02n": cloud,
    "03d": cloud,
    "03n": cloud,
    "04d": cloud,
    "04n": cloud,
    "09d": showerRain,
    "09n": showerRain,
    "10d": rain,
    "10n": rain,
    "11d": thunderstorm,
    "11n": thunderstorm,
    "13d": snow,
    "13n": snow,
    "50d": mist,
    "50n": mist,
  };
  
  let forecastIcon = codeMapping[props.iconData]
  return (
    <img id="weatherIcon" src={forecastIcon} alt="cloud" width="40" />
  );
}