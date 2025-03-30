"use client";

import styles from './page.module.css';

import StandardButton from "@/components/buttons/standardButton/standardButton";
import BasicScreen from "@/components/screens/basicScreen/basicScreen";
import BorderContainer from "@/components/containers/borderContainer/page";
import InputLabel from '@/components/inputs/inputLabel/inputLabel';
import AlertModal from '@/components/modals/alertModal/alertModal';
import AlterarFornecedorModal from "@/components/bigModals/addFornecedorModal/page";
import ExcluirFornecedor from '@/components/bigModals/excluirFornecedorModal/page';
import { useState } from 'react';

export default function PageAlterarMarca() {
    const [modalOpen, setModalOpen] = useState(false);
    const [showAlertModal, setShowAlertModal] = useState(false);
    const [showAlertModalExcluido, setShowAlertModalExcluido] = useState(false);
    const [modalAlterarFornecedorOpen, setModalAlterarFornecedorOpen] = useState(false);
    const [modalExcluirFornecedorOpen, setModalExcluirFornecedorOpen] = useState(false);
    const handleConfirmarAlterarFornecedor = () => {
        setShowAlertModal(true)
      };
      const handleExcluirFornecedor = () => {
        setModalExcluirFornecedorOpen(false); 
        setShowAlertModalExcluido(true); 
      };
    return (
        <>
        <BasicScreen pageTitle="Alterar marca">
            <BorderContainer title="Dados da marca:" className={styles.containerContentMaster}>
                <div className={styles.containerContent}>
                    <div className={styles.div_content_busca}>
                        <InputLabel label="Nome da Marca:" type="search" placeholder="Nome da marca" required={false} readonly={false} />
                    </div>
                    <h2 className={styles.titleTable}>Fornecedor:</h2>
                <BorderContainer className={styles.containerTable}>
                <div className={styles.content_table}>
                    <table className={styles.table_fornecedores}>
                        <thead className={styles.table_header}>
                            <tr>
                                <th scope="col">Nome do fornecedor</th>
                                <th scope="col">CPF / CNPJ</th>
                                <th scope="col">Email</th>
                            </tr>
                        </thead>
                        <tbody className={styles.table_body}>
                            <tr>
                                <td>Beatriz Alves</td>
                                <td>091.846.297-98</td>
                                <td>bia@gmail.com</td>
                            </tr>
                            <tr>
                                <td>Josana Silva</td>
                                <td>091.846.297-98</td>
                                <td>email@gmail.com</td>
                            </tr>
                            <tr>
                                <td>Marcos Souza</td>
                                <td>091.846.297-98</td>
                                <td>email@gmail.com</td>
                            </tr>
                            <tr>
                                <td>Pedro Alves</td>
                                <td>091.846.297-98</td>
                                <td>email@gmail.com</td>
                            </tr>
                            <tr>
                                <td>Ana Sousa</td>
                                <td>091.846.297-98</td>
                                <td>email@gmail.com</td>
                            </tr>
                            <tr>
                                <td>Laís Pedrosa</td>
                                <td>091.846.297-98</td>
                                <td>email@gmail.com</td>
                            </tr>
                            <tr>
                                <td>José Alves</td>
                                <td>091.846.297-98</td>
                                <td>email@gmail.com</td>    
                            </tr>
                        </tbody>
                    </table>
                </div>
                </BorderContainer> 
                <div className={styles.containerButtons}>
                    <StandardButton text='ADICIONAR' hoverColor='var(--medium-darkcyan)'></StandardButton>
                    <StandardButton text='ALTERAR' hoverColor='var(--cadetblue-ligtht)' callback={() => setModalAlterarFornecedorOpen(true)} ></StandardButton>
                    <StandardButton text='EXCLUIR' hoverColor='var(--darkred)' callback={() => setModalExcluirFornecedorOpen(true)} ></StandardButton>
                </div>
                </div>
            </BorderContainer>
            <div className={styles.containerButtonsAlterar}>
                <StandardButton text='ALTERAR MARCA' hoverColor='var(--cadetblue-ligtht)' callback={() => {setModalOpen(true)}} ></StandardButton>
            </div>
        </BasicScreen>
         <AlertModal
         title='ALTERADO'
         text='Marca alterada com sucesso! '
         bsIcon="bi-check2-circle"
         isOpen={modalOpen}
         setIsOpen={setModalOpen}
         />
         <AlterarFornecedorModal 
        isOpen={modalAlterarFornecedorOpen} 
        setIsOpen={setModalAlterarFornecedorOpen} 
        callbackConfirmar={handleConfirmarAlterarFornecedor} 
        title="Alterar fornecedor"
        />
        <ExcluirFornecedor
        isOpen={modalExcluirFornecedorOpen} 
        setIsOpen={setModalExcluirFornecedorOpen} 
        callbackConfirmar={handleExcluirFornecedor} 
        title="AVISO"
        bsIcon="bi bi-exclamation-triangle"
        text="Tem certeza de que deseja excluir esse fornecedor?"
        />
        </>
    )
}