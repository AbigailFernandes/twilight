import React from 'react';
import Album from '../components/Album';

const albums = [
  {
    title: 'Student Portfolio',
    artwork:
      'http://www.jharnashah.com/wp-content/gallery/spa-and-salon/4..jpg',
  },
  {
    title: 'Spa and Salon',
    artwork: 'http://www.jharnashah.com/wp-content/gallery/spa-and-salon/3.jpg',
  },
  { title: 'Jharna shah senior assistants' },
  { title: 'Jharna shah junior make up artist' },
  { title: 'Hair Styling' },
  { title: 'Personal (Self) grooming Workshops' },
  { title: 'Classroom Dairies' },
  { title: 'Jharna Shah' },
];

export default () => (
  <div className="section gallery-container">
    <div className="columns is-multiline albums">
      {albums.map(album => <Album key={album.title} {...album} />)}
    </div>
  </div>
);
