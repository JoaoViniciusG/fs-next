import SmallButton from '@/components/buttons/smallButton/smallButton';
import styles from './alertModal.module.css';

export default function AlertModal({ title, text, bsIcon, callback= () => {}, setIsOpen = () => {}, isOpen = true, width = "max-content" }) {
  return (
    <div
      style={{display: (isOpen) ? "flex" : "none" }} 
      className={styles.backgroundContainer}>
        <div 
          style={{width: width}}
          className={styles.containerContent}>
          <div className={styles.titleContainer}>
            <i className={`bi ${bsIcon} ${styles.iconTitle}`}></i>
            <p className={styles.titleText}>{title}</p>
          </div>

          <div className={styles.textContainer}>
            <p>{text}</p>
          </div>

          <div className={styles.buttonsContainer}>
            <SmallButton text="Dispensar" callback={() => {setIsOpen(false); callback()}}/>
          </div>
        </div>
    </div>
  );
}