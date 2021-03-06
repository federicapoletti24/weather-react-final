import React from "react";
import axios from "axios";
import "./Temperature.css";
import { useState } from "react";
import WeatherInfo from "./WeatherInfo";
import Forecast from "./Forecast";


export default function Temperature(props) {
  const[ready, setReady] = useState(false);
const [weather, setWeather] = useState({});
const [city, setCity] = useState(props.defaultCity);
function handleResponse(response){
  console.log(response.data);
  setWeather({
    date: new Date(response.data.dt * 1000),
    temperature:Math.round(response.data.main.temp),
    wind:Math.round(response.data.wind.speed),
    city: response.data.name,
    humidity: response.data.main.humidity,
    description: response.data.weather[0].description,
    icon: response.data.weather[0].icon
  })
  setReady(true);
}
function search() {
  let apiKey = "dc8f5bf2676eeecb4b285e5dcb7dcb71";
  let apiUrl =`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(handleResponse);

}
function handleSubmit(event) {
  event.preventDefault();
search();

}

function handleCityChange(event) {
setCity(event.target.value);
}

if (ready) {return (
  <div className="weather">
    <div className="header">
       <form onSubmit={handleSubmit} id="search-form">
      <div className="container">
      <div className="row">
        <div className="col-8">
          <input
            type="search"
            className="form-control"
            placeholder="Search a city"
            id="city-input"
            onChange={handleCityChange}
          />
        </div>
        <div className="col-4">
          <input type="submit" value="Search" className="btn btn-primary w-100" />
        </div>
      </div>
      </div>
    </form>
   <WeatherInfo data={weather}/> 
   <Forecast city={weather.city}/>
    </div>
    </div>
    );
  
} else {

search();
  return "Loading..."
}
 
  
}
