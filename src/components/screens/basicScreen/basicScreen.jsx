"use client";

import styles from './basicScreen.module.css';
import Link from "next/link";
import { useRouter } from "next/navigation";
import * as Icon from 'react-feather'; 

export default function BasicScreen({ pageTitle, children }) {
  const router = useRouter();

  return (
    <section className={styles.pageMasterContainer}>
      <div className={styles.titleContainer}>
        <Icon.ArrowLeft 
          onClick={() => router.back()}
          className={styles.iconBack}/>

        <h1 className={styles.pageTitle}>{pageTitle}</h1>
      </div>

      {children}
    </section>
  );
}