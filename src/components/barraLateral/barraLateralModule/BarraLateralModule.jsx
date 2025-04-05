"use client"
import { motion } from 'framer-motion';

import {
    useEffect,
    useState
} from 'react';

import styles from './BarraLateralModule.module.css';
import BarraLateralOption from '../barraLateralOption/BarraLateralOption';

export default function BarraLateralModule({ name, options, opened, setOpened }) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleState = () => {
        if(!isOpen) setOpened(name)
        setIsOpen(!isOpen)
    }

    useEffect(() => {
        if(opened != name && isOpen) toggleState() 
    }, [opened])

    return (
        <div className={styles.containerMaster}>
            <div className={styles.containerTitle} onClick={toggleState}>
                <motion.div 
                    style={{
                        display: "inline-block"
                    }}
                    animate={{ rotate: isOpen ? 90 : 0 }}
                    transition={{
                        duration: .2,
                        ease: "easeInOut",
                        repeatDelay: 0,
                    }}>

                    <i className={`bi bi-caret-right-fill ${styles.iconModule}`}></i>
                </motion.div>
                
                <p>{name}</p>
            </div>

            <motion.div
                animate={{ height: isOpen ? 'auto' : 0}}
                transition={{
                    duration: .2,
                    ease: "easeInOut",
                    repeatDelay: 0,
                }} 
                className={styles.containerOptions}>
                {options.filter(m => m.isVisible).map((option) => {
                    return (
                        <BarraLateralOption key={option.id} optionName={option.description} optionRoute={option.path} />
                    )
                })}
            </motion.div>
        </div>
    );
}