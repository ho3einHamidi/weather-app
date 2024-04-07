import triangleUp from "../../icons/triangle-up.svg"
import triangledown from "../../icons/triangle-down.svg"

import "./MaxMinTemp.css";
export function MaxMinTemp({ minTemp, maxTemp }) {
    if(maxTemp && minTemp){
        return(<div className="parent">
        <div className="max-temp">
          <p>{maxTemp}</p>
          <img src={triangleUp}></img>
        </div>
        <div className="min-temp">
          <p>{minTemp}</p>
          <img src={triangledown} className="chevron-down"></img>
        </div>
      </div>)
    }
}
