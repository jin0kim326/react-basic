import React from 'react';

export default function Profile() {
  return (
    <div className='profile'>
      <img
        className='photo'
        src='https://images.unsplash.com/photo-1659535973636-6cef468d093b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60'
        alt='avatar'
      />
      <h1>Jinyoung</h1>
      <p>frontend developer</p>
    </div>
  );
}
