import {
} from 'react';

import * as Icon from 'react-feather';

import styles from './header.module.css';
import Image from "next/image";
import Link from 'next/link';

export default function Header() {
    return (
        <header className={styles.containerMaster}>
            <div className={styles.logoContainer}>
                <Link href='/interno'>
                    <Image
                        className={styles.logo}
                        src='/LogoEstoTech-Horizontal.png'
                        layout="fill"
                        objectFit="contain"
                        alt='Logo horizontal EstoTech'
                    />
                </Link>
            </div>

            <nav className={styles.headerButtonsContainer}>
                <div className={styles.iconBellContainer}>
                    <i className={styles.notificationIcon}/>
                    <Icon.Bell className={styles.icon}/>
                </div>
                <div className={styles.iconAccountContainer}>
                    <Icon.User className={styles.icon}/>
                </div>
            </nav>
        </header>
    );
}