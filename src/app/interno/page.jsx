"use client";

import SmallContainer from '@/components/internoInicio/smallContainer/smallContainer';
import styles from './page.module.css';

export default function PageInternoInicio() {
  return (
    <div className={styles.containerMaster}>
      <div className={styles.containerTitle}>
        <div/>
        <h1>Resumo de vendas</h1>
        <div/>
      </div>

      <div className={styles.containerContentMain}>
        <div className={styles.containerBlockBig}></div>
        <SmallContainer title="Valor total" prefix="R$" value="455.894,90" variance={-15549.79}/>
        <SmallContainer title="Valor total" prefix="R$" value="455.894,90" variance={-15549.79}/>
        <SmallContainer title="Valor total" prefix="R$" value="455.894,90" variance={-15549.79}/>
        <SmallContainer title="Valor total" prefix="R$" value="455.894,90" variance={-15549.79}/>
        <SmallContainer title="Valor total" prefix="R$" value="455.894,90" variance={-15549.79}/>
        <SmallContainer title="Valor total" prefix="R$" value="455.894,90" variance={-15549.79}/>
      </div>
    </div>
  );
}