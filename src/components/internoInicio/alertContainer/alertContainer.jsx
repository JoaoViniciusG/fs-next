import styles from './alertContainer.module.css';

export default function AlertContainer({ title, value, label }) {
  return (
    <div
      className={styles.containerMaster}>

      <h2 className={styles.titleContainer}>{title}</h2>

      <div className={styles.containerContentMaster}>
        <div className={styles.containerContent}>
          <p className={styles.value}>{value}</p>

          <p className={styles.label}>{label}</p>
        </div>
      </div>
    </div>
  )
}