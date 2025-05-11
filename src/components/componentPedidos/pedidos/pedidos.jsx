"use client";

import { useState } from 'react';
import InputLabel from '../../inputs/inputLabel/inputLabel';
import styles from './pedidos.module.css';
import ShineButton from '../../buttons/shineButton/shineButton';
import Link from 'next/link';

export default function PedidoCard({
  numeroPedido,
  nomeCliente,
  cpfCnpj,
  dataEmissao,
  valor,
  observacao,
  statusPedido,
  corStatus,
  onExcluir,
  botoes = ["ALTERAR", "VER MAIS", "EXCLUIR"], // Aqui, o padrão é exibir todos os botões
}) {
  // Usando useState para tornar os campos editáveis
  const [nome, setNome] = useState(nomeCliente);
  const [cpf, setCpf] = useState(cpfCnpj);
  const [data, setData] = useState(dataEmissao);
  const [valorPedido, setValorPedido] = useState(valor);
  const [observacaoPedido, setObservacaoPedido] = useState(observacao);

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.title}>PEDIDO:</div>
        <div className={styles['order-number']}>Nº: {numeroPedido}</div>
        <div className={`${styles.status} ${styles[statusPedido]}`} style={{ backgroundColor: corStatus }}>
          {statusPedido}
        </div>
      </div>

      <div className={styles['form-group-row']}>
        <InputLabel 
          label="Nome do cliente" 
          value={nome} 
          onChange={(e) => setNome(e.target.value)} 
        />
        <InputLabel 
          label="CPF/CNPJ" 
          value={cpf} 
          onChange={(e) => setCpf(e.target.value)} 
        />
      </div>

      <div className={styles['form-group-row']}>
        <InputLabel 
          label="Data de emissão" 
          value={data} 
          onChange={(e) => setData(e.target.value)} 
        />
        <InputLabel 
          label="Valor" 
          value={valorPedido} 
          onChange={(e) => setValorPedido(e.target.value)} 
        />
      </div>

      <div className={styles['form-group']}>
        <InputLabel 
          label="Observação" 
          value={observacaoPedido} 
          onChange={(e) => setObservacaoPedido(e.target.value)} 
        />
      </div>

      <div className={styles.buttons}>
        {botoes.includes("ALTERAR") && (
          <Link href={`/interno/pedidos/alterar`} passHref>
            <ShineButton text="ALTERAR" />
          </Link>
        )}
        
        {botoes.includes("EXCLUIR") && (
          <ShineButton text="EXCLUIR" callback={onExcluir} />
        )
        }
        {botoes.includes("VER MAIS") && (
          <Link href={`/interno/pedidos/visualizar`} passHref>
            <ShineButton text="VER MAIS" />
          </Link>
        )}

        
      </div>
    </div>
  );
}
