import styles from './smallButton.module.css'

import { motion } from 'framer-motion';

export default function SmallButton({ text, callback = () => {}, style }) {
    return (
        <motion.button 
            onClick={callback}
            style={style}
            className={styles.buttonContainer}
            transition={{
                duration: .3,
                repeatDelay: 0,
                delay: 0
            }}>
            <p className={styles.textButton}>{text}</p>
        </motion.button>
    );
}