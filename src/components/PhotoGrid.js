import React from 'react';
import Lightbox from 'react-images';
import '../stylesheets/photo-grid.scss';

function chunk(array, chunkSize = 4) {
  const columns = Array(chunkSize)
    .fill(0)
    .map(_ => []);
  for (let i = 0; i < array.length; i++) {
    const column = i % chunkSize;
    columns[column].push(array[i]);
  }
  return columns;
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
    this.getPhotos = this.getPhotos.bind(this);
  }

  goToNext() {
    this.setState({
      currentImage: (this.state.currentImage + 1) % this.props.photos.length,
    });
  }

  goToPrevious() {
    this.setState({
      currentImage: (this.state.currentImage - 1) % this.props.photos.length,
    });
  }

  selectImage(index) {
    this.setState({ currentImage: index, galleryOpen: true });
  }

  toggleGallery() {
    this.setState({ galleryOpen: !this.state.galleryOpen });
  }

  getPhotos() {
    const chunkedPhotos = chunk(this.props.photos, 4);

    return chunkedPhotos.map((chunk, j) => (
      <div className="photo-column" key={j}>
        {chunk.map((img, i) => (
          <Photo
            key={i}
            src={img.thumbnail}
            onClick={() => this.selectImage(i * chunkedPhotos.length + j)}
          />
        ))}
      </div>
    ));
  }

  render() {
    const { currentImage, galleryOpen } = this.state;

    return (
      <div>
        <div className="container photo-grid">{this.getPhotos()}</div>
        <Lightbox
          currentImage={currentImage}
          isOpen={galleryOpen}
          images={this.props.photos}
          onClose={this.toggleGallery}
          onClickNext={this.goToNext}
          onClickPrev={this.goToPrevious}
        />
      </div>
    );
  }
}

export default PhotoGrid;
