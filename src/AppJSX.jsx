import logo from './logo.svg';
import './App.css';

function AppJSX() {
  const name = '진영';
  const list = ['우유', '딸기', '바나나'];
  return (
    <>
      <h1 className='orange'>{`Hello! ${name}`}</h1>
      <h2>GoodBye, {name}!</h2>
      <img
        style={{ width: '100px', height: '100px' }}
        src='https://images.velog.io/images/lacomaco/post/9f912ca9-98a9-432f-9285-d6fe65b0cd6c/9d0a6780-394a-11eb-9fd1-6296a684b124.jpeg'
        alt='nature'
      />
      <ul>
        {list.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
    </>
  );
}

export default AppJSX;
