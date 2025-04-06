"use client";

import styles from './page.module.css';

import StandardButton from "@/components/buttons/standardButton/standardButton";
import BasicScreen from "@/components/screens/basicScreen/basicScreen";
import BorderContainer from "@/components/containers/borderContainer/page";
import InputLabel from '@/components/inputs/inputLabel/inputLabel';
import AlertModal from '@/components/modals/alertModal/alertModal';
import ActionModal from '@/components/modals/actionModal/actionModal';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function PageCadastrarMarca() {
    const [modalOpen, setModalOpen] = useState(false);
    const [modalPergunta, setModalPergunta] = useState(false);
    const [modalExcluir, setModalExcluir] = useState(false);
    const router = useRouter();
    return (
        <>
        <BasicScreen pageTitle="Cadastrar marca">
            <BorderContainer title="Dados da marca:" className={styles.containerContentMaster}>
                <div className={styles.containerContent}>
                    <div className={styles.div_content_busca}>
                        <InputLabel label="Nome da Marca:" type="search" placeholder="Nome da marca" required={false} readonly={false} />
                    </div>
                    <h2 className={styles.titleTable}>Fornecedor: </h2>
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
                        <StandardButton text="ADICIONAR" hoverColor="var(--medium-darkcyan)" callback={() => router.push('/interno/fornecedores/cadastrar')}/>
                        <StandardButton text="ATUALIZAR" hoverColor="var(--cadetblue-ligtht)" callback={() => router.push('/interno/fornecedores/atualizar')} />
                        <StandardButton text="EXCLUIR" hoverColor="var(--darkred)"callback={() => {setModalPergunta(true)}}/>
                    </div>
                </div>
            </BorderContainer>
            <StandardButton text="CADASTRAR" hoverColor="var(--medium-darkcyan)" style={{ alignSelf: "flex-end", marginTop: 35 }} callback={() => {setModalOpen(true)}} />
        </BasicScreen >
        <AlertModal
        title='CADASTRADO'
        text='Marca cadastrada com sucesso!'
        bsIcon="bi-check2-circle"
        isOpen={modalOpen}
        setIsOpen={setModalOpen}
        />
        <ActionModal
        title='AVISO'
        text='Tem certeza que deseja excluir o cadastro desse fornecedor?'
        bsIcon="bi bi-exclamation-triangle-fill"
        isOpen={modalPergunta}
        setIsOpen={setModalPergunta}
        textBtn1='CANCELAR'
        textBtn2='CONFIRMAR'
        callbackB2={() => setModalExcluir(true)}
        />
        <AlertModal
        title='EXCLUÍDO'
        text='Fornecedor excluído com sucesso!'
        bsIcon="bi-check2-circle"
        setIsOpen={setModalExcluir}
        isOpen={modalExcluir}
        />
        </>
    )
}