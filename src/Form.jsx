import React from "react";
import "./CSS/Form.css";
import pin from "./media/pin.png";
import magni from "./media/magni.png";

export default function Form() {
  return (
    <div className="Form">
      <form className="form-city" id="formCity">
        <div className="search-cities">
          <input
            type="text"
            placeholder="Enter a city..."
            className="form-control"
            id="showCity"
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
    </div>
  );
}
