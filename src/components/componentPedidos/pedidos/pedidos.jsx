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

import { useState, useContext } from "react";
import InputLabel from "../../inputs/inputLabel/inputLabel";
import ShineButton from "../../buttons/shineButton/shineButton";
import StatusPopup from "@/components/modals/alterarStatus/page";
import { useRouter } from "next/navigation";
import styles from "./pedidos.module.css";
import { PedidoContext } from "@/context/pedidos";
import TextAreaInput from "@/components/inputs/inputLabelObs/inputLabel";

export default function PedidoCard({
  numeroPedido,
  nomeCliente,
  cpfCnpj,
  dataEmissao,
  valor,
  observacao,
  statusPedido,
  onExcluir,
  idPedido,
  produtos = [], // recebe o array de produtos do pedido
}) {
  const { atualizarStatusPedido } = useContext(PedidoContext);
  const router = useRouter();

  const [nome, setNome] = useState(nomeCliente);
  const [cpf, setCpf] = useState(cpfCnpj);
  const [data, setData] = useState(dataEmissao);
  const [valorPedido, setValorPedido] = useState(valor);
  const [observacaoPedido, setObservacaoPedido] = useState(observacao);
  const [mostrarPopup, setMostrarPopup] = useState(false);
  const [status, setStatus] = useState(statusPedido);

  const coresStatus = [
    "rgba(99, 181, 199, 1)",
    "var(--orange)",
    "var(--cyan)",
    "green",
    "var(--darkred)",
    "var(--green)",
  ];
  const textosStatus = [
    "Pedido Criado",
    "Aguardando Pagamento",
    "Pagamento Confirmado",
    "Enviado",
    "Pedido Cancelado",
    "Entregue",
  ];
  const botoesStatus = [
    [true, true, true], // Criado
    [true, true, true], // Aguardando pagamento
    [true, true, false], // Pagamento confirmado
    [true, true, false], // Enviado
    [true, true, true], // Cancelado
    [true, true, false], // Entregue
  ];

  async function handleStatusSelecionado(index, id) {
    setMostrarPopup(false);
    const statusNum = Number(index);
    if (!id) {
      console.error("idPedido está undefined ou null");
      return;
    }
    const sucesso = await atualizarStatusPedido(id, statusNum);
    if (sucesso) {
      setStatus(statusNum);
    }
  }

  function handleVerMais() {
   
    const query = new URLSearchParams({
      idPedido,
      nomeCliente: nome,
      cpfCnpj: cpf,
      dataEmissao: data,
      valor,
      observacao,
      statusPedido: String(status),
      produtos: encodeURIComponent(JSON.stringify(produtos)),
    });

    router.push(`/interno/pedidos/visualizar?${query.toString()}`);
  }

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.title}>PEDIDO:</div>
        <div className={styles["order-number"]}>Nº: {numeroPedido}</div>
        <div className={styles.status} style={{ backgroundColor: coresStatus[status] }}>
          {textosStatus[status]}
        </div>
      </div>

      <div className={styles.containerCardInfos}>
        <div className={styles["form-group-row"]}>
          <InputLabel label="Nome do cliente" value={nome} onChange={(e) => setNome(e.target.value)} style={{width: '60%'}}/>
          <InputLabel label="CPF/CNPJ" value={cpf} readonly={true} onChange={(e) => setCpf(e.target.value)} style={{width: '40%'}} />
        </div>

        <div className={styles["form-group-row"]}>
          <InputLabel label="Data de emissão" value={data} readonly={true} onChange={(e) => setData(e.target.value)} style={{width: '40%'}}/>
          <InputLabel label="Valor" value={valorPedido} readonly={true} onChange={(e) => setValorPedido(e.target.value)} style={{width: '40%'}}/>
        </div>

        <div className={styles["form-group"]}>
          <TextAreaInput 
            label="Observação" 
            readonly={true}
            className={styles.inputTextAreaLabel}
            classNameInput={styles.inputTextArea}
            value={observacaoPedido} 
            onChange={(e) => setObservacaoPedido(e.target.value)}/>
        </div>
      </div>


      <div className={styles.buttons}>
        {botoesStatus[status][0] && (
          <ShineButton text="ALTERAR STATUS" callback={() => setMostrarPopup(true)} />
        )}

        {botoesStatus[status][2] && <ShineButton text="EXCLUIR" callback={onExcluir} />}

        {botoesStatus[status][1] && <ShineButton text="VER MAIS" callback={handleVerMais} />}
      </div>

      {mostrarPopup && (
        <StatusPopup
          onClose={() => setMostrarPopup(false)}
          onSelectStatus={(index, id) => handleStatusSelecionado(index, id)}
          idPedido={idPedido}
        />
      )}
    </div>
  );
}
