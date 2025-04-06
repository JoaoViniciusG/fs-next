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
import { AuthContext } from '@/context/auth';

import { useContext } from 'react';
import { useRouter } from 'next/navigation';

export default function Header() {
    const context = useContext(AuthContext);
    const router = useRouter();
    const [isOpen, setIsOpen] = useState(false);
    const [isOpenUser, setIsOpenUser] = useState(false);

    const toggleModals = () => {
        if (isOpenUser) setIsOpenUser(false);
        else toggleState();
    }

    const toggleState = () => {
        setIsOpen(!isOpen)
    };

    const toggleStateUser = () => {
        setIsOpenUser(!isOpenUser)
    };

    const onLogout = () => {
        context.logout();
    };

    return (
        <>
            <header className={styles.containerMaster}>
                <div className={styles.logoContainer}>
                    <Link href='/interno'>
                        <Image
                            className={styles.logo}
                            src='/logo/Logo_Horizontal.png'
                            layout="fill"
                            objectFit="contain"
                            alt='Logo horizontal EstoTech'
                        />
                    </Link>
                </div>

                <nav className={styles.headerButtonsContainer}>
                    <div className={styles.iconBellContainer}>
                        <i className={styles.notificationIcon} />
                        <Icon.Bell className={styles.icon} />
                    </div>
                    <div className={styles.iconAccountContainer} onClick={toggleModals}>
                        <Icon.User className={styles.icon} />
                    </div>
                </nav>
            </header>
            <motion.div
                transition={{
                    duration: .55,
                    repeatDelay: 0,
                }}
                animate={{ display: (isOpen) ? "block" : "none" }}
                className={styles.containerModalMaster}>

                <motion.div
                    onClick={() => setIsOpen(false)}
                    transition={{
                        duration: .3,
                        repeatDelay: 0,
                    }}
                    animate={{ opacity: (isOpen) ? .5 : 0 }}
                    className={styles.containerBackground} />

                <motion.div
                    transition={{
                        duration: .5,
                        repeatDelay: 0,
                        ease: 'easeInOut'
                    }}
                    animate={{ right: (isOpen) ? 0 : -250, opacity: (isOpen) ? 1 : 0 }}
                    className={styles.containerContent}>
                    <motion.h2
                        transition={{
                            duration: .3,
                            delay: (isOpen) ? .1 : 0,
                            repeatDelay: 0,
                            ease: 'easeInOut'
                        }}
                        animate={{ translateX: (isOpen) ? 0 : 150, opacity: (isOpen) ? 1 : 0 }}
                        className={styles.titleContent}>
                        Dados gerais
                    </motion.h2>

                    <div className={styles.containerTextContent}>
                        <AnimateOption 
                            text="Perfil" 
                            index={0} 
                            isOpen={isOpen} 
                            callback={() => router.push("/interno/conta/dados-conta")} />
                        
                        <AnimateOption 
                            text="Dados da empresa" 
                            index={1} 
                            isOpen={isOpen} 
                            callback={() => router.push("/interno/conta/dados-empresa")} />

                        <AnimateOption 
                            text="Sair" 
                            index={2} 
                            isOpen={isOpen}
                            callback={onLogout}
                            redHover={true} />
                    </div>
                </motion.div>
            </motion.div>
        </>
    );
}

function AnimateOption({ text, callback = () => { }, index, isOpen, redHover = false }) {
    const [hover, setHover] = useState(false);

    return (
        <motion.div
            onHoverStart={() => setHover(true)}
            onHoverEnd={() => setHover(false)}
            className={styles.containerText}>

            <motion.p
                transition={{
                    duration: .3,
                    //delay: (isOpen) ? (.12 + index * .15) : (.1 + index * .05),
                    delay: 0,
                    repeatDelay: 0,
                    ease: 'easeInOut'
                }}
                onClick={callback}
                animate={{ translateX: (isOpen) ? 0 : 150, opacity: (isOpen) ? 1 : 0, color: (hover && redHover) ? "var(--valuered)" : "var(--white)" }}>
                {text}
            </motion.p>

            <motion.div
                transition={{
                    duration: .3,
                    delay: 0,
                    repeatDelay: 0,
                    ease: 'easeOut'
                }}
                animate={{ width: (hover) ? "100%" : 0, backgroundColor: (hover && redHover) ? "var(--valuered)" : "var(--white)" }} />
        </motion.div>
    );
}