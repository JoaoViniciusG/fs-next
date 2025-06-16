"use client";

import styles from './addressOption.module.css';

import { useRouter } from 'next/navigation';

export default function AddressOption({ id, logradouro, numero, bairro, cidade, UF, width = "max-content" }) {
    const router = useRouter();

    return (
        <div 
            style={{width: width}}
            className={styles.containerMaster} 
            onClick={() => router.push(`/interno/endereco/visualizar/${id}`)}>
            
            <i className={`bi bi-geo-alt-fill ${styles.iconLocation}`}></i>

            <div className={styles.textContainer}>
                <h3 className={styles.textTitle}>{logradouro}, {numero}</h3>

                <p className={styles.text}>{bairro}<br/>{cidade}/{UF}</p>
            </div>
        </div>
    );
}