"use client";

import styles from './page.module.css';
import StandardButton from "@/components/buttons/stardardButton/standardButton";
import BasicScreen from "@/components/screens/basicScreen/basicScreen";
import BorderContainer from "@/components/containers/borderContainer/page";
import InputLabel from '@/components/inputs/inputLabel/inputLabel';

export default function PageAdicionarCliente() {
  return (
    <BasicScreen pageTitle="Cadastrar cliente">
      <BorderContainer title = 'Dados pessoais'>
      <div className={styles.div_content_main}>
                    <div className={styles.container_content_dados}>
                        <div className={styles.container_box}>
                          <div>
                            <InputLabel label="Nome:" required={true}  readonly={false} width='50vh' />
                            <InputLabel label="CPF:"  required={true}  readonly={false} width='50vh'/>
                            <InputLabel label="Data de nascimento:" required={true}  readonly={false} width='50vh' />
                          </div>

                          <div>
                            <InputLabel label="Telefone:" required={true}  readonly={false} width='50vh' />
                            <InputLabel label="E-mail:" required={true}  readonly={false} width='50vh' />
                            <InputLabel placeholder='Teste' label="Sexo:" required={true}  readonly={false} width='50vh' />
                          </div>   
                        </div>
                    </div>
                </div>
      </BorderContainer>
      <BorderContainer title = 'Endereço'>
      <button type="button" className={styles.btnadicionar}>Adicionar endereço +</button>
      </BorderContainer>
      

        <StandardButton text="CADASTRAR" hoverColor="#63C7B8" style={{alignSelf:"end", marginTop:30}}callback={() => { }} />

    </BasicScreen>
  );
}