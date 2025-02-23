import styles from './radioButton.module.css';

export default function RadioButton({ text, valueName, selectedOption, handleOptionChange = () => {}, disabled = false, radioGroup, textInLeft = true }) {
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
        onChange={handleOptionChange}/>
      <span></span>

      <p className={styles.text}>{text}</p>
    </label>
  )
}