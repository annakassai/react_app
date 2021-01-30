import React from "react"; 
import axios from "axios"; 
import Loader from 'react-loader-spinner'

export default function Weather(props) {
    function handleResponse(response){
    alert (`The temperature in Paris is ${Math.round(response.data.main.temp)}°C`)
    }

    let apiKey = "1fd01a094c047ffda9a1022db88d180b";
    let unit = `metric`;
    let apiEndpoint = "https://api.openweathermap.org/data/2.5/weather";
    let apiUrl = `${apiEndpoint}?q=${props.city}&appid=${apiKey}&units=${unit}`;    
    axios.get(apiUrl).then(handleResponse)
    
    return (
        <Loader
        type="Puff"
        color="#00BFFF"
        height={100}
        width={100}
        timeout={3000} //3 secs

     />
    );
}