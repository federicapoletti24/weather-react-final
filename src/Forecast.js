import React from "react";
import "./Forecast.css";
export default function Forecast() {
  return (
    <div className="row forecast">
      <div className="col-3">
        <div className="card">
          <div className="card-body">
            Thursday
            <br />
            <img
              src="http://openweathermap.org/img/wn/10d@2x.png"
              alt="partly_cloudy"
              className="float-left"
              id="icon-thu"
            />
            <br />
            <span className="forecast-temp">5°</span>
          </div>
        </div>
      </div>
      <div className="col-3">
        <div className="card">
          <div className="card-body">
            Friday
            <br />
            <img
              src="http://openweathermap.org/img/wn/10d@2x.png"
              alt="partly_cloudy"
              className="float-left"
              id="icon-fri"
            />
            <br />
            <span className="forecast-temp">5°</span>
          </div>
        </div>
      </div>
      <div className="col-3">
        <div className="card">
          <div className="card-body">
            Saturday
            <br />
            <img
              src="http://openweathermap.org/img/wn/10d@2x.png"
              alt="partly_cloudy"
              className="float-left"
              id="icon-sat"
            />
            <br />
            <span className="forecast-temp">5°</span>
          </div>
        </div>
      </div>
      <div className="col-3">
        <div className="card">
          <div className="card-body">
            Sunday
            <br />
            <img
              src="http://openweathermap.org/img/wn/10d@2x.png"
              alt="partly_cloudy"
              className="float-left"
              id="icon-san"
            />
            <br />
            <span className="forecast-temp">5°</span>
          </div>
        </div>
      </div>
    </div>
  );
}
