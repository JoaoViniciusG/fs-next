"use client";

import StandardButton from "@/components/buttons/standardButton/standardButton";
import BasicScreen from "@/components/screens/basicScreen/basicScreen";
import InputLabel from "@/components/inputs/inputLabel/inputLabel";
import styles from "./page.module.css"
import BorderContainer from "@/components/containers/borderContainer/page";
import { useState } from "react";
import TextAreaInput from "@/components/inputs/inputLabelObs/inputLabel";
import PedidoCard from "@/components/pedidos/pedidos";

export default function pageConsultarpedido(){
    const[busca, setBusca]= useState('')
    return(
        <BasicScreen pageTitle="Consultar pedidos">
        <BorderContainer title="Consultar pedidos">
            <InputLabel 
              label="Buscar o pedido" 
                value={busca} 
                setValue={setBusca} 
                width= "80%" 
                style={{flex:1} }
            />
            <StandardButton text="BUSCAR PEDIDO"></StandardButton>
        </BorderContainer>

        <BorderContainer title="Pedidos:">

<PedidoCard
    numeroPedido="001"
    nomeCliente="José Santos"
    cpfCnpj="123.456.789-00"
    dataEmissao="29/08/2024"
    valor="R$ 667,49"
    observacao="Requisição: N° 000153."
    statusPedido="Pedido Criado"
    corStatus="rgba(99, 181, 199, 1)" // Cor do status
    botoes={["Ver Mais", "Alterar Pedido", "Excluir"]} // Botões que devem aparecer
    />
</BorderContainer>
    </BasicScreen>
    )
    
}