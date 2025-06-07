// "use client";

// import { useEffect, useState } from 'react';
// import InputLabel from '../../inputs/inputLabel/inputLabel';
// import styles from './pedidos.module.css';
// import ShineButton from '../../buttons/shineButton/shineButton';
// import Link from 'next/link';

// export default function PedidoCard({
//   numeroPedido,
//   nomeCliente,
//   cpfCnpj,
//   dataEmissao,
//   valor,
//   observacao,
//   statusPedido,
//   onExcluir
// }) {
//   // Usando useState para tornar os campos editáveis
//   const [nome, setNome] = useState(nomeCliente);
//   const [cpf, setCpf] = useState(cpfCnpj);
//   const [data, setData] = useState(dataEmissao);
//   const [valorPedido, setValorPedido] = useState(valor);
//   const [observacaoPedido, setObservacaoPedido] = useState(observacao);

//   const coresStatus = ["rgba(99, 181, 199, 1)", "var(--orange)", "var(--cyan)", "var(--darkbrown)", "var(--darkred)"];
//   const textosStatus = ["Pedido Criado", "Aguardando Pagamento", "Pagamento Confirmado", "Enviado", "Pedido Cancelado"];
//   const botoesStatus = [[true, true, true], [true, true, true], [true, true, false], [true, true, false], [true, false, true]]

//   return (
//     <div className={styles.container}>
//       <div className={styles.header}>
//         <div className={styles.title}>PEDIDO:</div>
//         <div className={styles['order-number']}>Nº: {numeroPedido}</div>
//         <div className={`${styles.status}`} style={{ backgroundColor: coresStatus[statusPedido] }}>
//           {textosStatus[statusPedido]}
//         </div>
//       </div>

//       <div className={styles['form-group-row']}>
//         <InputLabel 
//           label="Nome do cliente" 
//           value={nome} 
//           onChange={(e) => setNome(e.target.value)} 
//         />
//         <InputLabel 
//           label="CPF/CNPJ" 
//           value={cpf} 
//           onChange={(e) => setCpf(e.target.value)} 
//         />
//       </div>

//       <div className={styles['form-group-row']}>
//         <InputLabel 
//           label="Data de emissão" 
//           value={data} 
//           onChange={(e) => setData(e.target.value)} 
//         />
//         <InputLabel 
//           label="Valor" 
//           value={valorPedido} 
//           onChange={(e) => setValorPedido(e.target.value)} 
//         />
//       </div>

//       <div className={styles['form-group']}>
//         <InputLabel 
//           label="Observação" 
//           value={observacaoPedido} 
//           onChange={(e) => setObservacaoPedido(e.target.value)} 
//         />
//       </div>

//       <div className={styles.buttons}>
//         {botoesStatus[statusPedido][0] ? (
//           <Link href={`/interno/pedidos/alterar`} passHref>
//             <ShineButton text="ALTERAR STATUS" />
//           </Link>
//         ) : null}
        
//         {botoesStatus[statusPedido][2] ? (
//           <ShineButton text="EXCLUIR" callback={onExcluir} />
//         ) : null}
//         {botoesStatus[statusPedido][1] ? (
//           <Link href={`/interno/pedidos/visualizar`} passHref>
//             <ShineButton text="VER MAIS" />
//           </Link>
//         ) : null}
//       </div>
//     </div>
//   );
// }


"use client";

import { useEffect, useState } from 'react';
import InputLabel from '../../inputs/inputLabel/inputLabel';
import ShineButton from '../../buttons/shineButton/shineButton';
import StatusPopup from '@/components/modals/alterarStatus/page';
import Link from 'next/link';
import styles from './pedidos.module.css';

export default function PedidoCard({
  numeroPedido,
  nomeCliente,
  cpfCnpj,
  dataEmissao,
  valor,
  observacao,
  statusPedido,
  onExcluir
}) {
  const [nome, setNome] = useState(nomeCliente);
  const [cpf, setCpf] = useState(cpfCnpj);
  const [data, setData] = useState(dataEmissao);
  const [valorPedido, setValorPedido] = useState(valor);
  const [observacaoPedido, setObservacaoPedido] = useState(observacao);

  const [mostrarPopup, setMostrarPopup] = useState(false);

  const coresStatus = ["rgba(99, 181, 199, 1)", "var(--orange)", "var(--cyan)", "var(--darkbrown)", "var(--darkred)"];
  const textosStatus = ["Pedido Criado", "Aguardando Pagamento", "Pagamento Confirmado", "Enviado", "Pedido Cancelado"];
  const botoesStatus = [[true, true, true], [true, true, true], [true, true, false], [true, true, false], [true, false, true]];

  function handleStatusSelecionado(index) {
    console.log('Novo status escolhido:', index);
    setMostrarPopup(false);
    // Aqui você pode atualizar o status no backend ou localmente, se quiser
  }

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.title}>PEDIDO:</div>
        <div className={styles['order-number']}>Nº: {numeroPedido}</div>
        <div className={styles.status} style={{ backgroundColor: coresStatus[statusPedido] }}>
          {textosStatus[statusPedido]}
        </div>
      </div>

      <div className={styles['form-group-row']}>
        <InputLabel label="Nome do cliente" value={nome} onChange={(e) => setNome(e.target.value)} />
        <InputLabel label="CPF/CNPJ" value={cpf} onChange={(e) => setCpf(e.target.value)} />
      </div>

      <div className={styles['form-group-row']}>
        <InputLabel label="Data de emissão" value={data} onChange={(e) => setData(e.target.value)} />
        <InputLabel label="Valor" value={valorPedido} onChange={(e) => setValorPedido(e.target.value)} />
      </div>

      <div className={styles['form-group']}>
        <InputLabel label="Observação" value={observacaoPedido} onChange={(e) => setObservacaoPedido(e.target.value)} />
      </div>

      <div className={styles.buttons}>
        {botoesStatus[statusPedido][0] && (
          <ShineButton text="ALTERAR STATUS" callback={() => setMostrarPopup(true)} />
        )}

        {botoesStatus[statusPedido][2] && (
          <ShineButton text="EXCLUIR" callback={onExcluir} />
        )}

        {botoesStatus[statusPedido][1] && (
          <Link href={`/interno/pedidos/visualizar`} passHref>
            <ShineButton text="VER MAIS" />
          </Link>
        )}
      </div>

      {/* Popup de status */}
      {mostrarPopup && (
        <StatusPopup
          onClose={() => setMostrarPopup(false)}
          onSelectStatus={handleStatusSelecionado}
        />
      )}
    </div>
  );
}
