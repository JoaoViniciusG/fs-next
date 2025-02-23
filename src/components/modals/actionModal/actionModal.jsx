import SmallButton from '@/components/buttons/smallButton/smallButton';
import styles from './actionModal.module.css';

export default function ActionModal({ 
    title, 
    text, 
    bsIcon, 
    isOpen = true, 
    setIsOpen = () => {}, 
    width = "max-content",
    callbackB1=()=>{},
    callbackB2=()=>{},
    textBtn1,
    textBtn2, }) {
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
            <SmallButton text={textBtn1} callback={() => {setIsOpen(false); callbackB1()}}/>
            <SmallButton text={textBtn2} callback={() => {setIsOpen(false); callbackB2()}}/>
          </div>
        </div>
    </div>
  );
}