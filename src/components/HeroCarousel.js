import React from 'react';
import Carousel from 'nuka-carousel';
import * as home from '../img/home/';

const images = [
  { src: home.home1 },
  { src: home.home2 },
  { src: home.home3 },
  { src: home.home4 },
  { src: home.home5 },
];

const HeroCarousel = () => (
  <Carousel autoplay={true} autoplayInterval={2000}>
    {images.map(image => <img key={image.src} {...image} />)}
  </Carousel>
);

export default HeroCarousel;
