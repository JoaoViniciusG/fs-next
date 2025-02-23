// "use client";

// import styles from './inputLabel.module.css';

// export default function InputLabel({label, value, setValue, placeholder, maxLength, style, required=false, readonly=false, type="text", width="100%"}) {
//     return (
//         <div className={styles.container} style={style}>
//             <p className={styles.label}>{label}</p>
//             <input
//                 required={required}
//                 type={type}
//                 maxLength={maxLength}
//                 style={{width:width}}
//                 className={styles.input} 
//                 placeholder={placeholder}
//                 value={value} 
//                 onChange={(e) => setValue(e.target.value)}
//                 readOnly={readonly} />
//         </div>
//     );
// }

"use client";

import styles from './inputLabel.module.css';

export default function InputLabel({
  label, 
  value, 
  setValue, 
  placeholder, 
  maxLength, 
  style, 
  required = false, 
  readonly = false, 
  type = "text", 
  width = "100%", 
  showLupa = false
}) {
  return (
    <div className={styles.container} style={style}>
      <p className={styles.label}>{label}</p>
      <div className={styles.inputWrapper}>
        <input
          required={required}
          type={type}
          maxLength={maxLength}
          style={{ width }}
          className={styles.input}
          placeholder={placeholder}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          readOnly={readonly}
        />
        {showLupa && (
          <button type="button" className={styles.botaoLupa}>
            <img src="/Lupa.png" alt="Lupa" className={styles.iconLupa} />
          </button>
        )}
      </div>
    </div>
  );
}
