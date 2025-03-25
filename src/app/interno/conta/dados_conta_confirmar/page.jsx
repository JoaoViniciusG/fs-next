'use client';

import React, { useState } from 'react';
import BasicScreen from '@/components/screens/basicScreen/basicScreen';
import InputLabel from '@/components/inputs/inputLabel/inputLabel'; 
import Image from 'next/image'; 
import styles from './page.module.css'
import BorderContainer from '@/components/containers/borderContainer/page';
import StandardButton from '@/components/buttons/standardButton/standardButton';
import AddressOption from '@/components/containers/endereco/addressOption';
import Link from 'next/link';
import ActionModal from '@/components/modals/actionModal/actionModal';
import AlertModal from '@/components/modals/alertModal/alertModal';
import AddAddressButton from '@/components/buttons/addAddressButton/addAddressButton';

export default function pageDadosConta(){
  const [nome, setNome] = useState('Nome');
  const [senha, setSenha] = useState('');
  const [email, setEmail] = useState('08.561.701/0001-01');
  const [sexo, setSexo] = useState('');
  const [cpf, setCpf] = useState('');
  const [telefone, setTelefone] = useState('');
  const [dataNascimento, setDataNascimento] = useState('');

  const[modalOpenSair, setModalOpenSair] = useState(false)
  const [modalOpen, setModalOpen] = useState(false)
      
        const handleConfirmClick = () => {
          setModalOpen(true)
        }

        const handleConfirmClickSair=()=>{
          setModalOpenSair(true);
        }
    
  
  return (
        <>
          <BasicScreen>
            <BorderContainer title="Dados da conta">
                <div className={styles.containerr}>
                        <div className={styles.perfil}>
                            <Image 
                                src="/usuario.png" 
                                alt="Usuário" 
                                width={220} 
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
                    />
                    <div className={styles.alterarSenha}>
                      <Link href= "/interno/conta/trocar_senha">
                          <p>Alterar senha</p>
                      </Link>
                        
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
                 
              />
              <InputLabel 
                label="Telefone" 
                value={telefone} 
                setValue={setTelefone} 
                className={styles.inputDadosPessoais} 
                 
              />
              <InputLabel 
                label="Data de Nascimento" 
                value={dataNascimento} 
                setValue={setDataNascimento} 
                type="date" 
                className={styles.inputDadosPessoais} 
                
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
                      
                      <AddAddressButton />
                      <AddressOption 
                          logradouro="Av.beira Rio"
                          bairro="Centro" 
                          cidade="Vilhena"
                          UF="Ro">
                      </AddressOption>
                    </div>
                    
            </BorderContainer>
          
          <div className={styles.baixo}>
            <StandardButton text="CONFIRMAR" hoverColor="var(--cyan)" callback={handleConfirmClick}></StandardButton>
            <div className={styles.sair}>
              <span onClick={handleConfirmClickSair}>Sair</span>
            </div> 
          </div>
          
        </BasicScreen>
        <ActionModal
             title="Aviso"
              text="Tem certeza que deseja sair da conta? "
              bsIcon="bi bi-exclamation-triangle"
              isOpen={modalOpenSair}
             setIsOpen={setModalOpenSair}
              textBtn1="CANCELAR"
              textBtn2="CONFIRMAR"
              callbackB1={()=>console.log("CANCELOU")}
             callbackB2={()=> console.log("CONFIRMOU")}
                        
         />

         <AlertModal
            title="Atualizado"
            text="Atualização realizada com sucesso! "
            bsIcon="bi-check2-circle"
            isOpen={modalOpen}
            setIsOpen={setModalOpen}
         />

        
        
      </>
  );
};
