import styles from './LoopSlider.module.css';

export default function LoopSlider({ children }) {
  return (
    <div className={`full-width ${styles.slider}`}>
      <div>
        {children}
        {children}
      </div>
    </div>
  );
}
