"use client";

import styles from './basicScreen.module.css';
import { useRouter } from "next/navigation";
import * as Icon from 'react-feather';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useContext, useEffect } from 'react';
import { ApplicationContext } from '@/context/application.context';

export default function BasicScreen({
  pageTitle,
  children,
  contentContainerStyle,
  backgroundColor = "var(--darkgreen)",
  isLoading = false
}) {
  const router = useRouter();
  const applicationContext = useContext(ApplicationContext);

  useEffect(() => {
    setTimeout(() => {
      applicationContext.loadingPageDefine(false);
    }, 1500);
  }, [])

  if (applicationContext.isLoadingPage) {
    return (
      <section className={styles.pageMasterContainerLoading}>
        <div className={styles.containerGif}>
          <video
            src="/Loading EstoTech.mp4"
            autoPlay
            muted
            loop
            playsInline
            style={{ width: "100%", height: "100%" }}
          />
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
          className={styles.iconBack} />

        <h1 className={styles.pageTitle}>{pageTitle}</h1>
      </div>

      <div className={styles.contentContainer} style={contentContainerStyle}>
        {children}
      </div>
    </section>
  );
}
