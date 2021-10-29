import React, {useState} from "react";
import "./CSS/Form.css";
import axios from "axios";
import pin from "./media/pin.png";
import magni from "./media/magni.png";
import Weather from "./Weather";
import Forecast from "./Forecast.jsx";
import Image from "./Image.jsx";
import PostIt from "./PostIt.jsx";

export default function Form(props) {

  const [weatherData, setWeatherData] = useState({ready: false});
  const [city, setCity]= useState(props.defaultCity);

  function handleResponse(response){
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      city: response.data.name,
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
      date: new Date(response.data.dt * 1000),
      icon: response.data.weather[0].icon,
    });
  }

  function search(){
    const apiKey = "c7e7b1dfe1e083a5f2e3fd381de969ad";
    let apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event){
    event.preventDefault();
    search();
  }
  
  function handleCityChange(event){
    setCity(event.target.value)
  }
  if (weatherData.ready){
  return (
    <div className="Form">
      <form onSubmit={handleSubmit} className="form-city" id="formCity">
        <div className="search-cities">
          <input
            type="text"
            placeholder="Enter a city..."
            className="form-control"
            id="showCity"
            onChange={handleCityChange}
          />
        </div>
        <input
          type="image"
          alt="Magni"
          src={magni}
          className="magni-img"
          style={{ filter: "none" }}
        />

        <input
          type="image"
          alt="Pin"
          id="btnCurrent"
          src={pin}
          className="pin-img"
          style={{ filter: "none" }}
        />
      </form>
      <span className="line-top" />
      <br />
      <Weather data={weatherData}/>
      <Forecast />
      <Image iconData={weatherData}/>
      <PostIt iconData={weatherData}/>
    </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
