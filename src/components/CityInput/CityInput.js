import "./CityInput.css"
export const CityInput = (props)=>{

    return(
        <input onChange={(e)=>props.onChange(e.target.value)} placeholder="Enter City Name..."></input>
    )
}