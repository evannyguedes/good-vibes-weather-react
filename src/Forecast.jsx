import React from "react";
import axios from "axios";
import "./CSS/Forecast.css";
import pin from "./media/teste.png";
import Icon from "./Icon";


export default function Forecast(props) {

    let lat = props.data.lat;
    let lon = props.data.lon;

  function showForecast (){
    const apiKey ="c7e7b1dfe1e083a5f2e3fd381de969ad"
    let apiUrl =`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude={part}&appid=${apiKey}`
    axios.get(apiUrl)
  }

  return (
    <div className="Forecast">
      <div className="weather-forecast" id="forecast" />
      <div class="forecast row">
        <div className="forecast col-6">
          WED
          <br />
          <Icon iconData="01d"/>
          <br />
          <span className="forecast-max">15°</span>
          <span className="forecast-min">9°</span>
        </div>
        <div className="forecast col-6">
          THU
          <br />
          <Icon iconData="01d"/>
          <br />
          <span className="forecast-max">17°</span>
          <span className="forecast-min">9°</span>
        </div>
        <div className="forecast col-6">
          FRI
          <br />
          <Icon iconData="10d"/>
          <br />
          <span className="forecast-max">16°</span>
          <span className="forecast-min">5°</span>
        </div>
        <div className="forecast col-6">
          SAT
          <br />
          <Icon iconData="02d"/>
          <br />
          <span className="forecast-max">15°</span>
          <span className="forecast-min">7°</span>
        </div>
        <div className="forecast col-6">
          SUN
          <br />
          <Icon iconData="01d"/>
          <br />
          <span className="forecast-max">18°</span>
          <span className="forecast-min">10°</span>
        </div>
        <div className="forecast col-6">
          MON
          <br />
          <Icon iconData="01d"/>
          <br />
          <span className="forecast-max">16°</span>
          <span className="forecast-min">8°</span>
        </div>
      </div>
      <img src={pin} alt="Pin" className="big-pin" />

      <br />
    </div>
  );
}
