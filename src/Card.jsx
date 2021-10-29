import React from "react";
import "./CSS/Card.css";
import Form from "./Form.jsx";


import Bottom from "./Bottom.jsx";

export default function Card() {
  return (
    <div
      className="card"
      style={{
        background:
          "linear-gradient(180deg, rgb(162, 218, 246) 0%, rgb(195, 246, 246) 23%, rgb(250, 245, 245) 90%)"
      }}
    >
      <Form defaultCity="Berlin"/>
      <Bottom />
    </div>
  );
}