import React, { Component } from "react";
import "./App.css";
import Forecast from "./components/Forecast";
import { format } from "date-fns";

class App extends Component {
  state = {
    forecastResults: [],
    fiveDayForecast: []
  };
  componentDidMount() {
    fetch(
      "https://api.openweathermap.org/data/2.5/forecast/daily?lat=35&lon=139&cnt=10&appid=14278b5cd4c3f8fc9b0cce818304c84a"
    )
      .then(res => res.json())
      .then(data => console.log(data));
  }
  render() {
    return (
      <div className="app">
        <h1>Coming soon</h1>
        <div className="app-results">
          {this.state.forecastResults.map(forecast => {
            return (
              <Forecast
                key={forecast.dt}
                day={format(forecast.dt_txt, "d/MMM")}
                tempMax={forecast.main.temp_max.toFixed()}
                tempMin={forecast.main.temp_min.toFixed()}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default App;
