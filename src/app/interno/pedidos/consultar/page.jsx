// "use client";

// import StandardButton from "@/components/buttons/standardButton/standardButton";
// import BasicScreen from "@/components/screens/basicScreen/basicScreen";
// import InputLabel from "@/components/inputs/inputLabel/inputLabel";
// import styles from "./page.module.css"
// import BorderContainer from "@/components/containers/borderContainer/page";
// import { useState, useContext, useEffect } from "react";
// import PedidoCard from "@/components/componentPedidos/pedidos/pedidos";
// import ExcluirPedido from "@/components/bigModals/excluirPedido/page";
// import AlertModal from "@/components/modals/alertModal/alertModal";
// import { PedidosContext } from "@/context/pedidos";
// import * as Icon from 'react-feather';


// export default function pageConsultarpedido() {
//     // const context = useContext(PedidosContext);

//     const [busca, setBusca] = useState('')
//     const [modalExcluirPedidoOpen, setModalExcluirPedidoOpen] = useState(false);
//     const [showAlertModal, setShowAlertModal] = useState(false);

//     // useEffect(() => {
//     //     context.receberPedidos();
//     // }, []);

//     const handleExcluirPedido = () => {
//         setModalExcluirPedidoOpen(false);  // Fecha o modal de exclusão
//         setShowAlertModal(true);  // Abre o alerta de sucesso
//     };
//     return (
//         <>
//             <BasicScreen pageTitle="Consultar pedidos">
//                 {/* <p>
//                     {JSON.stringify(context.pedidos)}
//                 </p> */}
                
//                 <BorderContainer title="Consultar pedidos">
//                     <div className={styles.div_container_main}>
//                         <div className={styles.filter_dados}>
//                                 <div className={styles.button_filter}>
//                                     <p className={styles.filter_text}>Filtro: </p>
//                                     <Icon.Filter className={styles.icon_filter} />
//                                 </div>
//                             </div>

//                         <div className={styles.container}>
//                             <InputLabel
//                                 label="Buscar o pedido"
//                                 value={busca}
//                                 setValue={setBusca}
//                                 width="80%"
//                                 style={{ flex: 1 }}
//                             />
//                             <StandardButton text="BUSCAR PEDIDO" hoverColor="var(--cyan)" />
//                         </div>
//                     </div>
                    
//                 </BorderContainer>

//                 <BorderContainer title="Pedidos:">
//                     <div className={styles.pedidos}>
//                         <PedidoCard
//                             numeroPedido="001"
//                             nomeCliente="José Santos"
//                             cpfCnpj="123.456.789-00"
//                             dataEmissao="29/08/2024"
//                             valor="R$ 667,49"
//                             observacao="Requisição: N° 000153."
//                             statusPedido={0}
//                             onExcluir={() => setModalExcluirPedidoOpen(true)}
//                         />
//                         <PedidoCard
//                             numeroPedido="001"
//                             nomeCliente="José Santos"
//                             cpfCnpj="123.456.789-00"
//                             dataEmissao="29/08/2024"
//                             valor="R$ 667,49"
//                             observacao="Requisição: N° 000153."
//                             statusPedido={1}
//                         />
//                         <PedidoCard
//                             numeroPedido="001"
//                             nomeCliente="José Santos"
//                             cpfCnpj="123.456.789-00"
//                             dataEmissao="29/08/2024"
//                             valor="R$ 667,49"
//                             observacao="Requisição: N° 000153."
//                             statusPedido={3}

//                         />

//                         <PedidoCard
//                             numeroPedido="001"
//                             nomeCliente="José Santos"
//                             cpfCnpj="123.456.789-00"
//                             dataEmissao="29/08/2024"
//                             valor="R$ 667,49"
//                             observacao="Requisição: N° 000153."
//                             statusPedido={2}
                           
//                         />
//                         <PedidoCard
//                             numeroPedido="001"
//                             nomeCliente="José Santos"
//                             cpfCnpj="123.456.789-00"
//                             dataEmissao="29/08/2024"
//                             valor="R$ 667,49"
//                             observacao="Requisição: N° 000153."
//                             statusPedido={4}

//                         />

//                     </div>


//                 </BorderContainer>
//             </BasicScreen>

//             <ExcluirPedido
//                 isOpen={modalExcluirPedidoOpen}
//                 setIsOpen={setModalExcluirPedidoOpen}
//                 callbackCancelar={() => setModalExcluirPedidoOpen(false)}
//                 callbackConfirmar={handleExcluirPedido} // Agora o alerta aparece
//                 bsIcon="bi bi-exclamation-triangle "
//                 title="Excluir Pedido"
//                 text="Tem certeza de que deseja excluir este pedido?"
//             />


//             <AlertModal
//                 title="Excluído"
//                 text="Pedido excluído com sucesso!"
//                 bsIcon="bi-check2-circle"
//                 isOpen={showAlertModal}
//                 setIsOpen={setShowAlertModal}
//             />
//         </>



//     )

// }

"use client";

import { useState, useEffect } from "react";
import PedidoCard from "@/components/componentPedidos/pedidos/pedidos";
import BasicScreen from "@/components/screens/basicScreen/basicScreen";
import BorderContainer from "@/components/containers/borderContainer/page";
import InputLabel from "@/components/inputs/inputLabel/inputLabel";
import StandardButton from "@/components/buttons/standardButton/standardButton";
import ExcluirPedido from "@/components/bigModals/excluirPedido/page";
import AlertModal from "@/components/modals/alertModal/alertModal";
import * as Icon from "react-feather";
import styles from "./page.module.css";

export default function pageConsultarpedido() {
  const [busca, setBusca] = useState("");
  const [termoBusca, setTermoBusca] = useState(""); // termo usado para buscar via API
  const [pedidos, setPedidos] = useState([]);
  const [modalExcluirPedidoOpen, setModalExcluirPedidoOpen] = useState(false);
  const [showAlertModal, setShowAlertModal] = useState(false);
  const [pedidoSelecionado, setPedidoSelecionado] = useState(null);

  // Buscar os pedidos da API quando termoBusca mudar
  useEffect(() => {
    async function fetchPedidos() {
      try {
        const url = termoBusca
          ? `http://localhost:3001/pedido?nomeCliente=${encodeURIComponent(termoBusca)}`
          : `http://localhost:3001/pedido`;

        const res = await fetch(url, {
          credentials: "include",
        });

        if (!res.ok) {
          console.error("Erro HTTP:", res.status);
          setPedidos([]); // Limpa pedidos se erro
          return;
        }

        const data = await res.json();

        if (data.success) {
          setPedidos(data.payload);
          console.log("Pedidos da API filtrados:", data.payload);
        } else {
          console.error("Erro ao carregar pedidos da API");
          setPedidos([]);
        }
      } catch (error) {
        console.error("Erro na requisição:", error);
        setPedidos([]);
      }
    }

    fetchPedidos();
  }, [termoBusca]);

  // Função para abrir modal de excluir com pedido selecionado
  function abrirExcluirPedido(pedido) {
    setPedidoSelecionado(pedido);
    setModalExcluirPedidoOpen(true);
  }

  // Função de callback depois de excluir pedido
  const handleExcluirPedido = () => {
    setModalExcluirPedidoOpen(false);
    setShowAlertModal(true);

    if (pedidoSelecionado) {
      setPedidos((prev) => prev.filter((p) => p.id !== pedidoSelecionado.id));
      setPedidoSelecionado(null);
    }
  };

  // Formatar data para exibir (ex: 10/06/2025)
  function formatarData(dataISO) {
    const data = new Date(dataISO);
    return data.toLocaleDateString("pt-BR");
  }

  // Formatar valor em real (R$)
  function formatarValor(valor) {
    return valor.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });
  }

  // Função disparada ao clicar no botão Buscar
  function handleBuscarPedido() {
    setTermoBusca(busca.trim());
  }

  return (
    <>
      <BasicScreen pageTitle="Consultar pedidos">
        <BorderContainer title="Consultar pedidos">
          <div className={styles.div_container_main}>
            <div className={styles.filter_dados}>
              <div className={styles.button_filter}>
                <p className={styles.filter_text}>Filtro: </p>
                <Icon.Filter className={styles.icon_filter} />
              </div>
            </div>

            <div className={styles.container}>
              <InputLabel
                label="Buscar o pedido"
                value={busca}
                setValue={setBusca}
                width="80%"
                style={{ flex: 1 }}
              />
              <StandardButton
                text="BUSCAR PEDIDO"
                hoverColor="var(--cyan)"
                callback={handleBuscarPedido}
              />
            </div>
          </div>
        </BorderContainer>

        <BorderContainer title="Pedidos:">
          <div className={styles.pedidos}>
            {pedidos.length === 0 ? (
              <p>Nenhum pedido encontrado.</p>
            ) : (
              pedidos.map((pedido, index) => (
                <PedidoCard
                  key={pedido.id || index}
                  numeroPedido={String(index + 1).padStart(3, "0")}
                  nomeCliente={pedido.nome}
                  cpfCnpj={pedido.cpf}
                  dataEmissao={formatarData(pedido.data)}
                  valor={formatarValor(pedido.valorTotal)}
                  observacao={pedido.observacao || ""}
                  statusPedido={pedido.statusPedido}
                  onExcluir={() => abrirExcluirPedido(pedido)}
                  idPedido={pedido.id}
                />
              ))
            )}
          </div>
        </BorderContainer>
      </BasicScreen>

      <ExcluirPedido
        isOpen={modalExcluirPedidoOpen}
        setIsOpen={setModalExcluirPedidoOpen}
        callbackCancelar={() => setModalExcluirPedidoOpen(false)}
        callbackConfirmar={handleExcluirPedido}
        bsIcon="bi bi-exclamation-triangle "
        title="Excluir Pedido"
        text="Tem certeza de que deseja excluir este pedido?"
      />

      <AlertModal
        title="Excluído"
        text="Pedido excluído com sucesso!"
        bsIcon="bi-check2-circle"
        isOpen={showAlertModal}
        setIsOpen={setShowAlertModal}
      />
    </>
  );
}
