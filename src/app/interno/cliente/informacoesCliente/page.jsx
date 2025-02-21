"use client";

import styles from './page.module.css';
import DefaultApplicationButton from "@/components/buttons/defaultApplicationButton/defaultApplicationButton";
import BasicScreen from "@/components/screens/basicScreen/basicScreen";
import BorderContainer from "@/components/containers/borderContainer/page";
import InputLabel from '@/components/inputs/inputLabel/inputLabel';

export default function PageAdicionarCliente() {
  return (
    <BasicScreen pageTitle="Informações do cliente">
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
                            <InputLabel label="Sexo:" required={true}  readonly={false} width='50vh' />
                          </div>   
                        </div>
                    </div>
                </div>
      </BorderContainer>
      <BorderContainer title = 'Endereço'>
      <button type="button" className={styles.btnadicionar}>Adicionar endereço +</button>
      </BorderContainer>
      

        <DefaultApplicationButton text="ATUALIZAR" hoverColor="#63C7B8" style={{alignSelf:"end", marginTop:30}}callback={() => { }} />

    </BasicScreen>
  );
}