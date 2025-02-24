import styles from './dataControler.module.css';

export default function DataControler() {
  return (
    <div className={styles.containerMaster}>
      <h2 className={styles.containerTitle}>Período</h2>

      <div className={styles.containerContent}>
        <i className={`bi bi-chevron-left ${styles.chevronIcon}`}></i>
        <p className={styles.contentText}>HOJE</p>
        <i className={`bi bi-chevron-right ${styles.chevronIcon}`}></i>
      </div>

      <div className={styles.dateContainer}>
        <div className={styles.dateContent}>
          <h3>Data inicial:</h3>
          <p>14/10/2024</p>
        </div>
        <div className={styles.dateContent}>
          <h3>Data final:</h3>
          <p>14/10/2024</p>
        </div>
      </div>
    </div>
  );
}