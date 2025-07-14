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
    context.getDate(null);
  }, []);

  return (
    <div className={styles.containerMaster}>
      <div className={styles.containerTitle}>
        <div />
        <h1>Resumo de vendas</h1>
        <div />
      </div>

      <div className={styles.containerContentMain}>
        <DataControler />
        <SmallContainer title="Valor Total" prefix="R$" value={context.relatorios.valorTotal ?? 0} variance={context.relatorios.valorVariacao ?? 0} />
        <SmallContainer title="Ticket Médio" prefix="R$" value={context.relatorios.ticketMedio ?? 0} variance={context.relatorios.ticketMedioVariacao ?? 0} />
        <SmallContainer title="Dia do período" value={context.relatorios.diaPeriodo ?? "--/--/----"} width='30%' />
        <SmallContainer title="Novos Cliente" value={context.relatorios.novosClientes ?? 0} variance={context.relatorios.novosClientesVariacao ?? 0} decimalPlaces={0} width='30%' />
        <SmallContainer title="Quantidade Total" value={context.relatorios.quantidadeTotal ?? 0} suffix="un." variance={context.relatorios.quantidadeTotalVariacao ?? 0} decimalPlaces={0} width='30%' />
      </div>

      <section className={styles.containerContentRanking}>
        <RankingContainer title="Vendedores do período" suffix="vendas" infos={context.relatorios.rankingFuncionarios} />
        <RankingContainer title="Produtos do período" suffix="vendas" infos={context.relatorios.rankingProdutos} />
        <RankingContainer title="Clientes do período" suffix="compras" infos={context.relatorios.rankingClientes} />
      </section>
    </div>
  );
}