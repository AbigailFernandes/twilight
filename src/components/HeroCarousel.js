import React from 'react';
import ImageGallery from 'react-image-gallery';
import { images } from '../img/slideshow';
import * as home from '../img/home/';

const HeroCarousel = () => (
  <ImageGallery
    items={images}
    showFullscreenButton={false}
    showBullets={true}
    showThumbnails={false}
    autoPlay={true}
    showPlayButton={false}
  />
);

export default HeroCarousel;
