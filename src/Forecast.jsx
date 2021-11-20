import React,{useState, useEffect} from "react";
import axios from "axios";
import "./CSS/Forecast.css";
import pin from "./media/teste.png";
import Days from "./Days";


export default function Forecast(props) {
  const [loaded, setLoaded] = useState(false);
  const [forecast, setForecast] = useState(null);
  
 useEffect( () => {
  setLoaded(false);
 }, [props.data]);

  function getInfo(response){
    setForecast(response.data.daily);
    setLoaded(true);
  }

  if(loaded){
    return (
      <div>
      <div className="Forecast">
        <div className="weather-forecast" id="forecast" />
        <div class="forecast row">
          {forecast.map(function (dailyForecast, index){
            if (index < 6){
          return(
        <div className="forecast col-6">
            <Days data={dailyForecast} />
          </div>
          );
            } else{
              return null;
          }
          })}
        </div>
        </div>
        <img src={pin} alt="Pin" className="big-pin" />
        <br />
        </div>
    )
  } else {
 
  const apiKey ="c7e7b1dfe1e083a5f2e3fd381de969ad"
    let lat = props.data.lat;
    let lon = props.data.lon;
    let apiUrl =`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`
    axios.get(apiUrl).then(getInfo);

  return null;
}
}
