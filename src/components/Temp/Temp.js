export function Temp({temp}) {
    if(temp){
        return(
            <p>{temp}</p>
        )
    }else{
        return(<p></p>)
    }
}