"use client";

import StandardButton from "@/components/buttons/stardardButton/standardButton";
import BasicScreen from "@/components/screens/basicScreen/basicScreen";
import InputLabel from "@/components/inputs/inputLabel/inputLabel";
import styles from "./page.module.css"
import BorderContainer from "@/components/containers/borderContainer/page";


export default function PageCriarPedidos() {
    return (
      <BasicScreen pageTitle="Criar pedido">
        <BorderContainer title="Dados do cliente">
          




          <div className={styles.linha}>
          <InputLabel label="Nome:" style= {{paddingTop: "990px", width: "90%"}} />
          <InputLabel label="CPF:" style= {{paddingTop: "990px", width: "90%",
           display: "flex",
            flexDirection: "column",
            flex: "1 1 0%",
            padding: "5px 20px 5px 5px"}} />
                            
                        
                    </div>
        </BorderContainer>
      </BasicScreen>
    );
  }
  





