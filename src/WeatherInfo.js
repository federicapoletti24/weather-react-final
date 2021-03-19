import React from "react";
import FriendlyDate from "./FriendlyDate";
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
              <img
                src={props.data.iconUrl}
                alt={props.data.description}
                className="float-left"
                id="icon"
              />
              <strong id="temperature">{props.data.temperature}</strong>
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