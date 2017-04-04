import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
// watcher
import { observer } from 'mobx-react';

import School from './components/School';

import './App.css';

@observer
class App extends Component {
  static defaultProps = {
    center: {lat: -37.8136, lng: 144.9631},
    zoom: 11
  };

  render() {
    let schoolDisplay;

    if(!this.props.data.is_loading) {
      console.log(this.props.data.schools);

      schoolDisplay = this.props.data.schools.map( (school, index) => {
        let schoolName = school.schoolName.replace(' Victoria Australia', '');
        // https://stackoverflow.com/questions/5217557/how-can-i-remove-chars-between-indexes-in-a-javascript-string
        let myindex = schoolName.indexOf(',VIC');
        let lastpart = schoolName.substr(myindex);
        schoolName = schoolName.replace(lastpart, '');

        let mytext = schoolName + ' ' + school.score;
        return (
          <School
            key={index}
            lat={school.latLng.lat}
            lng={school.latLng.lng}
            text={mytext}
          />
        )
      });
    }
    else {

    }

    //console.log('-- test --');
    //console.log(schoolDisplay);

    return (
      <div className="App">
        <GoogleMapReact
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          { schoolDisplay }
        </GoogleMapReact>

        <div className="explain">
          <p>test....</p>

        </div>
      </div>
    );
  }
}

export default App;
