import React from "react";
import "./CSS/Image.css";
import sunny from "./media/sunny-image.png";
import clearNight from "./media/clear-night.png";
import fewClouds from "./media/few-clouds.png";
import cloudyNight from "./media/cloudy-night.png";
import showerRain from "./media/shower-rain.png";
import rain from "./media/rain.png";
import thunderstorm from "./media/thunderstorm.png";
import snow from "./media/snow.png";
import mist from "./media/mist.png";

export default function Image(props) {
  const codeMapping = {
    "01d": sunny,
    "01n": clearNight,
    "02d": fewClouds,
    "02n": cloudyNight,
    "03d": fewClouds,
    "03n": cloudyNight,
    "04d": fewClouds,
    "04n": cloudyNight,
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

  let weatherIcon = codeMapping[props.iconData.icon];
    return (
      <div className="Image">
        <img id="icon" alt="background" src={weatherIcon} className="weather-img" />
      </div>
    )
}
