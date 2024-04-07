import day from "../../icons/weather-static/day.svg"
import cloudy from "../../icons/weather-static/cloudy.svg"
import cloudyNight from "../../icons/weather-static/cloudy-night-1.svg"
import rainy from "../../icons/weather-static/rainy-4.svg"
import snow from "../../icons/weather-static/snowy-4.svg"
import night from "../../icons/weather-static/night.svg"
import "./WeatherImage.css"

export function WeatherImage(props){
    console.log(props.data)
    let source = ""
    // let type = toLowerCase(props.data.type)
    // switch (type) {
    //     case "clouds":
    //         source = cloudy
    //         break;
    
    //     default:
    //         break;
    // }
    return(
        <img className="image" src={source}></img>
    )
}