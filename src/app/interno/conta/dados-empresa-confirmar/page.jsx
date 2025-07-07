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

  const [empresaData, setEmpresaData] = useState(null);
  const [enderecos, setEnderecos] = useState([]);

  const [formEmpresa, setFormEmpresa] = useState({
    nomeFantasia: '',
    email: '',
    cnpj: '',
    razaoSocial: '',
    telefone: '',
    dataCadastro: '',
  });

  useEffect(() => {
    fetch('http://localhost:3001/dadosEmpresa', { credentials: 'include' })
      .then((res) => {
        if (!res.ok) throw new Error('Erro ao buscar dados da empresa');
        return res.json();
      })
      .then((data) => {
        const empresa = data.payload;
        setEmpresaData(empresa);
        setEnderecos(empresa.enderecos || []);

        setFormEmpresa({
          nomeFantasia: empresa.nomeFantasia || '',
          email: empresa.email || '',
          cnpj: empresa.cnpj || '',
          razaoSocial: empresa.razaoSocial || '',
          telefone: empresa.telefone || '',
          dataCadastro: empresa.dataCadastro || '',
        });
      })
      .catch((error) => {
        console.error('Erro ao carregar dados da empresa:', error);
        setEmpresaData(null);
        setEnderecos([]);
      });
  }, []);

  async function handleConfirmClick() {
    try {
      const empresaId = empresaData?.empresaId;

      function toMySQLDateTime(date) {
        const d = new Date(date);
        const yyyy = d.getFullYear();
        const mm = String(d.getMonth() + 1).padStart(2, '0');
        const dd = String(d.getDate()).padStart(2, '0');
        const hh = String(d.getHours()).padStart(2, '0');
        const mi = String(d.getMinutes()).padStart(2, '0');
        const ss = String(d.getSeconds()).padStart(2, '0');
        return `${yyyy}-${mm}-${dd} ${hh}:${mi}:${ss}`;
      }

      const dataCadastroMySQL = formEmpresa.dataCadastro
        ? toMySQLDateTime(formEmpresa.dataCadastro)
        : null;

      const response = await fetch(`http://localhost:3001/dadosEmpresa/${empresaId}`, {
        method: 'PATCH',
        credentials: 'include',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formEmpresa, dataCadastro: dataCadastroMySQL }),
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`Status ${response.status}: ${errorText}`);
      }

      setModalOpen(true);
    } catch (error) {
      alert('Erro ao atualizar dados: ' + error.message);
    }
  }

  const handleConfirmClickSair = () => {
    setModalOpenSair(true);
  };

  const setNomeFantasia = (v) => setFormEmpresa((f) => ({ ...f, nomeFantasia: v }));
  const setEmail = (v) => setFormEmpresa((f) => ({ ...f, email: v }));
  const setCnpj = (v) => setFormEmpresa((f) => ({ ...f, cnpj: v }));
  const setRazaoSocial = (v) => setFormEmpresa((f) => ({ ...f, razaoSocial: v }));
  const setTelefone = (v) => setFormEmpresa((f) => ({ ...f, telefone: v }));
  const setDataCadastro = (v) => setFormEmpresa((f) => ({ ...f, dataCadastro: v }));

  return (
    <>
      <BasicScreen>
        <BorderContainer title="Dados da empresa: ">
          <PerfilEdicao
            nome={formEmpresa.nomeFantasia}
            setNome={setNomeFantasia}
            email={formEmpresa.email}
            setEmail={setEmail}
            cnpj={formEmpresa.cnpj}
            setCnpj={setCnpj}
            razaoSocial={formEmpresa.razaoSocial}
            setRazaoSocial={setRazaoSocial}
            telefone={formEmpresa.telefone}
            setTelefone={setTelefone}
            dataCadastro={formEmpresa.dataCadastro}
            setDataCadastro={setDataCadastro}
            readonly={false}
          />
        </BorderContainer>

        <BorderContainer title="Endereços:">
          <div className={styles.divEnderecos}>
            <AddAddressButton />
            {enderecos.length > 0 ? (
              enderecos.map((endereco) => (
                <AddressOption
                  key={endereco.id}
                  id={endereco.id}
                  logradouro={endereco.logradouro}
                  numero={endereco.numero}
                  bairro={endereco.bairro}
                  cidade={endereco.cidade}
                  UF={endereco.uf || endereco.estado}
                />
              ))
            ) : (
              <span>Endereço não encontrado</span>
            )}
          </div>
        </BorderContainer>

        <div className={styles.baixo}>
          <StandardButton text="CONFIRMAR" hoverColor="var(--cyan)" callback={handleConfirmClick} />

          <div className={styles.sair}>
            <span onClick={handleConfirmClickSair}>Sair</span>
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
        callbackB1={() => console.log('CANCELOU')}
        callbackB2={() => console.log('CONFIRMOU')}
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
