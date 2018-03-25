import React from 'react';
import Carousel from 'nuka-carousel';
const images = [
  { src: 'http://placehold.it/1000x400/ffffff/c0392b/&text=slide1' },
  { src: 'http://placehold.it/1000x400/ffffff/c0392b/&text=slide2' },
  { src: 'http://placehold.it/1000x400/ffffff/c0392b/&text=slide3' },
  { src: 'http://placehold.it/1000x400/ffffff/c0392b/&text=slide4' },
  { src: 'http://placehold.it/1000x400/ffffff/c0392b/&text=slide5' },
  { src: 'http://placehold.it/1000x400/ffffff/c0392b/&text=slide6' },
];
const AppCarousel = () => (
  <Carousel
    initialSlideHeight={300}
    wrapAround={true}
    // slidesToShow={3}
    // renderCenterLeftControls={({ previousSlide }) => (
    //   <button onClick={previousSlide}>Previous</button>
    // )}
    // renderCenterRightControls={({ nextSlide }) => (
    //   <button onClick={nextSlide}>Next</button>
    // )}
  >
    {images.map(image => <img key={image.src} {...image} />)}
  </Carousel>
);
export default AppCarousel;
