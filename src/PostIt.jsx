import React from "react";
import "./CSS/PostIt.css";
import Pink from "./media/pink-tape.png";

export default function PostIt(props) {

  const codeMapping = {
    "01d": "Life can be beautiful like a sunny day.",
    "01n": "Have you ever noticed how beautiful is the sky covered with stars?",
    "02d":"There's still a blue sky behind these clouds. They will pass...",
    "02n": "Behind these clouds are still stars. They will appear soon...",
    "03d": "There's still a blue sky behind these clouds. They will pass...",
    "03n": "Behind these clouds are still stars. They will appear soon...",
    "04d":"There's still a blue sky behind these clouds. They will pass...",
    "04n": "Behind these clouds are still stars. They will appear soon...",
    "09d": "The rain is so necessary as the sun. There's the right time for everything.",
    "09n": "The rain is so necessary as the sun. There's the right time for everything.",
    "10d": "Listen to the rain...There is a lot of wisdom in it.",
    "10n": "Listen to the rain...There is a lot of wisdom in it.",
    "11d": "Life can be unpredictable as a storm. Always be prepared!",
    "11n": "Life can be unpredictable as a storm. Always be prepared!",
    "13d":"Snow brings the cold, but also an incomparable beauty...Life is also like that.",
    "13n":"Snow brings the cold, but also an incomparable beauty...Life is also like that.",
    "50d": "Everything seems not so clear, but if we wait a bit we will start to understand.",
    "50n": "Everything seems not so clear, but if we wait a bit we will start to understand.",
  };
  let message = codeMapping[props.iconData.icon]
  return (
    <div className="PostIt">
      <p className="motivational" id="message">
        {message}
      </p>
      <img src={Pink} alt="Pink" class="pink-tape-l" />
      <img src={Pink} alt="Pink" class="pink-tape-r" />
    </div>
  );

}