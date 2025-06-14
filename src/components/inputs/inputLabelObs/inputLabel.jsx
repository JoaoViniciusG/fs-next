
"use client";
import React from 'react';
import styles from './inputLabel.module.css'

export default function TextAreaInput({ label, placeholder, id, className, classNameInput, value, setValue = () => {}, readonly = false }) {
  return (
    <label className={`${styles.labelInputLogin} ${className}`}>
      <span>{label}</span>
      <textarea 
        id={id} 
        readOnly={readonly}
        placeholder={placeholder} 
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className={`${styles.textarea} ${classNameInput}`} 
      />
    </label>
  );
}
