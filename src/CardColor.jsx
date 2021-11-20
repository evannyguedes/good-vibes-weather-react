export default function CardColor(weatherData){
  const codeMapping = {
    "01d": "linear-gradient(180deg, rgb(162, 218, 246) 0%, rgb(195, 246, 246) 23%, rgb(250, 245, 245) 90%)",
    "01n": "linear-gradient(172deg, rgb(27, 39, 122) 0%, rgb(235, 232, 241) 100%)",
    "02d": "linear-gradient(178deg, rgb(141, 185, 223) 0%, rgb(187, 205, 224) 11%, rgb(245, 248, 250) 65%)",
    "02n": "linear-gradient(180deg, rgb(20, 35, 88) 0%, rgb(132, 148, 198) 41%, rgb(225, 237, 227) 100%)",
    "03d": "linear-gradient(178deg, rgb(141, 185, 223) 0%, rgb(187, 205, 224) 11%, rgb(245, 248, 250) 65%)",
    "03n": "linear-gradient(180deg, rgb(20, 35, 88) 0%, rgb(132, 148, 198) 41%, rgb(225, 237, 227) 100%)",
    "04d": "linear-gradient(178deg, rgb(141, 185, 223) 0%, rgb(187, 205, 224) 11%, rgb(245, 248, 250) 65%)",
    "04n": "linear-gradient(180deg, rgb(20, 35, 88) 0%, rgb(132, 148, 198) 41%, rgb(225, 237, 227) 100%)",
    "09d": "linear-gradient(178deg, rgb(210, 225, 249) 19%, rgb(200, 228, 236) 33%, rgb(245, 248, 250) 65%)",
    "09n": "linear-gradient(180deg, rgb(92, 92, 109) 30%, rgb(100, 100, 150) 97%)",
    "10d": "linear-gradient(178deg, rgb(177, 189, 220) 5%, rgb(216, 223, 239) 44%, rgb(245, 248, 250) 78%)",
    "10n": "linear-gradient(180deg, rgb(114, 114, 138) 30%, rgb(106, 106, 170) 97%)",
    "11d": "linear-gradient(161deg, rgb(29, 53, 73) 0%, rgb(200, 211, 224) 73%, rgb(245, 248, 250) 100%)",
    "11n": "linear-gradient(161deg, rgb(29, 53, 73) 0%, rgb(200, 211, 224) 73%, rgb(245, 248, 250) 100%)",
    "13d": "linear-gradient(178deg, rgb(222, 230, 231) 0%, rgb(231, 241, 241) 52%, rgb(245, 248, 250) 100%)",
    "13n": "linear-gradient(180deg, rgb(152, 152, 161) 18%, rgb(200, 203, 221) 35%, rgb(244, 246, 255) 67%)",
    "50d": "linear-gradient(178deg, rgb(183, 190, 183) 0%, rgb(209, 222, 210) 11%, rgb(245, 248, 250) 65%)",
    "50n": "linear-gradient(180deg, rgb(123, 123, 146) 19%, rgb(172, 179, 173) 59%, rgb(232, 236, 233) 97%)",
  };
    
    let backgroundColor=  codeMapping[weatherData.icon];
    let customStyle;
      customStyle = {
        background: backgroundColor
      };
    return customStyle
}