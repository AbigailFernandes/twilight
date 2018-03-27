import React, { Component } from 'react';

class Carousel extends Component {
  render() {
    return (
      <div className='container carousel'>
        {this.props.children}
      </div>
    )
  }
}

export default Carousel;
