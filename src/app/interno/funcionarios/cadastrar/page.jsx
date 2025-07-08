"use client";

import styles from './page.module.css';
import StandardButton from "@/components/buttons/standardButton/standardButton";
import BasicScreen from "@/components/screens/basicScreen/basicScreen";
import BorderContainer from "@/components/containers/borderContainer/page";
import InputLabel from '@/components/inputs/inputLabel/inputLabel';
import AddAddressButton from '@/components/buttons/addAddressButton/addAddressButton';
import AlertModal from '@/components/modals/alertModal/alertModal';
import { useState } from 'react';
import RadioButton from '@/components/inputs/radioButton/radioButton';

export default function PageCadastrarFuncionario() {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <>
    <BasicScreen pageTitle="Cadastrar funcionário">
      <BorderContainer title = 'Dados pessoais'>
      <div className={styles.div_content_main}>
                    <div className={styles.container_content_dados}>
                        <div className={styles.container_box}>
                          <div>
                            <InputLabel placeholder="Nome" label="Nome:" required={true}  readonly={false} width='50vh' />
                            <InputLabel placeholder="000.000.000-00" label="CPF:"  required={true}  readonly={false} width='50vh'/>
                            <InputLabel placeholder="dd/mm/aaaa" label="Data de nascimento:" required={true}  readonly={false} width='50vh' />
                          </div>
                          <div>
                            <InputLabel placeholder="(DDD) 0 0000-0000" label="Telefone:" required={true}  readonly={false} width='50vh' />
                            <InputLabel placeholder="email@gmail.com" label="E-mail:" required={true}  readonly={false} width='50vh' />
                          <div className={styles.sexoContainer}>
                              <label>Sexo:</label> <br></br>
                              <div className={styles.containerGender}>
                                <RadioButton radioGroup="GenderGroup" text="Feminino" textInLeft={false} />
                                <RadioButton radioGroup="GenderGroup" text="Masculino" textInLeft={false} />
                              </div>
                          </div>
                          </div>   
                        </div>
                    </div>
                </div>
      </BorderContainer>
      <BorderContainer title = 'Endereço'>
        <AddAddressButton/>
      </BorderContainer>
        <StandardButton text="CADASTRAR" hoverColor="#63C7B8" style={{alignSelf:"end", marginTop:30}}callback={() => {setModalOpen(true)}} />
    </BasicScreen>
    <AlertModal
    title='CADASTRADO'
    text='Funcionário cadastrado com sucesso! '
    bsIcon="bi-check2-circle"
    isOpen={modalOpen}
    setIsOpen={setModalOpen}
    />
    </>
  );
}