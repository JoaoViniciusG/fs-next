"use client";

import SmallContainer from '@/components/internoInicio/smallContainer/smallContainer';
import styles from './page.module.css';
import RankingContainer from '@/components/internoInicio/rankingContainer/rankingContainer';
import AlertContainer from '@/components/internoInicio/alertContainer/alertContainer';
import DataControler from '@/components/internoInicio/dataControler/dataControler';
import { RelatorioContext } from '@/context/relatorios.context';
import { useContext, useEffect } from 'react';

export default function PageInternoInicio() {
  const context = useContext(RelatorioContext);

  useEffect(() => {
    context.getInfos();
  }, []);

  return (
    <div className={styles.containerMaster}>
      <div className={styles.containerTitle}>
        <div/>
        <h1>Resumo de vendas</h1>
        <div/>
      </div>

      <div className={styles.containerContentMain}>
        <DataControler />
        <SmallContainer title="Valor Total" prefix="R$" value={context.relatorios.valorTotal ?? ""} variance={context.relatorios.valorVariacao ?? ""}/>
        <SmallContainer title="Ticket Médio" prefix="R$" value={context.relatorios.ticketMedio ?? ""} variance={context.relatorios.ticketMedioVariacao ?? ""}/>
        <SmallContainer title="Dia do período" value={context.relatorios.diaPeriodo ?? ""} />
        <SmallContainer title="Novos Cliente" value={context.relatorios.novosClientes ?? ""} variance={context.relatorios.novosClientesVariacao ?? ""} decimalPlaces={0}/>
        <SmallContainer title="Quantidade Total" value={context.relatorios.quantidadeTotal ?? ""} suffix="un." variance={context.relatorios.quantidadeTotalVariacao ?? ""} decimalPlaces={0}/>
        <AlertContainer title="Baixo Estoque" value={5} label="produtos"/>
      </div>

      <section className={styles.containerContentRanking}>
        <RankingContainer title="Vendedores do mês" suffix="vendas" infos={[{name: "Douglas Legramante", image: "/img_content/initial_panel/imgTeste1.jpg", value: 20}, {name: "Bruno Rover", image: "", value: 20}, {name: "Aremilson", image: "", value: 20} ]}/>
        <RankingContainer title="Produtos do mês" suffix="vendas" infos={[{name: "Douglas Legramante", image: "", value: 20}, {name: "Bruno Rover", image: "", value: 20}, {name: "Aremilson", image: "", value: 20} ]}/>
        <RankingContainer title="Clientes do mês" suffix="compras" infos={[{name: "Douglas Legramante", image: "", value: 20}, {name: "Bruno Rover", image: "", value: 20}, {name: "Aremilson", image: "", value: 20} ]}/>
      </section>
    </div>
  );
}