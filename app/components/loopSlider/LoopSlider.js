import styles from './LoopSlider.module.css';

export default function LoopSlider({ children }) {
  return (
    <div className='full-width'>
      <div className={styles.slider}>
        {children}
        {children}
      </div>
    </div>
  );
}
