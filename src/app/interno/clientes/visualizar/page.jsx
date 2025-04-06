"use client";

import styles from './page.module.css';
import StandardButton from "@/components/buttons/standardButton/standardButton";
import BasicScreen from "@/components/screens/basicScreen/basicScreen";
import BorderContainer from "@/components/containers/borderContainer/page";
import InputLabel from '@/components/inputs/inputLabel/inputLabel';
import AddressOption from '@/components/containers/endereco/addressOption'
import AlertModal from '@/components/modals/alertModal/alertModal';
import ActionModal from '@/components/modals/actionModal/actionModal';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function PageInformacoesCliente() {
  const [modalPergunta, setModalPergunta] = useState(false);
  const [modalExcluir, setModalExcluir] = useState(false);
  const router = useRouter();
  return (
    <>
    <BasicScreen pageTitle="Informações do cliente">
      <BorderContainer title = 'Dados pessoais'>
      <div className={styles.div_content_main}>
                    <div className={styles.container_content_dados}>
                        <div className={styles.container_box}>
                          <div>
                            <InputLabel placeholder="Nome" label="Nome:" required={true}  readonly={true} width='50vh' />
                            <InputLabel placeholder="000.000.000-00" label="CPF:"  required={true}  readonly={true} width='50vh'/>
                            <InputLabel placeholder="dd/mm/aaaa" label="Data de nascimento:" required={true}  readonly={true} width='50vh' />
                          </div>

                          <div>
                            <InputLabel placeholder="(DDD) 0 0000-0000" label="Telefone:" required={true}  readonly={true} width='50vh' />
                            <InputLabel placeholder="email@gmail.com" label="E-mail:" required={true}  readonly={true} width='50vh' />
  
                          <div className={styles.sexoContainer}>
                              <label>Sexo:</label> <br></br>
                              <label className={styles.radiolabel}>
                                  <input type="radio" name="sexo" value="feminino" />
                                  <span className={styles.customradio}></span> Feminino
                                  <input type="radio" name="sexo" value="masculino" />
                                  <span className={styles.customradio}></span> Masculino
                              </label>
                          </div>
                          </div>   
                        </div>
                    </div>
                </div>
      </BorderContainer>
      <BorderContainer title = 'Endereço'>
        <AddressOption id = '1' logradouro = 'Rua Barão do rio Branco' numero = '2314' bairro = 'Centro' cidade = 'Vilhena' uf = 'RO' ></AddressOption>
      </BorderContainer>
      <div className={styles.bottomButtonsContainer}>
        <StandardButton text="EXCLUIR CLIENTE" hoverColor="var(--darkred)" style={{alignSelf:"start", marginTop:30}}callback={() => {setModalPergunta(true)}} />
        <StandardButton text="ATUALIZAR" hoverColor="#63C7B8" style={{alignSelf:"end", marginTop:30}} callback={() => router.push('/interno/cliente/informacoesEditar')}/>
      </div>
    </BasicScreen>

    <ActionModal
      title='AVISO'
      text='Tem certeza que deseja excluir o cadastro desse cliente?'
      bsIcon="bi bi-exclamation-triangle-fill"
      isOpen={modalPergunta}
      setIsOpen={setModalPergunta}
      textBtn1='CANCELAR'
      textBtn2='CONFIRMAR'
      callbackB2={() => setModalExcluir(true)}
      />

      <AlertModal
        title='EXCLUÍDO'
        text='Cliente excluído com sucesso!'
        bsIcon="bi-check2-circle"
        setIsOpen={setModalExcluir}
        isOpen={modalExcluir}
      />
    </>
  );
}


      
   