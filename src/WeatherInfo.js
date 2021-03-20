import React from "react";
import FriendlyDate from "./FriendlyDate";
import WeatherUnit from "./WeatherUnit";
import WeatherIcon from "./WeatherIcon";
export default function WeatherInfo(props) {
    return (
        <div className= "container">
            <h1 id="city">{props.data.city}</h1>
      <ul>
        <li id="date">
          <FriendlyDate date={props.data.date}/>
        </li>
        <li>
          <span id="description">{props.data.description}</span>
        </li>
      </ul>
    <div className="temperature">
        <div className="row">
          <div className="col-6">
            <div className="clearfix temperature">
              <div className="float-left">
              <WeatherIcon code= {props.data.icon} alt={props.data.description}/>
              </div>
             <WeatherUnit celsius= {props.data.temperature}/> 
              
            </div>
          </div>
          <div className="col-6">
            <ul>
               <br /> 
              <li>
                Humidity: <span id="humidity">{props.data.humidity}</span>%
              </li>
              <li>
                Wind: <span id="wind">{props.data.wind}</span> km/h
              </li>
            </ul>
             </div>
          </div>
        </div>
      </div>
    );
}