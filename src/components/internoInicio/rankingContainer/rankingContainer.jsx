import styles from './rankingContainer.module.css';


// [
//   name: "",
//   image: "",
//   value: ""
// ]

export default function RankingContainer({ title, suffix, infos = [] }) {
  return (
    <div className={styles.containerMaster}>
      <div className={styles.titleContainer}>
        <h2 className={styles.title}>{title}</h2>
      </div>

      <div className={styles.containerContent}>
        {
          infos.map((item, index) => (
            <div className={styles.listItem}>
              <div style={{height: 40, width: 40, backgroundColor: 'red'}}></div>

              <div className={styles.temNameContainer}>
                <p className={styles.itemName}>{item.name}</p>
              </div>

              <div className={styles.containerItemValue}>
                <h4>{item.value}</h4>
                <p>{suffix}</p>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}