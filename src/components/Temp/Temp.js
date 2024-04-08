import "./Temp.css"

export function Temp({temp}) {
    if(temp){
        return(
            <p className="temp">{temp}°C</p>
        )
    }
}