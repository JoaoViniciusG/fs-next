'use client';

import React, { useState } from 'react';
import BasicScreen from '@/components/screens/basicScreen/basicScreen';
import BorderContainer from '@/components/containers/borderContainer/page';
import PerfilEdicao from '@/components/userPerfil/page';
import AddressOption from '@/components/containers/endereco/addressOption';
import StandardButton from '@/components/buttons/standardButton/standardButton';
import styles from './page.module.css'

export default function PageDadosConta() {
  const [nome, setNome] = useState('Nome');
  const [senha, setSenha] = useState('');
  const [email, setEmail] = useState('08.561.701/0001-01');
  const [sexo, setSexo] = useState('');
  const [cpf, setCpf] = useState('');
  const [telefone, setTelefone] = useState('');
  const [dataNascimento, setDataNascimento] = useState('');
  
  
  return (
    <BasicScreen>
      <BorderContainer title="Dados da empresa: ">
        <PerfilEdicao readonly={true}> </PerfilEdicao>

      </BorderContainer>

      <BorderContainer title="Endereço: ">
        <div className={StyleSheet.divEnderecos}>
            <AddressOption 
                logradouro="Av.beira Rio"
                bairro="Centro" 
                cidade="Vilhena"
                UF="Ro">
            </AddressOption>
        </div>
      </BorderContainer>

      <div className={styles.baixo}>
                <StandardButton text="ALTERAR" hoverColor="var(--cadetblue-ligtht)"></StandardButton>
                <div className={styles.sair}>
                <span>Sair</span>
            </div> 
          </div>
      


    </BasicScreen>
    
  );
}
