import styles from './standardButton.module.css';

export default function StandardButton({ text, hoverColor }) {
    return (
        <div className={styles.buttonContainer}>
            <p className={styles.textButton}>{text}</p>
        </div>
    );
}