"use client";

import StandardButton from "@/components/buttons/standardButton/standardButton";
import BasicScreen from "@/components/screens/basicScreen/basicScreen";
import InputLabel from "@/components/inputs/inputLabel/inputLabel";
import styles from "./page.module.css"
import BorderContainer from "@/components/containers/borderContainer/page";
import { useState } from "react";
import TextAreaInput from "@/components/inputs/inputLabelObs/inputLabel";
import AlertModal from "@/components/modals/alertModal/alertModal";
import ActionModal from "@/components/modals/actionModal/actionModal";
import BuscarClienteModal from "@/components/bigModals/buscarClienteModal/page";
import AdicionarProdutoModal from "@/components/bigModals/addProdutoModal/page";
import ExcluirProduto from "@/components/bigModals/excluirProdutoModal/page";
import TotalSummary from "@/components/componentPedidos/inferior/pedidos";
import Footer from "@/components/componentPedidos/footerPedidos/footer";

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
    const[modalOpenCancel, setmodalOpenCancel]= useState(false)
  const [modalOpenn, setModalOpenn] = useState(false);
    const handleCancelar = () => {
      setmodalOpenCancel(true); 
    };
  
  const handleAlterar = () => {
    setShowAlertModal(true); 
  };


   const [modalOpen, setModalOpen] = useState(false);
    const [modalAdicionarProdutoOpen, setModalAdicionarProdutoOpen] = useState(false); 
    const [modalAlterarProdutoOpen, setModalAlterarProdutoOpen] = useState(false);
    const [modalExcluirProdutoOpen, setModalExcluirProdutoOpen ] =useState(false)
    const [showAlertModal, setShowAlertModal] = useState(false);
    const [showAlertModalExcluido, setShowAlertModalExcluido] = useState(false);
    const [showAlertModalCancel, setShowAlertModalCancel]= useState(false);
    const[showBusca, setShowBusca]= useState(false)

    const handleCancel=()=>{
      setShowAlertModalCancel(true)
    }
    const handleConfirmClick = () => {
      setModalOpen(true);
    };
  
    const handleConsultar = () => {
      console.log("Consultando cliente...");
    };
  
    const handleConfirmarBuscarCliente = () => {
      setModalOpenn(false);
    };
  
    const handleConfirmarAdicionarProduto = () => {
      setModalAdicionarProdutoOpen(false); 
    };
  
    const handleConfirmarAlterarProduto = () => {
      setShowAlertModal(true)
    };
  
    const handleExcluirProduto = () => {
      setModalExcluirProdutoOpen(false); 
      setShowAlertModalExcluido(true); 
    };

    const handleBusca=()=>{
      setShowBusca(true)
    }

    
    
    return (
      <>
      <BasicScreen pageTitle="Alterar pedido">
        <BorderContainer title="Dados do cliente">
          <div className={styles.dvInputs}>
            <InputLabel 
                  label="Buscar o cliente" 
                  value={busca} 
                  setValue={setBusca} 
                  showLupa={true}
                  width= "70%" 
                  style={{flex:1} }
                  onClick={() => setShowBusca(true)}
                  />
            <div className={styles.linha}>
                <InputLabel label="Nome:" value={nome} setValue={setNome}  width= "80%" style={{flex:1}}/>
                <InputLabel label="CPF/CNPJ:" value={cpfCnpj} setValue={setCpfCnpj}  width= "80%" style={{flex:1}} />
            </div>

            <div className={styles.linha}>
                <InputLabel  label="Endereço:" value={endereco} setValue={setEndereco}  width="90%" style={{flex:1}} />
                <InputLabel  label="Bairro:" value={bairro} setValue={setBairro}  width="80%" style={{flex:1}} />
                <InputLabel  label="CEP:" value={cep} setValue={setCep}  width="70%" style={{flex:1}} />
            </div>

            <div className={styles.linha}>
                <InputLabel  label="Cidade:" value={cidade} setValue={setCidade}  width="90%" style={{flex:1}} />
                <InputLabel  label="Estado:" value={estado} setValue={setEstado} width="90%" style={{flex:1}}/>
                <InputLabel  label="Telefone:" value={telefone} setValue={setTelefone}  width="90%" style={{flex:1}} />
            </div>
        </div>
      </BorderContainer>


      <BorderContainer title={"Dados do pedido:"} className={styles.borderContainer}>
        <div className={styles.containerDataMaster}>
          <div className={styles.containerHeaderListOptions}>
          <StandardButton 
                className={styles.buttonHeaderOptions} 
                text="ADICIONAR PRODUTO" 
                hoverColor="var(--cyan)" 
                callback={() => setModalAdicionarProdutoOpen(true)} // Abre o modal ao clicar
              />
           <StandardButton className={styles.buttonHeaderOptions} text="ALTERAR PRODUTO" hoverColor="var(--cadetblue-ligtht)" callback={() => setModalAlterarProdutoOpen(true)} />
           <StandardButton className={styles.buttonHeaderOptions} text="EXCLUIR PRODUTO" hoverColor="var(--darkred)" callback={() => setModalExcluirProdutoOpen(true)} />
          </div>

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
        <TotalSummary/>
          <Footer
          buttons={[
            { callback: handleCancel, text: "CANCELAR", hoverColor: "var(--darkred)" },
            { callback: handleAlterar, text: "CONFIRMAR", hoverColor: "var(--cyan)" }
          ]}
        />

      </BasicScreen>

      
            <ActionModal
              title="AVISO"
              text="Tem certeza de que deseja cancelar? Lembre-se de que todas as alterações feitas serão excluídas ao cancelar!"
              bsIcon="bi bi-exclamation-triangle"
              isOpen={showAlertModalCancel}
              setIsOpen={setShowAlertModalCancel} 
              textBtn1="DISPENSAR"
              textBtn2="CONFIRMAR"
              callbackB1={()=>console.log("CANCELOU")}
              callbackB2={(handleConfirmarAlterarProduto)}
            />
            <AlertModal
              title="Alterado"
              text="Alterado com sucesso!"
              bsIcon="bi-check2-circle"
              isOpen={showAlertModal}
              setIsOpen={setShowAlertModal} 
            />

          <AlertModal
              title="Alterado"
              text="Alterado com sucesso!"
              bsIcon="bi-check2-circle"
              isOpen={showAlertModal}
              setIsOpen={setShowAlertModal}
            />
            <AlertModal
              title="Excluído"
              text="Produto excluído com sucesso!"
              bsIcon="bi-check2-circle"
              isOpen={showAlertModalExcluido}
              setIsOpen={setShowAlertModalExcluido} 
            />
                  
            
            <BuscarClienteModal 
              isOpen={modalOpenn} 
              setIsOpen={setModalOpenn} 
              callbackConsultar={handleConsultar} 
              callbackConfirmar={handleConfirmarBuscarCliente} 
            />
      
            
            <AdicionarProdutoModal 
              isOpen={modalAdicionarProdutoOpen} 
              setIsOpen={setModalAdicionarProdutoOpen} 
              callbackConfirmar={handleConfirmarAdicionarProduto} 
              title="Adicionar produto"
            />
      
           
            <AdicionarProdutoModal 
              isOpen={modalAlterarProdutoOpen} 
              setIsOpen={setModalAlterarProdutoOpen} 
              callbackConfirmar={handleConfirmarAlterarProduto} 
              title="Alterar produto"
            />
          <ExcluirProduto
            isOpen={modalExcluirProdutoOpen} 
            setIsOpen={setModalExcluirProdutoOpen} 
            callbackConfirmar={handleExcluirProduto} 
            title="AVISO"
            bsIcon="bi bi-exclamation-triangle"
            text="Tem certeza de deseja excluir esse produto?"
          />

          <BuscarClienteModal 
                  isOpen={showBusca} 
                  setIsOpen={setShowBusca} 
                  callbackConsultar={handleConsultar} 
                  callbackConfirmar={handleConfirmarBuscarCliente} 
                />
      </>
    );
  }
  





