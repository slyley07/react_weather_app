import React, { Component } from 'react';

class GoogleMap extends Component {
  componentDidMount() {
    new google.maps.Map(this.refs.map, {
      zoom: 12,
      center: {
        lat: this.props.lat,
        lng: this.props.lon
      }
    });
  }
  
  render() {

    // the 'ref' system in React allows us direct reference to an HTML element that has been rendered to the page
    // this component can be referenced with 'this.refs.map'
    return <div ref="map"></div>;
  }
}

export default GoogleMap;
