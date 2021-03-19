import React from "react";
import axios from "axios";
import "./Temperature.css";
import { useState } from "react";
import FriendlyDate from "./FriendlyDate";


export default function Temperature(props) {
  const[ready, setReady] = useState(false);
const [weather, setWeather] = useState({});
function handleResponse(response){
  console.log(response.data);
  setWeather({
    date: new Date(response.data.dt * 1000),
    temperature:Math.round(response.data.main.temp),
    wind:Math.round(response.data.wind.speed),
    city: response.data.name,
    humidity: response.data.main.humidity,
    description: response.data.weather[0].description,
    iconUrl: "http://openweathermap.org/img/wn/01d.png"
  })
  setReady(true);
}

if (ready) {return (
  <div className="weather">
    <div className="header">
  <h1 id="city">{weather.city}</h1>
      <ul>
        <li id="date">
          <FriendlyDate date={weather.date}/>
        </li>
        <li>
          <span id="description">{weather.description}</span>
        </li>
      </ul>
      </div>
    <div className="temperature">
      <div className="description">
        <div className="row">
          <div className="col-6">
            <div className="clearfix temperature">
              <img
                src={weather.iconUrl}
                alt={weather.description}
                className="float-left"
                id="icon"
              />
              <strong id="temperature">{weather.temperature}</strong>
              <span className="units">
                °
                <span href="#" id="celsius-link" className="active link">
                  C
                </span>{" "}
                | °
                <span href="#" id="fahrenheit-link" className="link">
                  F
                </span>
              </span>
            </div>
          </div>
          <div className="col-6">
            <ul>
              <li>
                Humidity: <span id="humidity">{weather.humidity}</span>%
              </li>
              <li>
                Wind: <span id="wind">{weather.wind}</span> km/h
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
  
} else {

  let apiKey = "dc8f5bf2676eeecb4b285e5dcb7dcb71";
  let apiUrl =`http://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(handleResponse);
  return "Loading..."
}
 
  
}
