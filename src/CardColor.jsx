import React from "react";
import "./CSS/Card.css";

export default function CardColor(props){

    let backgroundColor= props.iconData.icon
    switch(backgroundColor){
    case "01d":
    return "linear-gradient(180deg, rgb(162, 218, 246) 0%, rgb(195, 246, 246) 23%, rgb(250, 245, 245) 90%)";
    case "01n":
      return "linear-gradient(172deg, rgb(27, 39, 122) 0%, rgb(235, 232, 241) 100%)";
    case "02d":
      return "linear-gradient(178deg, rgb(141, 185, 223) 0%, rgb(187, 205, 224) 11%, rgb(245, 248, 250) 65%)";
    case "03d":
      return "linear-gradient(178deg, rgb(141, 185, 223) 0%, rgb(187, 205, 224) 11%, rgb(245, 248, 250) 65%)";
    case "04d":
      return "linear-gradient(178deg, rgb(141, 185, 223) 0%, rgb(187, 205, 224) 11%, rgb(245, 248, 250) 65%)";
    case "02n":
      return "linear-gradient(180deg, rgb(20, 35, 88) 0%, rgb(132, 148, 198) 41%, rgb(225, 237, 227) 100%)";
    case "03n":
      return "linear-gradient(180deg, rgb(20, 35, 88) 0%, rgb(132, 148, 198) 41%, rgb(225, 237, 227) 100%)";
    case "04n":
      return "linear-gradient(180deg, rgb(20, 35, 88) 0%, rgb(132, 148, 198) 41%, rgb(225, 237, 227) 100%)";
    case "09d":
      return "linear-gradient(178deg, rgb(210, 225, 249) 19%, rgb(200, 228, 236) 33%, rgb(245, 248, 250) 65%)";
    case "10d":
      return "linear-gradient(178deg, rgb(177, 189, 220) 5%, rgb(216, 223, 239) 44%, rgb(245, 248, 250) 78%)";
    case "11d":
      return "linear-gradient(161deg, rgb(29, 53, 73) 0%, rgb(200, 211, 224) 73%, rgb(245, 248, 250) 100%)";
    case "13d":
      return "linear-gradient(178deg, rgb(222, 230, 231) 0%, rgb(231, 241, 241) 52%, rgb(245, 248, 250) 100%)";
    default:
      return "linear-gradient(178deg, rgb(183, 190, 183) 0%, rgb(209, 222, 210) 11%, rgb(245, 248, 250) 65%)";
    }
  }