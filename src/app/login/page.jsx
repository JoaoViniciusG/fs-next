"use client";

import ShineButton from '@/components/buttons/shineButton/shineButton';
import styles from './page.module.css';
import Router from 'next/navigation';

export default function LoginPage() {
  return (
    <div className={styles.containerMaster}>
      <div className={styles.containerLeft}>
        <img
          className={styles.imageLogo} 
          src='/logo/Logo_Vertical_SF.png'/>

        <h2 className={styles.titleLeft}>Ainda não é cliente?</h2>

        <ShineButton text="Entre em contato" backgroundColor="var(--bold-darkgreen)" fontColor="var(--white)"/>

        <p className={styles.textContent}>
          Descubra como nosso sistema de gerenciamento de estoque e pessoas pode <span>transformar</span> seu <span>negócio!</span>
        </p>
      </div>

      <div className={styles.containerRight}>

      </div>
    </div>
  )
}