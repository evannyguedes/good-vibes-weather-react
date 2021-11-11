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
  let weatherName = props.iconData.icon;

  switch(weatherName){
    case "01d": 
    return (
      <div className="Image">
        <img id="icon" alt="background" src={sunny} className="weather-img" />
      </div>
    );
    case "01n":
      return (
        <div className="Image">
          <img id="icon" alt="background" src={clearNight} className="weather-img" />
        </div>
      );
      case "02d":
        return (
          <div className="Image">
            <img id="icon" alt="background" src={fewClouds} className="weather-img" />
          </div>
        );
      case "03d":
        return (
          <div className="Image">
            <img id="icon" alt="background" src={fewClouds} className="weather-img" />
          </div>
        );
      case "04d":
        return (
          <div className="Image">
            <img id="icon" alt="background" src={fewClouds} className="weather-img" />
          </div>
        );
      case "02n":
        return (
          <div className="Image">
            <img id="icon" alt="background" src={cloudyNight} className="weather-img" />
          </div>
        );
      case "03n":
        return (
          <div className="Image">
            <img id="icon" alt="background" src={cloudyNight} className="weather-img" />
          </div>
        );
      case "04n":
        return (
          <div className="Image">
            <img id="icon" alt="background" src={cloudyNight} className="weather-img" />
          </div>
        );
      case "09d":
        return (
          <div className="Image">
            <img id="icon" alt="background" src={showerRain} className="weather-img" />
          </div>
        );
      case "10d":
        return (
          <div className="Image">
            <img id="icon" alt="background" src={rain} className="weather-img" />
          </div>
        );
        case "11d":
          return (
            <div className="Image">
              <img id="icon" alt="background" src={thunderstorm} className="weather-img" />
            </div>
          );
        case "13d":
          return (
            <div className="Image">
              <img id="icon" alt="background" src={snow} className="weather-img" />
            </div>
          );
        default:
          return (
            <div className="Image">
              <img id="icon" alt="background" src={mist} className="weather-img" />
            </div>
          );

  }


}
