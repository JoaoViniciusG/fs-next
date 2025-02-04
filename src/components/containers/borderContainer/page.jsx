import styles from './page.module.css';

export default function BorderContainer() {
    return (
        <div className={styles.fieldset}>
            <h1><span>Title</span></h1>
            <p>Content</p>
        </div>
    );
}