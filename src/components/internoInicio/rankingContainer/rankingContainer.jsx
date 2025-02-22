import styles from './rankingContainer.module.css';
import * as Icon from 'react-feather';
import Image from 'next/image';

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
            <div key={index} className={styles.listItem}>
              <div className={styles.itemImageContainer}>
                {
                  (typeof item.image == "string" && item.image.length > 0) ?
                  <Image 
                    src={item.image}
                    alt={`Imagem ${item.name}`}
                    width={45}
                    height={45}/>
                  :
                  <div className={styles.undefinedImage}>
                    <Icon.User className={styles.iconImage}/>
                  </div>
                }
              </div>

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