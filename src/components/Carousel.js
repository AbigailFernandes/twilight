import React, { Component } from 'react';
import '../stylesheets/carousel.scss';

class Carousel extends Component {
  containerRef = null;
  childrenRefs = [];

  state = {
    activeItem: 0,
    scrollWidth: 0,
  };

  constructor() {
    super();

    this.goNext = this.goNext.bind(this);
    this.goPrevious = this.goPrevious.bind(this);
  }

  componentDidMount() {
    this.containerRef.style.height =
      this.childrenRefs[0].offsetHeight + 40 + 'px';
    this.setState({ scrollWidth: this.childrenRefs[0].offsetWidth + 80 });
  }

  goNext() {
    this.setState({
      activeItem: (this.state.activeItem + 1) % this.childrenRefs.length,
    });
  }

  goPrevious() {
    this.setState({
      activeItem:
        (this.state.activeItem - 1 + this.childrenRefs.length) %
        this.childrenRefs.length,
    });
  }

  render() {
    const { scrollWidth, activeItem } = this.state;
    const childCount = this.childrenRefs.length;

    return (
      <div
        className="container is-fluid carousel"
        ref={r => (this.containerRef = r)}>
        {this.props.children.map((child, i) => (
          <div
            className="carousel-item"
            key={i}
            ref={r => (this.childrenRefs[i] = r)}
            style={{
              transform: `translateX(
                ${-scrollWidth +
                  scrollWidth *
                    1 *
                    ((i + childCount - activeItem) % childCount)}px)`,
            }}>
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
