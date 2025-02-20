"use client";

import SmallContainer from '@/components/internoInicio/smallContainer/smallContainer';
import styles from './page.module.css';
import RankingContainer from '@/components/internoInicio/rankingContainer/rankingContainer';

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
        <SmallContainer title="Valor Total" prefix="R$" value="455.894,90" variance={15549.79}/>
        <SmallContainer title="Ticket Médio" prefix="R$" value="795,90" variance={-145.30}/>
        <SmallContainer title="Dia do período" value="14/10/2024" />
        <SmallContainer title="Novos Cliente" value="21" variance={2}/>
        <SmallContainer title="Quantidade Total" value="59" suffix="un." variance={-5}/>
        <SmallContainer title="Baixo Estoque" value="455.894,90" variance="produtos"/>
      </div>

      <section className={styles.containerContentRanking}>
        <RankingContainer />
      </section>
    </div>
  );
}