import React from "react";
import "./CSS/PostIt.css";
import Pink from "./media/pink-tape.png";

export default function PostIt() {
  return (
    <div className="PostIt">
      <p class="motivacional" id="message">
        "Life can be beautiful like a sunny day."
      </p>
      <img src={Pink} alt="Pink" class="pink-tape-l" />
      <img src={Pink} alt="Pink" class="pink-tape-r" />
    </div>
  );
}