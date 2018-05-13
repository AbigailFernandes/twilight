import React from 'react';
import ImageGallery from 'react-image-gallery';
import { images } from '../img/slideshow';
import * as home from '../img/home/';

const HeroCarousel = () => (
  // <Carousel autoplay={true} autoplayInterval={2000}>
  //   {images.map(image => (
  //     <img className="carousel-image" key={image.src} {...image} />
  //   ))}
  // </Carousel>
  <ImageGallery items={images} />
);

export default HeroCarousel;
