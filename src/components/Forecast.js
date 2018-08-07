import React from "react";
import "../css/weather-icons.min.css";

const Forecast = props => {
  return (
    <div className="forecast">
      <h5>{props.day}</h5>
      <i className="wi wi-night-sleet" />
      <p>
        <span>{props.tempMax}&#176; </span> <span>{props.tempMin}&#176;</span>
      </p>
    </div>
  );
};

export default Forecast;
