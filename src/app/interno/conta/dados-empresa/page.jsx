'use client';

import { useEffect, useState } from 'react';
import BasicScreen from '@/components/screens/basicScreen/basicScreen';
import BorderContainer from '@/components/containers/borderContainer/page';
import PerfilEdicao from '@/components/userPerfil/page';
import AddressOption from '@/components/containers/endereco/addressOption';
import StandardButton from '@/components/buttons/standardButton/standardButton';
import Link from 'next/link';
import styles from './page.module.css';
import ActionModal from '@/components/modals/actionModal/actionModal';

export default function PageDadosEmpresa() {
  const [modalOpenSair, setModalOpenSair] = useState(false);

  const [empresaData, setEmpresaData] = useState(null);
  const [enderecos, setEnderecos] = useState([]);

  function formatDateToInput(dateStr) {
    if (!dateStr) return '';
    const d = new Date(dateStr);
    if (isNaN(d.getTime())) return '';
    const yyyy = d.getFullYear();
    const mm = String(d.getMonth() + 1).padStart(2, '0');
    const dd = String(d.getDate()).padStart(2, '0');
    return `${yyyy}-${mm}-${dd}`;
  }

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
        setEnderecos(empresa.enderecos || []);
      })
      .catch((error) => {
        console.error('Erro ao carregar dados da empresa:', error);
        setEmpresaData(null);
        setEnderecos([]);
      });
  }, []);

  const handleConfirmClickSair = () => {
    setModalOpenSair(true);
  };

  return (
    <>
      <BasicScreen>
        <BorderContainer title="Dados da empresa:">
          <PerfilEdicao
            nome={empresaData?.nomeFantasia || ''}
            email={empresaData?.email || ''}
            cnpj={empresaData?.cnpj || ''}
            razaoSocial={empresaData?.razaoSocial || ''}
            telefone={empresaData?.telefone || ''}
            dataCadastro={formatDateToInput(empresaData?.dataCadastro)}
            readonly={true}
          />
        </BorderContainer>

        <BorderContainer title="Endereços:">
          <div className={styles.divEnderecos}>
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
          <Link href="/interno/conta/dados-empresa-confirmar">
            <StandardButton text="ALTERAR" hoverColor="var(--cadetblue-ligtht)" />
          </Link>

          <div className={styles.sair}>
            <span onClick={handleConfirmClickSair}>Sair</span>
          </div>
        </div>
      </BasicScreen>

      <ActionModal
        title="Aviso"
        text="Tem certeza que deseja sair da conta? "
        bsIcon="bi-exclamation-triangle"
        isOpen={modalOpenSair}
        setIsOpen={setModalOpenSair}
        textBtn1="CANCELAR"
        textBtn2="CONFIRMAR"
      />
    </>
  );
}
