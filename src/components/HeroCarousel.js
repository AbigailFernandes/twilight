import React from 'react';
import Carousel from 'nuka-carousel';
import home1 from '../img/home/home-1.jpg';
import home2 from '../img/home/home-2.jpg';
import home3 from '../img/home/home-3.jpg';
import home4 from '../img/home/home-4.jpg';
import home5 from '../img/home/home-5.jpg';

const images = [
  { src: home1 },
  { src: home2 },
  { src: home3 },
  { src: home4 },
  { src: home5 },
];

const HeroCarousel = () => (
  <Carousel autoplay={true} autoplayInterval={2000}>
    {images.map(image => <img key={image.src} {...image} />)}
  </Carousel>
);

export default HeroCarousel;
