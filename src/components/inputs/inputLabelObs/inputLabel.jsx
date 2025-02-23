
"use client";
import React from 'react';
import styles from './inputLabel.module.css'

export default function TextAreaInput({ label, placeholder, id }) {
  return (
    <label className={styles.labelInputLogin}>
      <span>{label}</span>
      <textarea 
        id={id} 
        placeholder={placeholder} 
        className={styles.textarea} 
      />
    </label>
  );
}
