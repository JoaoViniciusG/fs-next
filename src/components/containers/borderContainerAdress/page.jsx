import styles from './page.module.css';

export default function BorderContainerAdress({ title, style, children}) {
    return (
        <div className={styles.containerMaster} style={style}>
            <h1 style={{display: (title == null) ? "none" : "block" }} className={styles.titleContainer}><span>{title}</span></h1>
            
            <div className={styles.contentContainer}>{ children }</div>
        </div>
    );
}