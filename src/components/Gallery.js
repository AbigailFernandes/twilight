import React from 'react';
import Album from '../components/Album';

export default () => (
  <div className="gallery-container">
    <h1 className='title is-4'>Gallery</h1>
    <h2 className='subtitle is-5'>Featured Albums</h2>
    <div className='columns is-multiline albums'>
      <Album title='Student Portfolio' />
      <Album title='Spa and Salon' />
      <Album title='Jharna shah senior assistants' />
      <Album title='Jharna shah junior make up artist' />
      <Album title='Hair Styling' />
      <Album title='Personal (Self) grooming Workshops' />
      <Album title='Classroom Dairies' />
      <Album title='Jharna Shah' />
    </div>
  </div>
);
