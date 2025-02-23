import { useState } from 'react';
import styles from './inputLogin.module.css';

import * as Icon from 'react-feather';

export default function InputLogin({ label, placeholder, value, setValue, isPassword = false}) { 
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className={styles.containerMaster}>
      <h3 className={styles.inputLabel}>{label}</h3>
      
      <input 
        className={styles.input}
        placeholder={placeholder}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        type={(isPassword && showPassword) ? 'password' : 'text'} />

      <button
        className={styles.buttonPassword}
        onClick={() => setShowPassword(!showPassword)}
        style={{display: (isPassword) ? "block" : "none"}}>
        {
          !showPassword ?
          <Icon.EyeOff
            className={`bi bi-eye${!showPassword ? "-slash":""} ${styles.iconEye}`}/>
            :
          <Icon.Eye
            className={`bi bi-eye${!showPassword ? "-slash":""} ${styles.iconEye}`}/>
        }
      </button>
    </div>
  )
}