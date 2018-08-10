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
      "https://api.openweathermap.org/data/2.5/forecast?lat=13&lon=100&appid=8be3d65cca94173480958df7d29d2623&units=metric"
    )
      .then(res => res.json())
      .then(data =>
        //console.log(data)
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
                key={forecast.dt}
                day={format(forecast.dt_txt, "dd")}
                tempMax={forecast.main.temp_max.toFixed()}
                tempMin={forecast.main.temp_min.toFixed()}
                weatherType={forecast.weather[0].main}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default App;
