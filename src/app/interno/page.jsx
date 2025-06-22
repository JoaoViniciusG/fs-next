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
        <SmallContainer title="Dia do período" value={context.relatorios.diaPeriodo ?? "--/--/----"} />
        <SmallContainer title="Novos Cliente" value={context.relatorios.novosClientes ?? 0} variance={context.relatorios.novosClientesVariacao ?? 0} decimalPlaces={0} />
        <SmallContainer title="Quantidade Total" value={context.relatorios.quantidadeTotal ?? 0} suffix="un." variance={context.relatorios.quantidadeTotalVariacao ?? 0} decimalPlaces={0} />
        <AlertContainer title="Baixo Estoque" value={0} label="produtos" />
      </div>

      <section className={styles.containerContentRanking}>
        <RankingContainer title="Vendedores do mês" suffix="vendas" infos={context.relatorios.rankingFuncionarios} />
        <RankingContainer title="Produtos do mês" suffix="vendas" infos={context.relatorios.rankingClientes} />
        <RankingContainer title="Clientes do mês" suffix="compras" infos={context.relatorios.rankingProdutos} />
      </section>
    </div>
  );
}