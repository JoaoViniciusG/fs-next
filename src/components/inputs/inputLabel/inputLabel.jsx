"use client";

import styles from './inputLabel.module.css';

export default function InputLabel({label, value, setValue, readonly=false, width="100%"}) {
    return (
        <div className={styles.container}>
            <p className={styles.label}>{label}</p>
            <input
                style={{width:width, color}}
                className={styles.input} 
                value={value} 
                onChange={(e) => setValue(e.target.value)}
                readOnly={readonly} />
        </div>
    );
}