import styles from './rankingContainer.module.css';
import * as Icon from 'react-feather';
import Image from 'next/image';

export default function RankingContainer({ title, suffix, infos = [] }) {
  return (
    <div className={styles.containerMaster}>
      <div className={styles.titleContainer}>
        <h2 className={styles.title}>{title}</h2>
      </div>

      <div className={styles.containerContent}>
        {
          infos.map((item, index) => (
            <div key={index} className={styles.listItem}>
              <div className={styles.itemImageContainer}>
                {JSON.stringify(index + 1)}
              </div>

              <div className={styles.temNameContainer}>
                <p className={styles.itemName}>{item.nome}</p>
              </div>

              <div className={styles.containerItemValue}>
                <h4>{item.quantidade}</h4>
                <p>{suffix}</p>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}