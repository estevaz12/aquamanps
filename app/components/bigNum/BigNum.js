'use client';

import { useEffect, useState, useRef } from 'react';
import styles from './BigNum.module.css';
import VisChecker from '../VisChecker/VisChecker';

export default function BigNum({ num, caption, interval }) {
  const [count, setCount] = useState(0);
  const [hasReset, setHasReset] = useState(false);
  const ref = useRef(null);
  const placeholder = <h1 className={styles.bigNum}>{num}+</h1>;

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCount(count + 1);
    }, interval);

    if (count === num) {
      clearInterval(intervalId);

      if (hasReset)
        ref.current.style.animation = `${styles.burst} 500ms linear 1 normal`;
    }

    return () => clearInterval(intervalId);
  }, [count]);

  function handleVisibility(isVisible) {
    if (isVisible && !hasReset) {
      setCount(0);
      setHasReset(true);
    }
  }

  return (
    <div>
      <article className={styles.bigNumContainer} ref={ref}>
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
