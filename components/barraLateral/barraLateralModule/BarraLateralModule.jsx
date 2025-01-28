"use client"

import {
    useState
} from 'react';

import styles from './BarraLateralModule.module.css';

export default function BarraLateralModule({ nome }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className={styles.containerMaster}>
            <div className={styles.containerTitle}>
                <i className={`bi bi-caret-right-fill ${styles.iconModule}`}></i>

                <p>{nome}</p>

            </div>
        </div>
    );
}