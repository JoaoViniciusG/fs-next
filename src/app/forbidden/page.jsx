import Image from 'next/image';
import styles from './page.module.css';

export default function Custom404() {
  return (
    <div className={styles.containerMaster}>
      <div className={styles.containerContentMaster}>
        <div className={styles.containerContent}>
          <Image
            src="/logo/Logo_Horizontal_black.png"
            width={300}
            height={90}
            alt='403 image'
          />

          <div className={styles.containerContentText}>
            <h1>403</h1>
            <p><b>Oops!</b> Você não tem acesso a este recurso!</p>
          </div>
        </div>

        <Image
          src="/img_status/403.png"
          width={250}
          height={250}
          alt='403 image'
        />
      </div>
    </div>
  );
}