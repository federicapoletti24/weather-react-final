import React, { useState } from "react";
import "./Forecast.css";
import axios from "axios";

export default function Forecast(props) {
const [loaded, setLoaded] = useState(false);
const [forecast, setForecast] = useState(null);

function handleForecast(response) {
  
  setForecast(response.data)
  setLoaded(true);
}
if (loaded) {
  console.log(forecast);
  return (
    <div className="row forecast">
      <div className="col-3">
        <div className="card">
          <div className="card-body">
08:00
<br />
<img
              src="http://openweathermap.org/img/wn/10d@2x.png"
              alt="partly_cloudy"
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
            12:00
<br />
<img
              src="http://openweathermap.org/img/wn/10d@2x.png"
              alt="partly_cloudy"
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
            16:00
<br />
<img
              src="http://openweathermap.org/img/wn/10d@2x.png"
              alt="partly_cloudy"
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
            22:00
<br />
<img
              src="http://openweathermap.org/img/wn/10d@2x.png"
              alt="partly_cloudy"
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
