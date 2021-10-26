import React,{useState} from "react";
import "./CSS/Weather.css";
import axios from "axios";
import ShowDate from "./ShowDate";


export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ready: false});
  
  function handleResponse(response){
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      city: response.data.name,
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
      date: new Date(response.data.dt * 1000),
    });
  }

  if (weatherData.ready){
  return (
    <div className="information">
      <div className="weather row">
        <div className="current left col-6">
          <h1 className="city" id="current-city" style={{ color: "black;" }}>
            {weatherData.city}
          </h1>
          <ul className="more-info" style={{ color: "black;" }}>
            <li className="day-time" id="dayTime" style={{ color: "black;" }}>
              <ShowDate date={weatherData.date} />
            </li>
            <li
              className="weather-description"
              id="description"
              style={{ color: "black;" }}
            >
              {weatherData.description}
            </li>
          </ul>
        </div>
        <div className="current right col-6">
          <div className="size-temperature">
            <span
              className="now-temperature"
              id="temperature"
              style={{ color: "black;" }}
            >
              {Math.round(weatherData.temperature)}
            </span>
            <span className="celsius" style={{ color: "black;" }}>
              °C
            </span>
          </div>
          <ul className="under-temp" style={{ color: "black;" }}>
            <li>
              {" "}
              Humidity: {weatherData.humidity}
              <span id="humidity"></span>%
            </li>
            <li>
              {" "}
              Windy: {Math.round(weatherData.wind)}
              <span id="wind"></span>
              km/h
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
} else {
  const apiKey = "c7e7b1dfe1e083a5f2e3fd381de969ad";
  let apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(handleResponse);

  return "Loading..."
}
}