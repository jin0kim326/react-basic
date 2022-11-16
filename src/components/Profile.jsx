import React from 'react';
import Avatar from './Avatar';

export default function Profile({ image, name, title, isNew }) {
  return (
    <div className='profile'>
      <Avatar image={image} isNew={isNew} />
      {/* <img className='photo' src={image} alt='avatar' />
      {isNew && <span className='new'>new</span>} */}
      <h1>{name}</h1>
      <p>{title}</p>
    </div>
  );
}
