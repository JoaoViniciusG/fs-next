"use client";

import styles from './inputLabel.module.css';

export default function InputLabel({label, value, setValue, placeholder, maxLength, style, required=false, readonly=false, type="text", width="100%"}) {
    return (
        <div className={styles.container}>
            <p className={styles.label}>{label}</p>
            <input
                required={required}
                type={type}
                maxLength={maxLength}
                style={{width:width, ...style}}
                className={styles.input} 
                placeholder={placeholder}
                value={value} 
                onChange={(e) => setValue(e.target.value)}
                readOnly={readonly} />
        </div>
    );
}

