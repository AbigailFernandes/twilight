import React from 'react';
import Lightbox from 'react-images';
import { images } from '../img/home';
import '../stylesheets/photo-grid.scss';

const Photo = ({ src, ...otherProps }) => (
  <div className='photo-container' {...otherProps}>
    <figure className='image'>  
      <img className='photo' src={src} />
    </figure>  
  </div>
);

class PhotoGrid extends React.Component {
  state = {
    galleryOpen: false,
    currentImage: 0,
  };

  constructor() {
    super();

    this.toggleGallery = this.toggleGallery.bind(this);
    this.goToNext = this.goToNext.bind(this);
    this.goToPrevious = this.goToPrevious.bind(this);
  }

  goToNext() {
    this.setState({
      currentImage: (this.state.currentImage + 1) % images.length,
    });
  }

  goToPrevious() {
    this.setState({
      currentImage: (this.state.currentImage - 1) % images.length,
    });
  }

  selectImage(index) {
    this.setState({ currentImage: index, galleryOpen: true });
  }

  toggleGallery() {
    this.setState({ galleryOpen: !this.state.galleryOpen });
  }

  render() {
    const { currentImage, galleryOpen } = this.state;

    return (
      <section className='section'>
        <div className='container is-fluid photo-grid'>
          {images.map((img, i) => (
            <Photo key={i} {...img} onClick={() => this.selectImage(i)} />
          ))}
        </div>
        <Lightbox
          currentImage={currentImage}
          isOpen={galleryOpen}
          images={images}
          onClose={this.toggleGallery}
          onClickNext={this.goToNext}
          onClickPrev={this.goToPrevious}
        />
      </section>
    );
  }
}

export default PhotoGrid;
