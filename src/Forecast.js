import React, { useState } from "react";
import "./Forecast.css";
import axios from "axios";
import Hours from "./Hours";

export default function Forecast(props) {
const [loaded, setLoaded] = useState(false);
const [forecast, setForecast] = useState(null);


function handleForecast(response) {
  setForecast(response.data);
  setLoaded(true);
}
if (loaded) {
  return (
    <div className="row forecast">
      <div className="col-3">
        <div className="card">
          <div className="card-body">
<Hours data={forecast.list[0]}/>
<br />
<img
            src="http://openweathermap.org/img/wn/10d@2x.png"
              alt="partly cloudy"
              className="float-left"
              id="icon-thu"
            />
<br />
    <span className="forecast-temp">{Math.round(forecast.list[0].main.temp)}°C</span>
    </div>
    </div>
    </div>
    <div className="col-3">
        <div className="card">
          <div className="card-body">
<Hours data={forecast.list[2]}/>
<br />
<img
              src="http://openweathermap.org/img/wn/10d@2x.png"
              alt="partly cloudy"
              className="float-left"
              id="icon-thu"
            />
<br />
    <span className="forecast-temp">{Math.round(forecast.list[1].main.temp)}°C</span>
    </div>
    </div>
    </div>
          <div className="col-3">
        <div className="card">
          <div className="card-body">
<Hours data={forecast.list[4]}/>
<br />
<img
              src="http://openweathermap.org/img/wn/10d@2x.png"
              alt="partly cloudy"
              className="float-left"
              id="icon-thu"
            />
<br />
    <span className="forecast-temp">{Math.round(forecast.list[2].main.temp)}°C</span>
    </div>
    </div>
    </div>
<div className="col-3">
        <div className="card">
          <div className="card-body">
<Hours data={forecast.list[6]}/>
<br />
<img
              src="http://openweathermap.org/img/wn/10d@2x.png"
              alt="partly cloudy"
              className="float-left"
              id="icon-thu"
            />
<br />
    <span className="forecast-temp">{Math.round(forecast.list[3].main.temp)}°C</span>
    </div>
    </div>
    </div>

    </div>
  )
} else {

  let apiKey = "dc8f5bf2676eeecb4b285e5dcb7dcb71";
  let url=`https://api.openweathermap.org/data/2.5/forecast?q=${props.city}&appid=${apiKey}&units=metric`;
  axios.get(url).then(handleForecast);

  return null;
  
}

 
}
