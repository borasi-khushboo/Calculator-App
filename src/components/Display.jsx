import styles from './Display.module.css';

function Display({ displayValue }) {
  return <>
    <div className={styles.display}>
      <input type="text" readOnly value={displayValue} placeholder='0' />
    </div>
  </>
}
export default Display;