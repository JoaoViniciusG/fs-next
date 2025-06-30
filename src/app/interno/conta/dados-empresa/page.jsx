'use client';

import { useState } from 'react';
import BasicScreen from '@/components/screens/basicScreen/basicScreen';
import BorderContainer from '@/components/containers/borderContainer/page';
import PerfilEdicao from '@/components/userPerfil/page';
import AddressOption from '@/components/containers/endereco/addressOption';
import StandardButton from '@/components/buttons/standardButton/standardButton';
import Link from 'next/link';
import styles from './page.module.css'
import { AlertCircle } from 'react-feather';
import ActionModal from '@/components/modals/actionModal/actionModal';

export default function PageDadosEmpresa() {
  const [modalOpenSair, setModalOpenSair] = useState(false)

  const handleConfirmClickSair = () => {
    setModalOpenSair(true);
  };
  return (
    <>
      <BasicScreen>
        <BorderContainer title="Dados da empresa:">
          <PerfilEdicao readonly={true}> </PerfilEdicao>
        </BorderContainer>

        <BorderContainer title="Endereço: ">
          <div className={styles.divEnderecos}>
            <AddressOption
              logradouro="Av.beira Rio"
              bairro="Centro"
              cidade="Vilhena"
              UF="Ro">
            </AddressOption>
          </div>
        </BorderContainer>

        <div className={styles.baixo}>
          <Link href='/interno/conta/dados-empresa-confirmar'>
            <StandardButton text="ALTERAR" hoverColor="var(--cadetblue-ligtht)"></StandardButton>
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
        callbackB1={() => console.log("CANCELOU")}
        callbackB2={() => console.log("CONFIRMOU")}

      />


    </>

  );
}
