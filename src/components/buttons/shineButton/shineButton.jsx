import styles from './shineButton.module.css';
import { motion } from 'framer-motion';

export default function ShineButton({text, backgroundColor, fontColor, callback = () => {}}) {
  return (
    <motion.button
      className={styles.button}
      style={{
        backgroundColor: backgroundColor,
        color: fontColor
      }}
      onClick={callback}>
        {text}
    </motion.button>
  )
}