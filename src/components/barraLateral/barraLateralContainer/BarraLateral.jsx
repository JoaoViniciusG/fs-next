"use client"

import BarraLateralModule from '../barraLateralModule/BarraLateralModule';
import styles from './barraLateral.module.css'
import { ApplicationContext } from '@/context/application.context';
import {
    useEffect,
    useState,
    useContext
} from 'react';
import { motion } from 'framer-motion';

export default function BarraLateral() {
    const applicationContext = useContext(ApplicationContext);
    const [currentOpened, setCurrentOpened] = useState('');
    const [permissions, setPermissions] = useState(null);

    useEffect(() => {
        let storageConfig = localStorage.getItem('sideBarConfig');

        if (storageConfig != null) {
            setPermissions(JSON.parse(storageConfig));
        }
    }, [])

    return (
        <motion.div
            transition={{
                duration: .55,
                repeatDelay: 0,
            }}
            className={styles.containerMaster}>

            <motion.div
                transition={{
                    duration: .55,
                    repeatDelay: 0,
                    ease: "circOut"
                }}
                animate={{
                    width: (applicationContext.lateralBarIsOpen) ? "min-content" : 0
                }}
                className={styles.containerContent}>
                <div
                    className={styles.containerOptions}>
                    {(permissions != null && permissions.length > 0) ? permissions.filter(m => m.isVisible).map((module) => {
                        return (
                            <BarraLateralModule key={module.id} name={module.description} options={module.permissions} opened={currentOpened} setOpened={setCurrentOpened} />
                        );
                    }) : null}
                </div>
            </motion.div>
            <div className={styles.closeBarDiv} onClick={applicationContext.toggleLateralBar}>
                <i
                    style={{
                        transition: ".55s",
                        rotate: (applicationContext.lateralBarIsOpen) ? "0deg" : "180deg"
                    }}
                    className={`bi bi-caret-left-fill`}></i>
            </div>
        </motion.div>
    );
}