import styles from './radioButton.module.css';

export default function RadioButton({ text, valueName, selectedOption, handleOptionChange = () => {}, disabled = false, radioGroup, textInLeft = true, fontSize=25 }) {
  return (
    <label
      style={{flexDirection: (textInLeft) ? 'row-reverse' : 'row'}}
      className={styles.labelRadioButton}>
      <input 
        disabled={disabled} 
        type="radio" 
        value={valueName}
        name={radioGroup} 
        checked={selectedOption === valueName}
        onChange={(e) => handleOptionChange(e.target.value)} />
      <span></span>

      <p className={styles.text} style={{fontSize: fontSize}}>{text}</p>
    </label>
  )
}