"use client";

import styles from './inputLabel.module.css';

export default function InputLabel({label, value, setValue, placeholder, maxLength, required=false, readonly=false, width="100%"}) {
    return (
        <div className={styles.container}>
            <p className={styles.label}>{label}</p>
            <input
                required={required}
                maxLength={maxLength}
                style={{width:width}}
                className={styles.input} 
                placeholder={placeholder}
                value={value} 
                onChange={(e) => setValue(e.target.value)}
                readOnly={readonly} />
        </div>
    );
}