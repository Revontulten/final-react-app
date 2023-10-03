import React from "react";
//import WeatherInfo from "./WeatherInfo";
import "./WeatherForecast.css";

export default function WeatherForecast(props) {
  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          <div className="WeatherForecast-day">Mon</div>
          <div className="WeatherForecast-icon">
            <img
              src="https://openweathermap.org/img/wn/10d@2x.png"
              alt=""
              width="36"
            />
          </div>
          <div className="WeatherForecast-temp">
            <span className="WeatherForecast-temp-max">20° </span>
            <span className="WeatherForecast-temp-min">10°</span>
          </div>
        </div>
      </div>
    </div>
  );
}
