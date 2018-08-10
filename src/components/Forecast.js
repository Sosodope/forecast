import React from "react";
import { Grid } from "react-bootstrap";
import "../css/weather-icons.min.css";

const weatherIcons = {
  Rain: "wi wi-day-rain",
  Sun: "wi wi-day-sunny",
  Clouds: "wi wi-day-cloudy",
  Haze: "wi wi-day-haze",
  Mist: "wi wi-day-fog",
  Fog: "wi wi-day-fog"
};

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    width: 100
  },
  dayHeading: {
    paddingBottom: 0,
    paddingTop: 8
  },
  forecastImage: {
    padding: 0
  }
});

class Forecast extends React.Component {
  retrieveDayName(dayNumber) {
    let dayArray = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ];
    return dayArray[dayNumber];
  }

  retrieveIconURL(icon) {
    return "http://openweathermap.org/img/w/" + icon + ".png";
  }

  render() {
    return (
      <React.Fragment>
        <Grid>
          <Grid item xs={12}>
            <h3 variant="subheading" align="center">
              {this.retrieveDayName(this.props.day)}
            </h3>
          </Grid>
          <Grid item xs={12}>
            <Grid container justify="center">
              <img
                src={this.retrieveIconURL(this.props.icon)}
                alt={this.props.weather}
                height="100"
                width="100"
              />
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <h3 variant="subheading" align="center">
              {this.props.weather}
            </h3>
          </Grid>
        </Grid>
      </React.Fragment>
    );
  }
}

export default Forecast;
