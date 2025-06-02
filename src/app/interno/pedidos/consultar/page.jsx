"use client";

import StandardButton from "@/components/buttons/standardButton/standardButton";
import BasicScreen from "@/components/screens/basicScreen/basicScreen";
import InputLabel from "@/components/inputs/inputLabel/inputLabel";
import styles from "./page.module.css"
import BorderContainer from "@/components/containers/borderContainer/page";
import { useState, useContext, useEffect } from "react";
import PedidoCard from "@/components/componentPedidos/pedidos/pedidos";
import ExcluirPedido from "@/components/bigModals/excluirPedido/page";
import AlertModal from "@/components/modals/alertModal/alertModal";
import { PedidosContext } from "@/context/pedidos";
import * as Icon from 'react-feather';


export default function pageConsultarpedido() {
    const context = useContext(PedidosContext);

    const [busca, setBusca] = useState('')
    const [modalExcluirPedidoOpen, setModalExcluirPedidoOpen] = useState(false);
    const [showAlertModal, setShowAlertModal] = useState(false);

    useEffect(() => {
        context.receberPedidos();
    }, []);

    const handleExcluirPedido = () => {
        setModalExcluirPedidoOpen(false);  // Fecha o modal de exclusão
        setShowAlertModal(true);  // Abre o alerta de sucesso
    };
    return (
        <>
            <BasicScreen pageTitle="Consultar pedidos">
                <p>
                    {JSON.stringify(context.pedidos)}
                </p>
                
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
                            <StandardButton text="BUSCAR PEDIDO" hoverColor="var(--cyan)" />
                        </div>
                    </div>
                    
                </BorderContainer>

                <BorderContainer title="Pedidos:">
                    <div className={styles.pedidos}>
                        <PedidoCard
                            numeroPedido="001"
                            nomeCliente="José Santos"
                            cpfCnpj="123.456.789-00"
                            dataEmissao="29/08/2024"
                            valor="R$ 667,49"
                            observacao="Requisição: N° 000153."
                            statusPedido={0}
                            corStatus="rgba(99, 181, 199, 1)"
                            botoes={["VER MAIS", "ALTERAR", "EXCLUIR"]}
                            onExcluir={() => setModalExcluirPedidoOpen(true)}
                        />
                        <PedidoCard
                            numeroPedido="001"
                            nomeCliente="José Santos"
                            cpfCnpj="123.456.789-00"
                            dataEmissao="29/08/2024"
                            valor="R$ 667,49"
                            observacao="Requisição: N° 000153."
                            statusPedido={1}
                            corStatus="var(--orange)"
                            botoes={["VER MAIS", "ALTERAR", "EXCLUIR"]}
                        />
                        <PedidoCard
                            numeroPedido="001"
                            nomeCliente="José Santos"
                            cpfCnpj="123.456.789-00"
                            dataEmissao="29/08/2024"
                            valor="R$ 667,49"
                            observacao="Requisição: N° 000153."
                            statusPedido={3}
                            corStatus="var(--darkbrown)"
                            botoes={["VER MAIS"]}
                        />

                        <PedidoCard
                            numeroPedido="001"
                            nomeCliente="José Santos"
                            cpfCnpj="123.456.789-00"
                            dataEmissao="29/08/2024"
                            valor="R$ 667,49"
                            observacao="Requisição: N° 000153."
                            statusPedido={2}
                            corStatus="var(--cyan)"
                            botoes={["VER MAIS"]}
                        />
                        <PedidoCard
                            numeroPedido="001"
                            nomeCliente="José Santos"
                            cpfCnpj="123.456.789-00"
                            dataEmissao="29/08/2024"
                            valor="R$ 667,49"
                            observacao="Requisição: N° 000153."
                            statusPedido={4}
                            corStatus="var(--darkred)"
                            botoes={["EXCLUIR"]}

                        />

                    </div>


                </BorderContainer>
            </BasicScreen>

            <ExcluirPedido
                isOpen={modalExcluirPedidoOpen}
                setIsOpen={setModalExcluirPedidoOpen}
                callbackCancelar={() => setModalExcluirPedidoOpen(false)}
                callbackConfirmar={handleExcluirPedido} // Agora o alerta aparece
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



    )

}