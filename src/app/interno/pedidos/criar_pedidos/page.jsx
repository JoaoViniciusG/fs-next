"use client";

import StandardButton from "@/components/buttons/stardardButton/standardButton";
import BasicScreen from "@/components/screens/basicScreen/basicScreen";
import InputLabel from "@/components/inputs/inputLabel/inputLabel";
import styles from "./page.module.css"
import BorderContainer from "@/components/containers/borderContainer/page";
import { useState } from "react";

export default function PageCriarPedidos() {

  const [nome, setNome] = useState("");
    const [cpfCnpj, setCpfCnpj] = useState("");
    const [endereco, setEndereco] = useState("");
    const [bairro, setBairro] = useState("");
    const [cep, setCep] = useState("");
    const [cidade, setCidade] = useState("");
    const [estado, setEstado] = useState("");
    const [telefone, setTelefone] = useState("");
    
    return (
      <BasicScreen pageTitle="Criar pedido">
        <BorderContainer title="Dados do cliente">

          {/* <div className={styles.linha}>
          <InputLabel label="Nome:" style= {{paddingTop: "990px", width: "90%"}} />
          <InputLabel label="CPF:" style= {{paddingTop: "990px", width: "90%",
           display: "flex",
            flexDirection: "column",
            flex: "1 1 0%",
            padding: "5px 20px 5px 5px"}} />
                            
                        
                    </div> */}
          <div>
            <div className={styles.linha}>
                <InputLabel className={styles.label} label="Nome:" value={nome} setValue={setNome}  width="190%" />
                <InputLabel className={styles.label} label="CPF/CNPJ:" value={cpfCnpj} setValue={setCpfCnpj} width="110%" />
            </div>

            <div className={styles.linha}>
                <InputLabel className={styles.label} label="Endereço:" value={endereco} setValue={setEndereco}  width="130%" />
                <InputLabel className={styles.label} label="Bairro:" value={bairro} setValue={setBairro}  width="80%" />
                <InputLabel className={styles.label} label="CEP:" value={cep} setValue={setCep}  width="70%" />
            </div>

            <div className={styles.linha}>
                <InputLabel  className={styles.label} label="Cidade:" value={cidade} setValue={setCidade}  width="90%" />
                <InputLabel className={styles.label} label="Estado:" value={estado} setValue={setEstado} width="90%" />
                <InputLabel className={styles.label} label="Telefone:" value={telefone} setValue={setTelefone}  width="90%" />
            </div>
        </div>
                    
        </BorderContainer>
      </BasicScreen>
    );
  }
  





