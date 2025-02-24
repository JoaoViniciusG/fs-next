"use client";

import styles from './page.module.css';
import StandardButton from "@/components/buttons/standardButton/standardButton";
import BasicScreen from "@/components/screens/basicScreen/basicScreen";
import BorderContainer from "@/components/containers/borderContainer/page";
import InputLabel from '@/components/inputs/inputLabel/inputLabel';
import ActionModal from '@/components/modals/actionModal/actionModal';
import AlertModal from '@/components/modals/alertModal/alertModal';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function PageAtualizarProduto() {
    const router = useRouter();

    const [modalPerguntaCancelar, setModalPerguntaCancelar] = useState(false);
    const [modalCancelar, setModalCancelar] = useState(false);
    const [modalConfimar, setModalConfimar] = useState(false);

    const [valueNome, setValueNome] = useState("Monitor 15”");
    const [valueMarca, setValueMarca] = useState("HP");
    const [valuePreco, setValuePreco] = useState("520.00");
    const [valueQuantidade, setValueQuantidade] = useState("180");

    return (
        <>
            <BasicScreen pageTitle="Atualizar o Produto">
                <BorderContainer title="Dados do Produto:">
                    <div className={styles.div_content_main}>
                        <div className={styles.container_content_dados}>
                            <div className={styles.contaner_box}>
                                <InputLabel label="Nome do produto" type="text" value={valueNome} setValue={setValueNome} placeholder="Nome do produto" required={true} readonly={false} width='60vh' />
                                <InputLabel label="Marca" type="text" value={valueMarca} setValue={setValueMarca} placeholder="Selecione a marca" required={true} readonly={false} width='60vh' />
                            </div>
                            <div className={styles.contaner_box}>
                                <InputLabel label="Valor unitário" type="number" value={valuePreco} setValue={setValuePreco} placeholder="R$ XXX,XX" required={true} readonly={false} width='60vh' />
                                <InputLabel label="Quantidade em estoque" type="number" value={valueQuantidade} setValue={setValueQuantidade} placeholder="XX" required={true} readonly={false} width='60vh' />
                            </div>
                        </div>
                    </div>
                </BorderContainer>
                <div className={styles.contaner_footer_button}>
                    <StandardButton text="CANCELAR" hoverColor="var(--darkred)" callback={() => {setModalPerguntaCancelar(true)}}/>
                    <StandardButton text="CONFIRMAR" hoverColor="var(--cyan)" callback={() => {setModalConfimar(true)}}/>
                </div>
            </BasicScreen>
            
            <ActionModal
                title="AVISO"
                text="Tem certeza de que deseja cancelar? Lembre-se de que todas as alterações feitas serão excluídas ao cancelar!"
                bsIcon="bi-exclamation-triangle-fill"
                isOpen={modalPerguntaCancelar}
                setIsOpen={setModalPerguntaCancelar}
                textBtn1="CANCELAR"
                textBtn2="CONFIRMAR"
                callbackB2={() => setModalCancelar(true)} />

            <AlertModal
                title="CANCELADO"
                text="Alteração cancelada com sucesso!"
                bsIcon="bi-check2-circle"
                isOpen={modalCancelar}
                setIsOpen={setModalCancelar}
                callback={() => router.replace("/interno/produtos/consultar")} />

            <AlertModal
                title="ALTERADO"
                text="Atualizado realizada com sucesso!"
                bsIcon="bi-check2-circle"
                isOpen={modalConfimar}
                setIsOpen={setModalConfimar}
                callback={() => router.replace("/interno/produtos/consultar")} />
        </>
    );
}