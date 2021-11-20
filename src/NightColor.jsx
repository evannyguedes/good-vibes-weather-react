export default function NightColor (color) {

const codeMapping = {
    "01d": "black",
    "01n": "white",
    "02d": "black",
    "02n": "white",
    "03d": "black",
    "03n": "white",
    "04d": "black",
    "04n": "white",
    "09d": "black",
    "09n": "white",
    "10d": "black",
    "10n": "white",
    "11d": "black",
    "11n": "white",
    "13d": "black",
    "13n": "white",
    "50d": "black",
    "50n": "white",
  };

  let changeColor = codeMapping[color];
  let setColor;
   setColor ={
    color: changeColor
   };
  return setColor
}