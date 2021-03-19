import React from "react";
import axios from "axios";
import "./Temperature.css";
export default function Temperature() {

function handleResponse(response){
  console.log(response.data);
}


  let apiKey = "dc8f5bf2676eeecb4b285e5dcb7dcb71";
  let city = "London";
  let apiUrl =`http.//api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
  axios.get(apiUrl).then(handleResponse);
  return (
    <div className="temperature">
      <div className="description">
        <div className="row">
          <div className="col-6">
            <div className="clearfix temperature">
              <img
                src="http://openweathermap.org/img/wn/01d.png"
                alt="sunny"
                className="float-left"
                id="icon"
              />
              <strong id="temperature">24</strong>
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
                Precipitations: <span id="humidity">61</span>%
              </li>
              <li>
                Wind: <span id="wind">21</span> km/h
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
