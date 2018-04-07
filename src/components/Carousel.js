import React, { Component } from 'react';
import '../stylesheets/carousel.scss';

class Carousel extends Component {
  containerRef = null;
  childrenRefs = [];

  constructor() {
    super();

    this.goNext = this.goNext.bind(this);
    this.goPrevious = this.goPrevious.bind(this);
    this.getStyles = this.getStyles.bind(this);
  }

  componentDidMount() {
    this.containerRef.style.height = this.childrenRefs[0].offsetHeight + 40 + 'px';
  }

  goNext() {}

  goPrevious() { }
  
  getStyles() {
    return {};
  }

  render() {
    return (
      <div
        className="container is-fluid carousel"
        ref={r => (this.containerRef = r)}>
        {this.props.children.map((child, i) => (
          <div
            className="carousel-item"
            key={i}
            ref={r => (this.childrenRefs[i] = r)}
            style={{ transform: `translateX(${360*i}px)` }}>
            {child}
          </div>
        ))}
        <div className="controls-container">
          <div className="control" onClick={this.goPrevious}>
            &#10094;
          </div>
          <div className="control" onClick={this.goNext}>
            &#10095;
          </div>
        </div>
      </div>
    );
  }
}

export default Carousel;
