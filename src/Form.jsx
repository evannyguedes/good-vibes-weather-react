import React, {useState} from "react";
import "./CSS/Form.css";
import axios from "axios";
import pin from "./media/pin.png";
import magni from "./media/magni.png";
import Weather from "./Weather";
import Forecast from "./Forecast.jsx";
import Image from "./Image.jsx";
import PostIt from "./PostIt.jsx";
import CardColor from "./CardColor";
import Bottom from "./Bottom.jsx";
import "./CSS/Card.css";
import BtnColor from "./BtnColor";

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
      lat: response.data.coord.lat,
      lon: response.data.coord.lon,
    });
  }

  function search(){
    const apiKey = "c7e7b1dfe1e083a5f2e3fd381de969ad";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event){
    event.preventDefault();
    search();
  }
  
  function handleCityChange(event){
    setCity(event.target.value)
  }


  function findMe(event) {
    event.preventDefault();
    navigator.geolocation.getCurrentPosition(function(position) {
    const apiKey = "c7e7b1dfe1e083a5f2e3fd381de969ad";
    let lat = position.coords.latitude; 
    let lon = position.coords.longitude;
    let urlApi= `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`
    axios.get(urlApi).then(handleResponse);
  }); 
  }

 

  if (weatherData.ready){
  return (

    <div className="card" style={CardColor(weatherData)} >
      <div className="Form">
      <form onSubmit={handleSubmit} className="form-city" id="formCity">
        <div className="search-cities">
          <input
            type="text"
            placeholder="Enter a city..."
            className="form-control"
            id="showCity"
            onChange={handleCityChange} />
        </div>
        <input
          type="image"
          alt="Magni"
          src={magni}
          className="magni-img"
          style={BtnColor(weatherData)} />

        <input
          type="image"
          alt="Pin"
          id="btnCurrent"
          src={pin}
          className="pin-img"
          style={BtnColor(weatherData)}
          onClick={findMe} />
      </form>
      <span className="line-top" />
      <br />
      <Weather data={weatherData} />
      <Forecast data={weatherData}/>
      <Image iconData={weatherData} />
      <PostIt iconData={weatherData} />
      <Bottom />
      
    </div>
    </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
