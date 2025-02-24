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
            <div className={styles.container}>
            <InputLabel 
              label="Buscar o pedido" 
                value={busca} 
                setValue={setBusca} 
                width= "80%" 
                style={{flex:1} }
            />
            <StandardButton text="BUSCAR PEDIDO"></StandardButton>
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
                statusPedido="Pedido Criado"
                corStatus="rgba(99, 181, 199, 1)"
                botoes={[ "VER MAIS", "ALTERAR","EXCLUIR"]} 
                />
            <PedidoCard
                numeroPedido="001"
                nomeCliente="José Santos"
                cpfCnpj="123.456.789-00"
                dataEmissao="29/08/2024"
                valor="R$ 667,49"
                observacao="Requisição: N° 000153."
                statusPedido="Aguardando pagemnto"
                corStatus="var(--orange)" 
                botoes={[ "VER MAIS", "ALTERAR","EXCLUIR"]} 
            />
            <PedidoCard
                numeroPedido="001"
                nomeCliente="José Santos"
                cpfCnpj="123.456.789-00"
                dataEmissao="29/08/2024"
                valor="R$ 667,49"
                observacao="Requisição: N° 000153."
                statusPedido="Enviado"
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
                statusPedido="Pagamento confirmado"
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
                statusPedido="Pedido cancelado"
                corStatus="var(--darkred)" 
                botoes={["EXCLUIR"]} 

            />
         
        </div>
        
        
</BorderContainer>
    </BasicScreen>
    )
    
}