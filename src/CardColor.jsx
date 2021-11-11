export default function CardColor(weatherData){

    //let backgroundColor=  "01d";
    let backgroundColor=  weatherData.icon;
    let custom_style;
    switch(backgroundColor){
    case "01d":

      custom_style = {
        background:"linear-gradient(180deg, rgb(162, 218, 246) 0%, rgb(195, 246, 246) 23%, rgb(250, 245, 245) 90%)"
      }
      return custom_style
    case "01n":
      custom_style = {
        background:"linear-gradient(172deg, rgb(27, 39, 122) 0%, rgb(235, 232, 241) 100%)"
      }
      return custom_style
    case "02d":
      custom_style = {
        background:"linear-gradient(178deg, rgb(141, 185, 223) 0%, rgb(187, 205, 224) 11%, rgb(245, 248, 250) 65%)"
      }
      return custom_style
    case "03d":
      custom_style = {
        background:"linear-gradient(178deg, rgb(141, 185, 223) 0%, rgb(187, 205, 224) 11%, rgb(245, 248, 250) 65%)"
      }
      return custom_style
    case "04d":
      custom_style = { 
        background:"linear-gradient(178deg, rgb(141, 185, 223) 0%, rgb(187, 205, 224) 11%, rgb(245, 248, 250) 65%)"
      }
      return custom_style
    case "02n":
      custom_style = {
        background:"linear-gradient(180deg, rgb(20, 35, 88) 0%, rgb(132, 148, 198) 41%, rgb(225, 237, 227) 100%)"
      }
      return custom_style
 
    case "03n":
      custom_style = { 
        background:"linear-gradient(180deg, rgb(20, 35, 88) 0%, rgb(132, 148, 198) 41%, rgb(225, 237, 227) 100%)"
      }
      return custom_style
    case "04n":
      custom_style = { 
        background:"linear-gradient(180deg, rgb(20, 35, 88) 0%, rgb(132, 148, 198) 41%, rgb(225, 237, 227) 100%)"
      }
      return custom_style
    case "09d":
      custom_style = {
        background:"linear-gradient(178deg, rgb(210, 225, 249) 19%, rgb(200, 228, 236) 33%, rgb(245, 248, 250) 65%)"
      }
      return custom_style
    case "10d":
      custom_style = {
        background:"linear-gradient(178deg, rgb(177, 189, 220) 5%, rgb(216, 223, 239) 44%, rgb(245, 248, 250) 78%)"
      }
      return custom_style
    case "11d":
      custom_style = {
        background:"linear-gradient(161deg, rgb(29, 53, 73) 0%, rgb(200, 211, 224) 73%, rgb(245, 248, 250) 100%)"
      }
      return custom_style
    case "13d":
      custom_style = {
        background:"linear-gradient(178deg, rgb(222, 230, 231) 0%, rgb(231, 241, 241) 52%, rgb(245, 248, 250) 100%)"
      }
      return custom_style
    default:
      custom_style = {
        background:"linear-gradient(178deg, rgb(183, 190, 183) 0%, rgb(209, 222, 210) 11%, rgb(245, 248, 250) 65%)"
      }
        return custom_style 
    }
}