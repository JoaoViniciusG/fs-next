// 'use client';

// import { useState } from 'react';
// import BasicScreen from '@/components/screens/basicScreen/basicScreen';
// import BorderContainer from '@/components/containers/borderContainer/page';
// import PerfilEdicao from '@/components/userPerfil/page';
// import AddressOption from '@/components/containers/endereco/addressOption';
// import StandardButton from '@/components/buttons/standardButton/standardButton';
// import Link from 'next/link';
// import styles from './page.module.css'
// import { AlertCircle } from 'react-feather';
// import ActionModal from '@/components/modals/actionModal/actionModal';

// export default function PageDadosEmpresa() {
//   const [modalOpenSair, setModalOpenSair] = useState(false)

//   const handleConfirmClickSair = () => {
//     setModalOpenSair(true);
//   };
//   return (
//     <>
//       <BasicScreen>
//         <BorderContainer title="Dados da empresa:">
//           <PerfilEdicao readonly={true}> </PerfilEdicao>
//         </BorderContainer>

//         <BorderContainer title="Endereço: ">
//           <div className={styles.divEnderecos}>
//             <AddressOption
//               logradouro="Av.beira Rio"
//               bairro="Centro"
//               cidade="Vilhena"
//               UF="Ro">
//             </AddressOption>
//           </div>
//         </BorderContainer>

//         <div className={styles.baixo}>
//           <Link href='/interno/conta/dados-empresa-confirmar'>
//             <StandardButton text="ALTERAR" hoverColor="var(--cadetblue-ligtht)"></StandardButton>
//           </Link>

//           <div className={styles.sair}>
//             <span onClick={handleConfirmClickSair}>Sair</span>
//           </div>
//         </div>

//       </BasicScreen>
//       <ActionModal
//         title="Aviso"
//         text="Tem certeza que deseja sair da conta? "
//         bsIcon="bi-exclamation-triangle"
//         isOpen={modalOpenSair}
//         setIsOpen={setModalOpenSair}
//         textBtn1="CANCELAR"
//         textBtn2="CONFIRMAR"
//         callbackB1={() => console.log("CANCELOU")}
//         callbackB2={() => console.log("CONFIRMOU")}

//       />


//     </>

//   );
// }
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
            dataCadastro={empresaData?.dataCadastro ? new Date(empresaData.dataCadastro).toLocaleDateString() : ''}
            readonly={true}
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
        callbackB1={() => console.log('CANCELOU')}
        callbackB2={() => console.log('CONFIRMOU')}
      />
    </>
  );
}
