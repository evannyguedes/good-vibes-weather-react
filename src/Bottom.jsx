import React from "react";
import "./CSS/Bottom.css";
import Github from "./media/github.png";
import Linkedin from "./media/linkedin.png";
import Pixabay from "./media/mj.png";

function goGitHub(){
  return window.open("https://github.com/evannyguedes/Good-vibes-weather-app", "_blank")}

  function goLinkedin(){
    return window.open("https://www.linkedin.com/in/%C3%A9vanny-guedes-belarmino-971777123/", "_blank")}
  
    function goMJ(){
      return window.open("https://pixabay.com/pt/users/la_petite_femme-2212305/", "_blank")}

export default function Bottom() {
  return (
    <div className="Bottom">
      <input
        type="image"
        src={Github}
        alt="Github"
        className="sticker-git"
        onClick={goGitHub}
      />
      <div className="hide-git">Open-source code, by Évanny Belarmino</div>

      <input
        type="image"
        alt="Linkedin"
        src={Linkedin}
        className="sticker-lkd"
        onClick={goLinkedin}
      />
      <div className="hide-lkd">Follow me</div>
      <input
        type="image"
        alt="Pixabay"
        src={Pixabay}
        className="sticker-mj"
        onClick={goMJ}
      />
      <div className="hide-mj">Images by Mj Jin from Pixabay</div>
    </div>
  );
}
