'use client';

import { useEffect, useState } from 'react';
import styles from './BigNum.module.css';
import VisChecker from '../VisChecker/VisChecker';

export default function BigNum({ num, caption }) {
  const [count, setCount] = useState(0);
  const [hasReset, setHasReset] = useState(false);
  const placeholder = <h1 className={styles.bigNum}>0</h1>;

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCount(count + 1);
    }, 10);

    if (count === num) clearInterval(intervalId);

    return () => clearInterval(intervalId);
  }, [count, num]);

  function handleVisibility(isVisible) {
    if (isVisible && !hasReset) {
      setCount(0);
      setHasReset(true);
    }
  }

  return (
    <div>
      <article className={styles.bigNumContainer}>
        <VisChecker
          placeholder={placeholder}
          onVisibleChange={handleVisibility}
        >
          <h1 className={styles.bigNum}>{count}+</h1>
        </VisChecker>
      </article>
      <br />
      <h5>{caption}</h5>
    </div>
  );
}

// TODO: start the animation when in the viewport
