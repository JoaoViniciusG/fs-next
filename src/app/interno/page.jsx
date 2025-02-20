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
        <SmallContainer title="Valor Total" prefix="R$" value={455894.90} variance={15549.79}/>
        <SmallContainer title="Ticket Médio" prefix="R$" value={795.90} variance={-145.30}/>
        <SmallContainer title="Dia do período" value="14/10/2024" />
        <SmallContainer title="Novos Cliente" value={21} variance={2} decimalPlaces={0}/>
        <SmallContainer title="Quantidade Total" value={59} suffix="un." variance={-5} decimalPlaces={0}/>
        <SmallContainer title="Baixo Estoque" value={455894.90} variance="produtos"/>
      </div>

      <section className={styles.containerContentRanking}>
        <RankingContainer title="Vendedores do mês" suffix="vendas" infos={[{name: "Douglas Legramante", image: "https://scontent.fpbq1-1.fna.fbcdn.net/v/t39.30808-1/468601899_9449518431745179_785855118294425223_n.jpg", value: 20}, {name: "Bruno Rover", image: "", value: 20}, {name: "Aremilson", image: "", value: 20} ]}/>
        <RankingContainer title="Produtos do mês" suffix="vendas" infos={[{name: "Douglas Legramante", image: "", value: 20}, {name: "Bruno Rover", image: "", value: 20}, {name: "Aremilson", image: "", value: 20} ]}/>
        <RankingContainer title="Clientes do mês" suffix="vendas" infos={[{name: "Douglas Legramante", image: "", value: 20}, {name: "Bruno Rover", image: "", value: 20}, {name: "Aremilson", image: "", value: 20} ]}/>
      </section>
    </div>
  );
}