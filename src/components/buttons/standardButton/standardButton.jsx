import styles from './standardButton.css';

import { motion } from 'framer-motion';

export default function StandardButton({ text, hoverColor, callback = () => {}, style }) {
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