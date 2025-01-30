import {
} from 'react';

import styles from './header.module.css';
import Image from "next/image";

export default function Header() {
    return (
        <header className={styles.containerMaster}>
            <div className={styles.logoContainer}>
                <Image
                    className={styles.logo}
                    src='/LogoEstoTech-Horizontal.png'
                    layout="fill"
                    objectFit="contain"
                    alt='Logo horizontal EstoTech'
                />
            </div>

            <nav className={styles.icons}>
                <div className={styles.icon}>
                    <i className="bi bi-person-circle"></i>
                </div>
            </nav>
        </header>
    );
}