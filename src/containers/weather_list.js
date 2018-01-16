import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';
import GoogleMap from '../components/google_map';

class WeatherList extends Component {
  renderWeather(cityData) {
    const name = cityData.city.name
    const temps = _.map(cityData.list.map(weather => weather.main.temp), (temp) => temp * 9/5 - 459.67);
    const pressures = cityData.list.map(weather => weather.main.pressure);
    const humidities = cityData.list.map(weather => weather.main.humidity);
    const { lon, lat } = cityData.city.coord;

    return (
      <tr key={name}>
        <td>
          <GoogleMap lon={lon} lat={lat} />
        </td>

        <td>
          <Chart data={temps} color={"green"} units="F" />
        </td>

        <td>
          <Chart data={pressures} color={"orange"} units="hPa" />
        </td>

        <td>
          <Chart data={humidities} color={"purple"} units="%" />
        </td>
      </tr>
    )
  }

  render() {
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>
              City
            </th>

            <th>
              Temperature (F)
            </th>

            <th>
              Pressure (hPa)
            </th>

            <th>
              Humidity (%)
            </th>
          </tr>
        </thead>

        <tbody>
          {this.props.weather.map(this.renderWeather)}
        </tbody>
      </table>
    )
  }
}

// Pull the weather property off of the state
// The same as (state.weather)
function mapStateToProps({ weather }) {
  // Since the property and key are the same, you can reduce it down to just the name of the key/property
  // { weather } === { weather: weather }
  return { weather };
}

//Connects the data from Redux to the WeatherListthrough the mapStateToProps function
export default connect(mapStateToProps)(WeatherList);
