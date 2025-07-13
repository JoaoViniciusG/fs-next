"use client";

import styles from './basicScreen.module.css';
import { useRouter } from "next/navigation";
import * as Icon from 'react-feather';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useContext } from 'react';
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

  if (false) {
    return (
      <section
        className={styles.pageMasterContainerLoading}
        style={{ backgroundColor }}
      >
        <Image
          className={styles.logo}
          src='/Loading-EstoTech.gif'
          layout="fill"
          objectFit="contain"
          alt='Logo horizontal EstoTech' />
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
