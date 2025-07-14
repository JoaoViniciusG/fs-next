"use client"

import styles from './globalFilter.module.css'
import { motion } from 'framer-motion';
import { ApplicationContext } from '@/context/application.context';
import {
  useState,
  useEffect,
  useContext
} from 'react';

export default function GlobalFilter() {
  const applicationContext = useContext(ApplicationContext);

  const [children, setChildren] = useState(<p>Testeeeee</p>);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setChildren(applicationContext.globalFilterChildren);
  }, [applicationContext.globalFilterChildren])

  return (
    <motion.div
      transition={{
        duration: .55,
        repeatDelay: 0,
      }}
      animate={{
        width: (applicationContext.globalFilterIsOpen) ? "min-content" : 0
      }}
      className={styles.section}>

      <div
        onClick={() => applicationContext.toggleFilterBar()}
        className={styles.closeBarDiv}>
        <i className="bi bi-caret-right-fill"></i>
      </div>

      <div className={styles.contentContainer}>
        {children}
      </div>
    </motion.div>
  );
}