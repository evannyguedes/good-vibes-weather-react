import React from "react";
import "./CSS/Forecast.css";
import pin from "./media/teste.png";
import sun from "./media/icon-sunny.png";
import cloud from "./media/icon-few-clouds.png";
import rain from "./media/icon-shower-rain.png";

export default function Forecast() {
  return (
    <div className="Forecast">
      <div className="weather-forecast" id="forecast" />
      <div class="forecast row">
        <div className="forecast col-6">
          WED
          <br />
          <img id="weatherIcon" src={cloud} alt="cloud" width="40" />
          <br />
          <span className="forecast-max">15°</span>
          <span className="forecast-min">9°</span>
        </div>
        <div className="forecast col-6">
          THU
          <br />
          <img id="weatherIcon" src={sun} alt="sun" width="40" />
          <br />
          <span className="forecast-max">17°</span>
          <span className="forecast-min">9°</span>
        </div>
        <div className="forecast col-6">
          FRI
          <br />
          <img id="weatherIcon" src={rain} alt="rain" width="40" />
          <br />
          <span className="forecast-max">16°</span>
          <span className="forecast-min">5°</span>
        </div>
        <div className="forecast col-6">
          SAT
          <br />
          <img id="weatherIcon" src={cloud} alt="cloud" width="40" />
          <br />
          <span className="forecast-max">15°</span>
          <span className="forecast-min">7°</span>
        </div>
        <div className="forecast col-6">
          SUN
          <br />
          <img id="weatherIcon" src={sun} alt="sun" width="40" />
          <br />
          <span className="forecast-max">18°</span>
          <span className="forecast-min">10°</span>
        </div>
        <div className="forecast col-6">
          MON
          <br />
          <img id="weatherIcon" src={sun} alt="sun" width="40" />
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
