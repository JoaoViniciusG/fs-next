"use client";

import styles from './inputLabel.module.css';

export default function InputLabel({label, placeholder, maxLength, value, setValue = () => {}, style = {}, required=false, readonly=false, disabled=false, type="text", width="100%", showLupa = false, onClick = () => {}}) {
    return (
        <div className={styles.container} style={{...style, width}}>
            <p className={styles.label}>{label}</p>
            <div 
                className={styles.inputWrapper}>
                <input
                    required={required}
                    type={type}
                    maxLength={maxLength}
                    className={styles.input} 
                    placeholder={placeholder}
                    value={value} 
                    onChange={(e) => setValue(e.target.value)}
                    readOnly={readonly}
                    disabled={disabled}
                    onClick={onClick} 
                    />

                {showLupa && (
                    <button type="button" className={styles.botaoLupa}>
                        <i className={`bi bi-search ${styles.iconLupa}`}></i>
                    </button>
                )}
            </div>
        </div>
    );
}
