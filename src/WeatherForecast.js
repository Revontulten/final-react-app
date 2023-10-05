import React, { useState } from "react";
//import WeatherInfo from "./WeatherInfo";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast() {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);
  function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }

  if (loaded) {
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
              <span className="WeatherForecast-temp-max">
                {Math.round(forecast[0].temperature.maximum)}°{" "}
              </span>
              <span className="WeatherForecast-temp-min">10°</span>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    let apiKey = "649131ffb5104af63a3o00f6aa84e7t1";
    let city = "Kilkenny";
    let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${city}&key=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);
    return null;
  }
}
