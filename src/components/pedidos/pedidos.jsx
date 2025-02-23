"use client";

import styles from './pedidos.module.css'

export default function PedidoCard({
  numeroPedido,
  nomeCliente,
  cpfCnpj,
  dataEmissao,
  valor,
  observacao,
  statusPedido,
  corStatus, // Cor do status (passada por props)
  botoes = [], // Lista de botões (passada por props)
}) {
  return (
    <div className={styles.container} style={{ borderColor: corStatus }}>
      <p className={styles.titulo}>Pedido #{numeroPedido}</p>
      <p className={styles.info}><strong>Cliente:</strong> {nomeCliente}</p>
      <p className={styles.info}><strong>CPF/CNPJ:</strong> {cpfCnpj}</p>
      <p className={styles.info}><strong>Data de Emissão:</strong> {dataEmissao}</p>
      <p className={styles.info}><strong>Valor:</strong> {valor}</p>
      <p className={styles.info}><strong>Observação:</strong> {observacao}</p>

      <div className={styles.status} style={{ backgroundColor: corStatus }}>
        {statusPedido}
      </div>

      <div className={styles.botoes}>
        {botoes.includes("Ver Mais") && <button className={styles.botao}>Ver Mais</button>}
        {botoes.includes("Alterar Pedido") && <button className={styles.botao}>Alterar Pedido</button>}
        {botoes.includes("Excluir") && <button className={styles.botaoExcluir}>Excluir</button>}
      </div>
    </div>
  );
}
