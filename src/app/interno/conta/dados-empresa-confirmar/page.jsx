'use client';

import React, { useState, useEffect } from 'react';
import BasicScreen from '@/components/screens/basicScreen/basicScreen';
import BorderContainer from '@/components/containers/borderContainer/page';
import PerfilEdicao from '@/components/userPerfil/page';
import AddressOption from '@/components/containers/endereco/addressOption';
import StandardButton from '@/components/buttons/standardButton/standardButton';
import styles from './page.module.css';
import AddAddressButton from '@/components/buttons/addAddressButton/addAddressButton';
import AlertModal from '@/components/modals/alertModal/alertModal';
import ActionModal from '@/components/modals/actionModal/actionModal'; 

export default function PageDadosEmpresaConfirmar() {
  const [modalOpenSair, setModalOpenSair] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const[empresaData, setEmpresaData]=useState(false)

  const [endereco, setEndereco] = useState(null);

  useEffect(() => {
    fetch('http://localhost:3001/dadosEmpresa', {
      credentials: 'include',
    })
      .then((res) => {
        if (!res.ok) throw new Error('Erro ao buscar dados da empresa');
        return res.json();
      })
      .then((data) => {
        const empresa = data.payload;
        setEmpresaData(empresa);
        setEndereco(empresa.endereco || null);
      })
      .catch((error) => {
        console.error('Erro ao carregar dados da empresa:', error);
        setEmpresaData(null);
        setEndereco(null);
      });
  }, []);

  const handleConfirmClick = () => {
    setModalOpen(true);
  };

  const handleConfirmClickSair = () => {
    setModalOpenSair(true);
  };

  return (
    <>
      <BasicScreen>
        <BorderContainer title="Dados da empresa: ">
        <PerfilEdicao
            nome={empresaData?.nomeFantasia || ''}
            email={empresaData?.email || ''}
            cnpj={empresaData?.cnpj || ''}
            razaoSocial={empresaData?.razaoSocial || ''}
            telefone={empresaData?.telefone || ''}
            dataCadastro={empresaData?.dataCadastro ? new Date(empresaData.dataCadastro).toLocaleDateString() : ''}
          />
        </BorderContainer>

      
        <BorderContainer title="Endereço:">
          <div className={styles.divEnderecos}>
            {endereco ? (
              <AddressOption
                id={endereco.id}
                logradouro={endereco.logradouro}
                numero={endereco.numero}
                bairro={endereco.bairro}
                cidade={endereco.cidade}
                UF={endereco.uf || endereco.estado}
              />
            ) : (
              <span>Endereço não encontrado</span>
            )}
          </div>
        </BorderContainer>

        <div className={styles.baixo}>
          <StandardButton text="CONFIRMAR" hoverColor="var(--cyan)" callback={handleConfirmClick} />

          <div className={styles.sair}>
            <span onClick={handleConfirmClickSair}>Sair</span> {/* Correção aqui */}
          </div> 
        </div>
      </BasicScreen>

      <ActionModal
        title="Aviso"
        text="Tem certeza que deseja sair da conta?"
        bsIcon="bi bi-exclamation-triangle"
        isOpen={modalOpenSair}
        setIsOpen={setModalOpenSair}
        textBtn1="CANCELAR"
        textBtn2="CONFIRMAR"
        callbackB1={() => console.log("CANCELOU")}
        callbackB2={() => console.log("CONFIRMOU")}
      />

      <AlertModal
        title="Atualizado"
        text="Atualização realizada com sucesso!"
        bsIcon="bi-check2-circle"
        isOpen={modalOpen}
        setIsOpen={setModalOpen}
      />
    </>
  );
}
