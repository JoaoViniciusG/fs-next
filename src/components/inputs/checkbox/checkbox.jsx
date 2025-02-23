import styles from './checkbox.module.css';

export default function CheckBox({ value, setValue, text, className = null, disabled = false, textInLeft = false }) {

  return (
    <label 
      style={{flexDirection: (!textInLeft) ? 'row' : 'row-reverse'}}
      className={`${styles.labelCheckbox} ${className}`}>
      <input disabled={disabled} type="checkbox" checked={value} onChange={() => setValue(!value)} />
      <span></span>

      <p className={styles.text}>{text}</p>
    </label>
  )
}