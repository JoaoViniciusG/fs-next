"use client";

import StandardButton from "@/components/buttons/stardardButton/standardButton";
import BasicScreen from "@/components/screens/basicScreen/basicScreen";
import BorderContainer from "@/components/containers/borderContainer/page";
import InputLabel from "@/components/inputs/inputLabel/inputLabel";
import styles from "./page.module.css"


export default function PageCriarPedidos() {
  return (
    <BasicScreen pageTitle="Criar pedido">
      <BorderContainer title= "Dados do cliente: " padding-top= "30px">
      <div class="campo-busca">
                        <label>
                            <h3 class="title-input">Buscar o cliente:</h3>
                            <div class="input-wrapper">
                                <input type="text" class="input buscar-cliente"/>
                                <button type="button" class="botao-lupa">
                                    <img src="../img/Lupa.png" alt="Lupa" class="icon-lupa">
                                </button>
                            </div>
                        </label>
                    </div>
      </BorderContainer>
  
    </BasicScreen>
  );
}




