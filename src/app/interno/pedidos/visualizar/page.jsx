"use client";

import StandardButton from "@/components/buttons/standardButton/standardButton";
import BasicScreen from "@/components/screens/basicScreen/basicScreen";
import InputLabel from "@/components/inputs/inputLabel/inputLabel";
import styles from "./page.module.css"
import BorderContainer from "@/components/containers/borderContainer/page";
import { useState } from "react";
import TextAreaInput from "@/components/inputs/inputLabelObs/inputLabel";
import Link from "next/link";
import TotalSummary from "@/components/componentPedidos/inferior/pedidos";

export default function PageAlterarPedidos() {

  const [nome, setNome] = useState("");
  const [cpfCnpj, setCpfCnpj] = useState("");
  const [endereco, setEndereco] = useState("");
  const [bairro, setBairro] = useState("");
  const [cep, setCep] = useState("");
  const [cidade, setCidade] = useState("");
  const [estado, setEstado] = useState("");
  const [telefone, setTelefone] = useState("");

    const[busca, setBusca]= useState('');
    const [subtotal, setSubtotal] = useState("");
    const [desconto, setDesconto] = useState("");
    const [total, setTotal] = useState("");
    const [observacao, setObservacao] = useState("");
    
    return (
      <BasicScreen pageTitle="Informações do pedido">
        <BorderContainer title="Dados do cliente">
          <div className={styles.dvInputs}>
            <div className={styles.linha}>
                <InputLabel readonly={true}  label="Nome:" value={nome} setValue={setNome}  width= "80%" style={{flex:1}}/>
                <InputLabel readonly={true}  label="CPF/CNPJ:" value={cpfCnpj} setValue={setCpfCnpj}  width= "80%" style={{flex:1}} />
            </div>

            <div className={styles.linha}>
                <InputLabel readonly={true}  label="Endereço:" value={endereco} setValue={setEndereco}  width="90%" style={{flex:1}} />
                <InputLabel readonly={true}  label="Bairro:" value={bairro} setValue={setBairro}  width="80%" style={{flex:1}} />
                <InputLabel readonly={true}  label="CEP:" value={cep} setValue={setCep}  width="70%" style={{flex:1}} />
            </div>

            <div className={styles.linha}>
                <InputLabel readonly={true}  label="Cidade:" value={cidade} setValue={setCidade}  width="90%" style={{flex:1}} />
                <InputLabel readonly={true}  label="Estado:" value={estado} setValue={setEstado} width="90%" style={{flex:1}}/>
                <InputLabel readonly={true}  label="Telefone:" value={telefone} setValue={setTelefone}  width="90%" style={{flex:1}} />
            </div>
        </div>
      </BorderContainer>


      <BorderContainer title={"Dados do pedido:"} className={styles.borderContainer}>
        <div className={styles.containerDataMaster}>
        
          <div className={styles.tableProducts}>
            <div className={styles.headerListProducts}>
              <p className={styles.listHeaderTitle}>Cód. do Produto</p>
              <p className={styles.listHeaderTitle}>Nome do Produto / Modelo</p>
              <p className={styles.listHeaderTitle}>Marca</p>
              <p className={styles.listHeaderTitle}>Quantidade</p>
              <p className={styles.listHeaderTitle}>Valor Unit.</p>
              <p className={styles.listHeaderTitle}>Subtotal</p>
            </div>

            <div className={styles.divTableContainerContent}>
              <div>
                <hr className={styles.hrBorder} style={{ left: '15%' }} />
                <hr className={styles.hrBorder} style={{ left: '45%' }} />
                <hr className={styles.hrBorder} style={{ left: '55%' }} />
                <hr className={styles.hrBorder} style={{ left: '75%' }} />
                <hr className={styles.hrBorder} style={{ left: '87%' }} />
              </div>
              <table className={styles.tableContainerContent}>
                <thead>
                  <tr>
                    <th style={{ width: '15%' }}></th>
                    <th style={{ width: '30%' }}></th>
                    <th style={{ width: '10%' }}></th>
                    <th style={{ width: '20%' }}></th>
                    <th style={{ width: '12%' }}></th>
                    <th style={{ width: '13%' }}></th>
                  </tr>
                </thead>
              </table>
            </div>
          </div>
        </div>
      </BorderContainer>

        <TotalSummary/>
        {/* <BorderContainer> 
          <div className={styles.divContentInputTotal}>
            <div className={styles.linha}>
            <InputLabel 
            label="Subtotal" 
            value={subtotal} 
            setValue={setSubtotal} 
            className={styles.inputDadosPessoais} 
            readonly={true} 
            width= "80%"
          />
          <InputLabel 
            label="Desconto" 
            value={desconto} 
            setValue={setDesconto} 
            className={styles.inputDadosPessoais} 
            readonly={true} 
            width= "80%"
          />
          <InputLabel 
            label="Total" 
            value={total} 
            setValue={setTotal} 
            className={styles.inputDadosPessoais} 
            readonly={true} 
            width= "80%"
          />
            </div>

            <TextAreaInput 
                  label="Observação:" 
                  placeholder="Escreva sua descrição..." 
                  id="input-total" 
                />
              </div>
        </BorderContainer> */}

          <div className={styles.baixo}>
            <div className={styles.divTagBottom}>
                          <p>Código do pedido:</p>

                          <span>N° 000</span>
                      </div>

                  
              </div>
      </BasicScreen>
    );
  }
  





