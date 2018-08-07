import React, { Component } from "react";
import "./App.css";
import Forecast from "./components/Forecast";

class App extends Component {
  state = {
    forecastResults: [],
    fiveDayForecast: []
  };
  componentDidMount() {
    fetch(
      "https://api.openweathermap.org/data/2.5/forecast?id=524901&appid=8be3d65cca94173480958df7d29d2623"
    )
      .then(res => res.json())
      .then(data =>
        this.setState({
          forecastResults: data.list
        })
      );
  }
  render() {
    return (
      <div className="app">
        <h1>Coming soon</h1>
        <div className="app-results">
          {this.state.forecastResults.map(forecast => {
            return (
              <Forecast
                day={forecast.dt_txt}
                tempMax={forecast.main.temp_max}
                tempMin={forecast.main.temp_min}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default App;
