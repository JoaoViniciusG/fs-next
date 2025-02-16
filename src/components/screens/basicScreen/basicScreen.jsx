"use client";

import styles from './basicScreen.module.css';
import { useRouter } from "next/navigation";
import * as Icon from 'react-feather'; 

export default function BasicScreen({ pageTitle, children, contentContainerStyle }) {
  const router = useRouter();

  return (
    <section className={styles.pageMasterContainer}>
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