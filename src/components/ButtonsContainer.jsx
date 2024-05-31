import styles from './ButtonsContainer.module.css'
function ButtonsContainer({ OnButttonClick }) {
  // const buttonNames = [1, 2, 3, '+', 4, 5, 6, '-', 7, 8, 9, '*', 'C', 0, '=', "/"];
  const buttonNames = [1, 2, 3, '+', 4, 5, 6, '-', 7, 8, 9, '*', 0, , '(', ')', "/", "AC", ".", "%", "="];
  return <>
    <div className={styles.buttonsContainer} >
      {
        buttonNames.map((item) => (
          <button className={(item == "+" || item == "-" || item == "*" || item == "/" || item == 'AC' || item == "=" || item == "." || item == "%") ? styles.unique : styles.button} onClick={() => OnButttonClick(item)}>{item}</button>
          // <button  className={styles.button} onClick={() => OnButttonClick(item)}>{item}</button>
        ))

      }
    </div>
  </>
}
export default ButtonsContainer;