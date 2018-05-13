import React from 'react';
import Lightbox from 'react-images';
import { images } from '../img/portfolio';
import '../stylesheets/photo-grid.scss';

function chunk(array, chunkSize = 4) {
  const chunked = [];
  const group = array.length / 4;
  for (let i = 0; i < array.length; i += group) {
    chunked.push(array.slice(i, i + group));
  }
  return chunked;
}

const Photo = ({ src, caption = '', ...otherProps }) => (
  <div className="photo-container" {...otherProps}>
    <figure className="image">
      <img className="photo" src={src} />
      <figcaption className="caption">{caption}</figcaption>
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
    const chunkedPhotos = chunk(images, 4);
    console.log(chunkedPhotos);
    return (
      <div>
        <div className="container photo-grid">
          {
            chunkedPhotos.map((chunk, j) => {
              return (
                <div className="photo-column" key={j}>
                  {chunk.map((img, i) => <Photo key={i} {...img} />)}
                </div>  
              )
            })
          }
        </div>
        <Lightbox
          currentImage={currentImage}
          isOpen={galleryOpen}
          images={images}
          onClose={this.toggleGallery}
          onClickNext={this.goToNext}
          onClickPrev={this.goToPrevious}
        />
      </div>
    );
  }
}

export default PhotoGrid;
