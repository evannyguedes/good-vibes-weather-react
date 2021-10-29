import React from "react";
import "./CSS/PostIt.css";
import Pink from "./media/pink-tape.png";

export default function PostIt(props) {

  return (
    <div className="PostIt">
      <p className="motivational" id="message">
        {message()}
      </p>
      <img src={Pink} alt="Pink" class="pink-tape-l" />
      <img src={Pink} alt="Pink" class="pink-tape-r" />
    </div>
  );

function message(){
  let motivationalMessage= props.iconData.icon
  switch(motivationalMessage){
  case "01d":
  return "Life can be beautiful like a sunny day.";
  case "01n":
    return "Have you ever noticed how beautiful is the sky covered with stars?";
  case "02d":
    return "There's still a blue sky behind these clouds. They will pass...";
  case "03d":
    return "There's still a blue sky behind these clouds. They will pass...";
  case "04d":
    return "There's still a blue sky behind these clouds. They will pass...";
  case "02n":
    return "Behind these clouds are still stars. They will appear soon...";
  case "03n":
    return "Behind these clouds are still stars. They will appear soon...";
  case "04n":
    return "Behind these clouds are still stars. They will appear soon...";
  case "09d":
    return "The rain is so necessary as the sun. There's the right time for everything.";
  case "10d":
    return "Listen to the rain...There is a lot of wisdom in it.";
  case "11d":
    return "Life can be unpredictable as a storm. Always be prepared!";
  case "13d":
    return "Snow brings the cold, but also an incomparable beauty...Life is also like that.";
  default:
    return "Everything seems not so clear, but if we wait a bit we will start to understand.";
  }
}

}