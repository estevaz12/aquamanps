import styles from './BigNum.module.css';

export default function BigNum({ num, caption }) {
  return (
    <div>
      <article className={styles.bigNumContainer}>
        <h1 className={styles.bigNum}>{num}+</h1>
      </article>
      <h5>{caption}</h5>
    </div>
  );
}
