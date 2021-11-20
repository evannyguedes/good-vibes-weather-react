export default function BtnColor(weatherData){
    const codeMapping = {
        "01d": "none",
        "01n": "invert(100%)",
        "02d": "none",
        "02n": "invert(100%)",
        "03d": "none",
        "03n": "invert(100%)",
        "04d": "none",
        "04n": "invert(100%)",
        "09d": "none",
        "09n": "invert(100%)",
        "10d": "none",
        "10n": "invert(100%)",
        "11d": "none",
        "11n": "invert(100%)",
        "13d": "none",
        "13n": "invert(100%)",
        "50d": "none",
        "50n": "invert(100%)",
      };
    
      let changeColor = codeMapping[weatherData.icon];
      let setColor;
       setColor ={
        filter: changeColor
       };
      return setColor
    }