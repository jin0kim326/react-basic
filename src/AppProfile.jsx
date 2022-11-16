import './App.css';
import Profile from './components/Profile';

function AppProfile() {
  return (
    <>
      <Profile
        image='https://images.unsplash.com/photo-1659535973636-6cef468d093b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60'
        name='jinyoung'
        title='frontend developer'
      />
      <Profile
        image='https://images.unsplash.com/photo-1664575602276-acd073f104c1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw2fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60'
        name='kildong'
        title='backend developer'
      />
    </>
  );
}

export default AppProfile;
