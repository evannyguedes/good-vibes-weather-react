import React from "react";
import "./CSS/Image.css";
import sunny from "./media/sunny-image.png";

export default function Image() {
  return (
    <div className="Image">
      <img id="icon" alt="background" src={sunny} className="weather-img" />
    </div>
  );
}
