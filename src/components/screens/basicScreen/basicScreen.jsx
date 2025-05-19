"use client";

import styles from './basicScreen.module.css';
import { useRouter } from "next/navigation";
import * as Icon from 'react-feather'; 
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function BasicScreen({ 
  pageTitle, 
  children, 
  contentContainerStyle,
  backgroundColor = "var(--darkgreen)",
  isLoading = false
}) {
  const router = useRouter();

  if(isLoading) {
    return (
      <section 
        className={styles.pageMasterContainerLoading} 
        style={{ backgroundColor }}
      >
        <div className={styles.containerLoading}>
          <Image
            className={styles.logo}
            src='/logo/Logo_Vertical_SF.png'
            layout="fill"
            objectFit="contain"
            alt='Logo horizontal EstoTech'/>

          <div className={styles.loadingContainerBalls}>
            <motion.div
              onClick={() => {}}
              transition={{
                  duration: .3,
                  repeatDelay: 0,
              }}
              animate={{}}
              className={styles.loadingBall} />

            <motion.div
              onClick={() => {}}
              transition={{
                  duration: .3,
                  repeatDelay: 0,
              }}
              animate={{}}
              className={styles.containerBackground} />

            <motion.div
              onClick={() => {}}
              transition={{
                  duration: .3,
                  repeatDelay: 0,
              }}
              animate={{}}
              className={styles.containerBackground} />

          </div>
        </div>
      </section>
    );
  }

  return (
    <section 
      className={styles.pageMasterContainer} 
      style={{ backgroundColor }} // Aplica a cor personalizada
    >
      <div className={styles.titleContainer}>
        <Icon.ArrowLeft 
          onClick={() => router.back()}
          className={styles.iconBack}/>

        <h1 className={styles.pageTitle}>{pageTitle}</h1>
      </div>

      <div className={styles.contentContainer} style={contentContainerStyle}>
        {children}
      </div>
    </section>
  );
}
