import Image from 'next/image';
import styles from './not-found.module.css';

export default function Custom404() {
  return (
    <div className={styles.containerMaster}>
      <div className={styles.containerContentMaster}>
        <div className={styles.containerContent}>
          <Image
            src="/logo/Logo_Horizontal_black.png"
            width={300}
            height={90}
            alt='404 image'
          />

          <div className={styles.containerContentText}>
            <h1>404</h1>
            <p><b>Oops!</b> Não conseguimos encontrar essa página!</p>
          </div>
        </div>

        <Image
          src="/img_status/404.png"
          width={500}
          height={500}
          alt='404 image'
        />
      </div>
    </div>
  );
}