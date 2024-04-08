import wind from "../../icons/wind.svg"
import "./Wind.css"
export function Wind({windSpeed}){
    if(windSpeed){
        return(
            <div className="wind">
                <img src={wind}></img>
                <p>{windSpeed} k/h</p>
            </div>
        )
    }
}