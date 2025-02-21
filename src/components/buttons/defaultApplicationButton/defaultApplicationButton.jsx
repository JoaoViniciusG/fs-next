import styles from './defaultApplicationButton.module.css';

import { motion } from 'framer-motion';

export default function DefaultApplicationButton({ text, hoverColor, callback = () => {}, style }) {
    return (
        <motion.button 
            onClick={callback}
            style={style}
            className={styles.buttonContainer}
            transition={{
                duration: .3,
                repeatDelay: 0,
                delay: 0
            }}
            whileHover={{
                backgroundColor: hoverColor
            }}>
            <p className={styles.textButton}>{text}</p>
        </motion.button>
    );
}