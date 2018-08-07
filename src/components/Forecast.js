import React from "react";
import "../css/weather-icons.min.css";

const weatherIcons = {
  Rain: "wi wi-day-rain",
  Sun: "wi wi-day-sunny",
  Clouds: "wi wi-day-cloudy",
  Haze: "wi wi-day-haze",
  Mist: "wi wi-day-fog",
  Fog: "wi wi-day-fog"
};

const Forecast = props => {
  return (
    <div className="forecast">
      <h5>{props.day}</h5>
      <i className={weatherIcons[`${props.weatherType}`]} />
      <p>
        <span>{props.tempMax}&#176; </span> <span>{props.tempMin}&#176;</span>
      </p>
    </div>
  );
};

export default Forecast;
