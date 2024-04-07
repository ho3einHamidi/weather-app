import day from "../../icons/weather-static/day.svg";
import cloudy from "../../icons/weather-static/cloudy.svg";
import cloudyNight from "../../icons/weather-static/cloudy-night-1.svg";
import rainy from "../../icons/weather-static/rainy-4.svg";
import snow from "../../icons/weather-static/snowy-4.svg";
import night from "../../icons/weather-static/night.svg";
import "./WeatherImage.css";
import { useState } from "react";

const getImageFromType = (type) => {
    switch (type) {
        case "clouds":
            return cloudy 
        case "clear":
            return day 
        case "snow":
            return snow 
        default:
            break;
    }
}

export function WeatherImage({type}) {
    if(!type){
        return <p>Search city name</p>
    }
    return<img className="image" src={getImageFromType(type.toLowerCase())}></img>;
  
}
