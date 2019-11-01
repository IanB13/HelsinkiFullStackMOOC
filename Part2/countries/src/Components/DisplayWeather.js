import React, {useState,useEffect} from 'react'
import Axios from 'axios'

const DisplayWeather =({cityName}) =>{
const [weather, setWeather] = useState({}) ;

const params = {
   access_key: 'e2a9082aeab6001ada50ee9c8fb33b2e',
   query : cityName

}

useEffect( ()=>{
    const fetchData = async () =>{
        const apiResponse = await Axios.get(
            'http://api.weatherstack.com/current',{params}
        )
        setWeather(apiResponse.data)
        console.log(apiResponse.data)
 } 
fetchData();
}
,[])
console.log("waether is")
console.log(weather)
if(Object.entries(weather).length===0){
    return(<div>
        loading...
    </div>)

}else{
return(
    <div>
        <h2>Weather in {cityName}</h2>
        <p> <b>Temperature:</b> {weather.current.temperature} C° </p>
        <img  alt="weather Icon" src ={weather.current.weather_icons[0]}></img>
        
        <p> <b>Wind:</b> {weather.current.wind_speed} kph direction {weather.current.wind_dir} </p>
        

    </div>
)
    }
}

export default DisplayWeather