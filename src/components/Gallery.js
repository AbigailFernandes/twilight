import React from 'react';
import Album from '../components/Album';
import PhotoGrid from '../components/PhotoGrid';

const albums = [
  { title: 'Student Portfolio', artwork: 'http://www.jharnashah.com/wp-content/gallery/spa-and-salon/4..jpg' },
  { title: 'Spa and Salon', artwork: 'http://www.jharnashah.com/wp-content/gallery/spa-and-salon/3.jpg' },
  { title: 'Jharna shah senior assistants' },
  { title: 'Jharna shah junior make up artist' },
  { title: 'Hair Styling' },
  { title: 'Personal (Self) grooming Workshops' },
  { title: 'Classroom Dairies' },
  { title: 'Jharna Shah' },
]

export default () => (
  <div className="gallery-container">
    <h1 className='title is-4'>Gallery</h1>
    <h2 className='subtitle is-5'>Featured Albums</h2>
    <div className='columns is-multiline albums'>
      {
        albums.map(album => <Album key={album.title} {...album} />)
      }
    </div>
    <PhotoGrid />
  </div>
);
