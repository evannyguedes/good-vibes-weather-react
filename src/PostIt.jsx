import React from "react";
import "./CSS/PostIt.css";
import Pink from "./media/pink-tape.png";

export default function PostIt(props) {

  const codeMapping = {
    "01d": "Life can be beautiful like a sunny day.",
    "01n": "Have you ever noticed how beautiful is the sky covered with stars?",
    "02d":"There's still a blue sky behind these clouds. They will pass...",
    "02n": "There's still stars behind these clouds. They will appear soon...",
    "03d": "There's still a blue sky behind these clouds. They will pass...",
    "03n": "There's still stars behind these clouds. They will appear soon...",
    "04d":"There's still a blue sky behind these clouds. They will pass...",
    "04n": "There's still stars behind these clouds. They will appear soon...",
    "09d": "The rain is so necessary as the sun. There's the right time for everything.",
    "09n": "The rain is so necessary as the sun. There's the right time for everything.",
    "10d": "Listen to the rain...There is a lot of wisdom in it.",
    "10n": "Listen to the rain...There is a lot of wisdom in it.",
    "11d": "Life can be unpredictable as a storm. Always be prepared!",
    "11n": "Life can be unpredictable as a storm. Always be prepared!",
    "13d":"Snow brings the cold, but also beauty...Try to see the bright side, always!",
    "13n":"Snow brings the cold, but also beauty...Try to see the bright side, always!",
    "50d": "Everything seems blurry now, but be paticence... You'll start to see...",
    "50n": "Everything seems blurry now, but be paticence... You'll start to see...",
  };
  let message = codeMapping[props.iconData.icon]
  return (
    <div className="PostIt">
      <p className="motivational" id="message">
        {message}
      </p>
      <img src={Pink} alt="Pink" className="pink-tape-l" />
      <img src={Pink} alt="Pink" className="pink-tape-r" />
    </div>
  );

}