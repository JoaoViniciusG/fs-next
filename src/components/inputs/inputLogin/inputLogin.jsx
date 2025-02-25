
import { useState } from 'react';
import styles from './inputLogin.module.css';

import * as Icon from 'react-feather';

export default function InputLogin({ 
  label, 
  placeholder, 
  value, 
  setValue, 
  isPassword = false, 
  color = 'black',
  eyeColor = "var(--bold-darkgreen)"
}) { 
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className={styles.containerMaster}>
      <h3 className={styles.inputLabel} style={{ color: color }}>{label}</h3>
      
      <input 
        className={styles.input}
        placeholder={placeholder}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        type={(isPassword && showPassword) ? 'password' : 'text'}
        style={{ borderColor: color }}
      />

      <button
        className={styles.buttonPassword}
        onClick={() => setShowPassword(!showPassword)}
        style={{ display: (isPassword) ? 'block' : 'none' }}>
        {
          !showPassword ? 
          <Icon.EyeOff
            className={`${styles.iconEye}`}
            style={{ color: eyeColor }}
          />
          :
          <Icon.Eye
            className={`${styles.iconEye}`}
            style={{ color: eyeColor }}
          />
        }
      </button>
    </div>
  )
}
