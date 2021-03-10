import React from "react";
import "./Temperature.css";
export default function Temperature() {
  return (
    <div className="temperature">
      <div className="description">
        <div className="row">
          <div class="col-6">
            <div class="clearfix temperature">
              <img
                src="http://openweathermap.org/img/wn/01d.png"
                alt="sunny"
                class="float-left"
                id="icon"
              />
              <strong id="temperature">24</strong>
              <span class="units">
                °
                <span href="#" id="celsius-link" class="active link">
                  C
                </span>{" "}
                | °
                <span href="#" id="fahrenheit-link" class="link">
                  F
                </span>
              </span>
            </div>
          </div>
          <div class="col-6">
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
