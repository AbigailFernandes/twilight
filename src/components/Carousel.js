import React, { Component } from 'react';
import '../stylesheets/carousel.scss';

class Carousel extends Component {
  componentDidMount() {}
  render() {
    return (
      <div className="container is-fluid carousel">
        <div className="controls-container">
          <div className="control">&#10094;</div>
          <div className="control">&#10095;</div>
        </div>
        {this.props.children}
      </div>
    );
  }
}

export default Carousel;
