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
import SmallButton from '../buttons/smallButton/smallButton';

import { useRouter } from 'next/navigation';

export default function Header() {
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
                    onClick={toggleState}
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
                        <PTest 
                            text="Perfil" 
                            index={0} 
                            isOpen={isOpen} 
                            callback={() => router.push("/interno/conta/dados_conta")} />
                        
                        <PTest 
                            text="Dados da empresa" 
                            index={1} 
                            isOpen={isOpen} 
                            callback={() => router.push("/interno/conta/dados_empresa")} />

                        <PTest 
                            text="Trocar usuário" 
                            index={2} 
                            isOpen={isOpen}
                            callback={() => { setIsOpen(false); setIsOpenUser(true); }} />
                    </div>
                </motion.div>
            </motion.div>

            <motion.div
                transition={{
                    duration: .55,
                    repeatDelay: 0,
                }}
                animate={{ display: (isOpenUser) ? "block" : "none" }}
                className={styles.containerModalMaster}>

                <motion.div
                    onClick={toggleStateUser}
                    transition={{
                        duration: .3,
                        repeatDelay: 0,
                    }}
                    animate={{ opacity: (isOpenUser) ? .5 : 0 }}
                    className={styles.containerBackground} />

                <motion.div
                    transition={{
                        duration: .5,
                        repeatDelay: 0,
                        ease: 'easeInOut'
                    }}
                    animate={{ right: (isOpenUser) ? 0 : -250, opacity: (isOpenUser) ? 1 : 0 }}
                    className={styles.containerContent}>
                    <motion.h2
                        transition={{
                            duration: .3,
                            delay: (isOpenUser) ? .1 : 0,
                            repeatDelay: 0,
                            ease: 'easeInOut'
                        }}
                        animate={{ translateX: (isOpenUser) ? 0 : 150, opacity: (isOpenUser) ? 1 : 0 }}
                        className={styles.titleContent}>
                        Trocar de usuário
                    </motion.h2>

                    <div className={styles.containerTextContent}>
                        <div className={styles.containerContentUser}>
                            <div className={styles.userIconContainer}>
                                <Icon.User className={styles.iconImage} />
                            </div>
                            <p className={styles.userName}>Fernanda</p>
                        </div>

                        <div className={styles.containerContentUser}>
                            <div className={styles.userIconContainer}>
                                <Icon.User className={styles.iconImage} />
                            </div>
                            <p className={styles.userName}>Beatriz</p>
                        </div>

                        <div className={styles.containerContentUser}>
                            <div className={styles.userIconContainer}>
                                <Icon.User className={styles.iconImage} />
                            </div>
                            <p className={styles.userName}>Vinícius</p>
                        </div>

                        <div className={styles.containerContentUser}>
                            <div className={styles.userIconContainer}>
                                <Icon.User className={styles.iconImage} />
                            </div>
                            <p className={styles.userName}>Inglez</p>
                        </div>
                    </div>

                    <SmallButton text="SAIR" style={{alignSelf: "flex-end"}} callback={() => router.replace("/login")}/>
                </motion.div>
            </motion.div>
        </>
    );
}

function PTest({ text, callback = () => { }, index, isOpen }) {
    const [hover, setHover] = useState(false);

    return (
        <motion.div
            onHoverStart={() => setHover(true)}
            onHoverEnd={() => setHover(false)}
            className={styles.containerText}>

            <motion.p
                transition={{
                    duration: .3,
                    delay: (isOpen) ? (.12 + index * .15) : (.1 + index * .05),
                    repeatDelay: 0,
                    ease: 'easeInOut'
                }}
                onClick={callback}
                animate={{ translateX: (isOpen) ? 0 : 150, opacity: (isOpen) ? 1 : 0 }}>
                {text}
            </motion.p>

            <motion.div
                transition={{
                    duration: .3,
                    delay: 0,
                    repeatDelay: 0,
                    ease: 'easeOut'
                }}
                animate={{ width: (hover) ? "100%" : 0 }} />
        </motion.div>
    );
}