"use client";

import {
    useState,
    useEffect
} from 'react';

import { motion } from 'framer-motion';

import * as Icon from 'react-feather';

import styles from './header.module.css';
import Image from "next/image";
import Link from 'next/link';

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleState = () => {
        setIsOpen(!isOpen)
    };

    return (
        <>
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
                    <div className={styles.iconAccountContainer} onClick={toggleState}>
                        <Icon.User className={styles.icon}/>
                    </div>
                </nav>
            </header>
            <motion.div
                transition={{
                    duration: .55,
                    repeatDelay: 0,
                }}
                animate={{display: (isOpen) ? "block" : "none"}}
                className={styles.containerModalMaster}>

                    <motion.div
                        transition={{
                            duration: .3,
                            repeatDelay: 0,
                        }}
                        animate={{opacity: (isOpen) ? .5 : 0}}
                        className={styles.containerBackground} />

                    <motion.div
                        transition={{
                            duration: .5,
                            repeatDelay: 0,
                            ease: 'easeInOut'
                        }}
                        animate={{right: (isOpen) ? 0 : -250, opacity: (isOpen) ? 1 : 0}}
                        className={styles.containerContent}>
                            <h2 className={styles.titleContent}>Dados gerais</h2>

                            <div className={styles.containerTextContent}>
                                <p>Perfil</p>
                                <p>Dados da empresa</p>
                                <p>Trocar usuário</p>
                            </div>
                    </motion.div>
            </motion.div>
        </>
    );
}