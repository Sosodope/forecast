import React, { Component } from "react";
import "./App.css";
import Forecast from "./components/Forecast";
import { Grid, Button } from "react-bootstrap";

class App extends Component {
  static API_KEY = "dfcc38b706ec5863b0dace9102f3740d";
  state = {
    forecastResults: [],
    zipCode: "52241"
  };
  componentDidMount() {
    this.getForecast();
  }
  getForecast = () => {
    fetch(
      "https://api.openweathermap.org/data/2.5/forecast?lat=13&lon=100&appid=" +
        App.API_KEY +
        "&units=metric"
    )
      .then(res => res.json())
      .then(data => {
        let truncatedData = data.list.filter(entry =>
          entry.dt_txt.includes("12:00:00")
        );
        console.log(truncatedData);
        let forecastResults = [];
        truncatedData.forEach((elem, index) => {
          let day = new Date(elem.dt_txt).getDay();
          let currentElemWeather = elem.weather[0];
          let dailyForecast = {
            key: index,
            day: day,
            weather: currentElemWeather,
            icon: currentElemWeather.icon
          };
          forecastResults.push(dailyForecast);
        });
        this.setState({ forecastResults: forecastResults });
      });
  };
  render() {
    return (
      <React.Fragment>
        <h3 variant="display4" align="center">
          Forecast
        </h3>

        <Grid container spacing={16}>
          <Grid item xs={12}>
            <Grid container justify="center">
              <input
                label="Zip Code"
                value={this.state.zipCode}
                onChange={evt => this.updateZipCode(evt)}
              />
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Grid container justify="center">
              <Button
                variant="contained"
                color="primary"
                onClick={this.refreshForecast}
              >
                Refresh
              </Button>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Grid container justify="center" spacing={16}>
              {this.state.forecastResults.map(value => (
                <Grid key={value.key} item>
                  <Forecast
                    day={value.day}
                    weather={value.weather}
                    value={value.key}
                    icon={value.icon}
                  />
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </React.Fragment>
    );
  }
}

export default App;
