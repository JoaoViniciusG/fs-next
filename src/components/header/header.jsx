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
                        onClick={toggleState}
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
                            <motion.h2
                                transition={{
                                    duration: .3,
                                    delay: (isOpen) ? .1 : 0,
                                    repeatDelay: 0,
                                    ease: 'easeInOut'
                                }}
                                animate={{translateX: (isOpen) ? 0 : 150, opacity: (isOpen) ? 1 : 0}}
                                className={styles.titleContent}>
                                Dados gerais
                            </motion.h2>

                            <div className={styles.containerTextContent}>
                                <motion.p
                                    transition={{
                                        duration: .3,
                                        delay: (isOpen) ? .12 : .1,
                                        repeatDelay: 0,
                                        ease: 'easeInOut'
                                    }}
                                    animate={{translateX: (isOpen) ? 0 : 150, opacity: (isOpen) ? 1 : 0}}>
                                    Perfil
                                </motion.p>
                                <motion.p
                                    transition={{
                                        duration: .3,
                                        delay: (isOpen) ? .15 : .15,
                                        repeatDelay: 0,
                                        ease: 'easeInOut'
                                    }}
                                    animate={{translateX: (isOpen) ? 0 : 150, opacity: (isOpen) ? 1 : 0}}>
                                    Dados da empresa
                                </motion.p>
                                <motion.p
                                    transition={{
                                        duration: .3,
                                        delay: (isOpen) ? .18 : .2,
                                        repeatDelay: 0,
                                        ease: 'easeInOut'
                                    }}
                                    animate={{translateX: (isOpen) ? 0 : 150, opacity: (isOpen) ? 1 : 0}}>
                                    Trocar usuário
                                </motion.p>
                            </div>
                    </motion.div>
            </motion.div>
        </>
    );
}