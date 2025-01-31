import styles from './standardButton.module.css';

import { motion } from 'framer-motion';

export default function StandardButton({ text, hoverColor, callback }) {
    return (
        <motion.button 
            onCLick={callback}
            className={styles.buttonContainer}
            transition={{
                duration: .3,
                repeatDelay: 0,
            }}
            whileHover={{
                backgroundColor: hoverColor
            }}>
            <p className={styles.textButton}>{text}</p>
        </motion.button>
    );
}