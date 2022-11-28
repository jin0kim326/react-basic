import React, { useState } from 'react';
import styles from './TestComponents.module.css';

export default function TestComponent() {
  const [count, setCount] = useState(0);

  const imgs = [
    '/images/짱이1.jpeg',
    '/images/짱이2.jpeg',
    '/images/짱이3.jpeg',
    '/images/짱이4.jpeg',
  ];

  const handlePrev = () => {
    setCount((prev) => (count === 0 ? imgs.length - 1 : count - 1));
    console.log(count);
  };

  const handleNext = () => {
    setCount((prev) => (imgs.length - 1 === count ? 0 : count + 1));
    console.log(count);
  };

  return (
    <>
      <div>
        <div
          className={styles.mainImg}
          style={{
            backgroundImage: "url('" + imgs[count] + "')",
          }}
        ></div>
      </div>
      <div>
        <button onClick={handlePrev}>prev</button>
        <button onClick={handleNext}>next</button>
      </div>
    </>
  );
}
