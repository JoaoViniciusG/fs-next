'use client';

import React, { useState } from 'react';
import BasicScreen from '@/components/screens/basicScreen/basicScreen';
import InputLabel from '@/components/inputs/inputLabel/inputLabel'; 
import Image from 'next/image'; 
import styles from './page.module.css'; 
import BorderContainer from '@/components/containers/borderContainer/page';
import DefaultApplicationButton from '@/components/buttons/defaultApplicationButton/defaultApplicationButton';

export default function pageDadosConta(){
  const [nome, setNome] = useState('Nome');
  const [senha, setSenha] = useState('');
  const [email, setEmail] = useState('08.561.701/0001-01');
  const [sexo, setSexo] = useState('');
  const [cpf, setCpf] = useState('');
  const [telefone, setTelefone] = useState('');
  const [dataNascimento, setDataNascimento] = useState('');
  
  return (
        <BasicScreen>
            <BorderContainer title="Dados da conta">
                <div className={styles.containerr}>
                        <div className={styles.perfil}>
                            <Image 
                                src="/usuario.png" 
                                alt="Usuário" 
                                width={260} 
                                height={240} 
                                className={styles.imagemUsuario} 
                            />
                        <button className={styles.editar}>Editar</button>
                        </div>

                <div className={styles.campos}>
                    <InputLabel 
                        label="Nome" 
                        value={nome} 
                        setValue={setNome} 
                        className={styles.inputDadosPessoais} 
                        readonly={true} 
                    />
                    <InputLabel 
                        label="Senha" 
                        value={senha} 
                        setValue={setSenha} 
                        className={styles.inputDadosPessoais} 
                        readonly={true} 
                    />
                    <InputLabel 
                        label="E-mail" 
                        value={email} 
                        setValue={setEmail} 
                        type="email" 
                        className={styles.inputDadosPessoais} 
                        readonly={true} 
                    />
                    <div className={styles.alterarSenha}>
                        <p>Alterar senha</p>
                    </div>
                </div>
          </div>
            </BorderContainer>

            <BorderContainer title="Dados pessoais">
            <div className= {`${styles.campos} ${styles.camposInput}`}>
              <InputLabel 
                label="CPF" 
                value={cpf} 
                setValue={setCpf} 
                className={styles.inputDadosPessoais} 
                readonly={true} 
              />
              <InputLabel 
                label="Telefone" 
                value={telefone} 
                setValue={setTelefone} 
                className={styles.inputDadosPessoais} 
                readonly={true} 
              />
              <InputLabel 
                label="Data de Nascimento" 
                value={dataNascimento} 
                setValue={setDataNascimento} 
                type="date" 
                className={styles.inputDadosPessoais} 
                readonly={true} 
              />

              <div className={styles.sexo}>
                <label>Sexo:</label>
                <label>
                  <input 
                    type="radio" 
                    name="sexo" 
                    value="feminino" 
                    checked={sexo === "feminino"} 
                    onChange={() => setSexo("feminino")} 
                  /> Feminino
                </label>
                <label>
                  <input 
                    type="radio" 
                    name="sexo" 
                    value="masculino" 
                    checked={sexo === "masculino"} 
                    onChange={() => setSexo("masculino")} 
                  /> Masculino
                </label>
              </div>
            </div>
            </BorderContainer>

            <BorderContainer title="Endereço">
                    <div className={styles.divEnderecos}>
                        <button type="button" className={styles.btnAdicionar} >
                            Adicionar endereço +
                    </button>
                    </div>
            </BorderContainer>
          
          <div className={styles.baixo}>
            <DefaultApplicationButton text="CONFIRMAR" hoverColor="var(--cyan)"></DefaultApplicationButton>
            <div className={styles.sair}>
              <span>Sair</span>
            </div> 
          </div>
          
        </BasicScreen>
  );
};
