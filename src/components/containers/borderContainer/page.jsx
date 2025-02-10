import styles from './page.module.css';

export default function BorderContainer({ title, children}) {
    return (
        <div className={styles.containerMaster}>
            <h1 className={styles.titleContainer}><span>{title}</span></h1>
            
            <div className={styles.contentContainer}>{ children }</div>
        </div>
    );
}