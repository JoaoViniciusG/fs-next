"use client";

import styles from './inputLabel.module.css';

export default function InputLabel({label, placeholder, maxLength, value, setValue = () => {}, style, required=false, readonly=false, type="text", width="100%", showLupa = false, onClick = () => {}}) {
    return (
        <div className={styles.container} style={style}>
            <p className={styles.label}>{label}</p>
            <div 
                className={styles.inputWrapper}
                style={{width:width}}>
                <input
                    required={required}
                    type={type}
                    maxLength={maxLength}
                    className={styles.input} 
                    placeholder={placeholder}
                    value={value} 
                    onChange={(e) => setValue(e.target.value)}
                    readOnly={readonly}
                    onClick={onClick} 
                    />

                {showLupa && (
                    <button type="button" className={styles.botaoLupa}>
                        <i class={`bi bi-search ${styles.iconLupa}`}></i>
                    </button>
                )}
            </div>
        </div>
    );
}
