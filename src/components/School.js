import React, { Component } from 'react';

const K_SIZE = 80;

const style = {
  // left top corner at lat lng
  //
  // initially any map object has left top corner at lat lng coordinates
  // it's on you to set object origin to 0,0 coordinates
  position: 'absolute', // position, abso
  width: K_SIZE, // width = 40
  height: 40, // height = 40
  left: -K_SIZE / 2, // left = -20
  top: -K_SIZE / 2, // top = -20

  border: '1px solid #f44336', // solid border
  borderRadius: 10, // radius.......
  backgroundColor: 'white', // background color
  textAlign: 'center', // text align
  color: '#3f51b5', // color......
  fontSize: 10, // font size
  fontWeight: 'bold', // font weight
  padding: 2, // padding
  cursor: 'pointer' // pointer
};


class School extends Component {
  static defaultProps = {
    text: 'default text'
  };

  render() {
    return (
      <div className="school" style={style}>
        {this.props.text}
      </div>
    );
  }
}

export default School;
