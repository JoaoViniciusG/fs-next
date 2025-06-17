"use client";

import styles from './page.module.css';
import StandardButton from "@/components/buttons/standardButton/standardButton";
import BasicScreen from "@/components/screens/basicScreen/basicScreen";
import BorderContainer from "@/components/containers/borderContainer/page";
import InputLabel from '@/components/inputs/inputLabel/inputLabel';

import { useEffect, useState, useContext } from 'react';
import { useRouter } from 'next/navigation';
import ActionModal from '@/components/modals/actionModal/actionModal';
import AlertModal from '@/components/modals/alertModal/alertModal';
import { ProdutoContext } from '@/context/produto.context';
import { useParams } from 'next/navigation';

export default function PageVisualizarProduto() {
    const context = useContext(ProdutoContext);
    const id = useParams()["id"];

    const router = useRouter();
    const [modalPergunta, setModalPergunta] = useState(false);
    const [modalExcluir, setModalExcluir] = useState(false);

    const [valueNome, setValueNome] = useState();
    const [valueValorUnitario, setValueValorUnitario] = useState();
    const [valueQuantidade, setValueQuantidade] = useState();
    const [valueMarca, setValueMarca] = useState();


    useEffect(() => {
        context.getProdutoId(id);
    }, []);


    useEffect(() => {
        if (context.produtoById == undefined || context.produtoById == null) return;
        const produto = context.produtoById
        setValueNome(produto.nome);
        setValueValorUnitario(produto.valorUnitario);
        setValueQuantidade(produto.quantidade);
        setValueMarca(produto.marca);

    }, [context.produtoById])

    return (
        <>
            <BasicScreen pageTitle="Informações do Produto">
                <BorderContainer title="Dados do produto:">
                    <div className={styles.div_content_main}>
                        <div className={styles.container_content_dados}>
                            <div className={styles.contaner_box}>
                                <InputLabel label="Nome do produto" type="text" value={valueNome} setValue={setValueNome} placeholder="Nome do produto" required={true} readonly={true} width='60vh' />
                                <InputLabel label="Marca" type="text" value={valueMarca} setValue={setValueMarca} placeholder="Selecione a marca" required={true} readonly={true} width='60vh' />
                            </div>
                            <div className={styles.contaner_box}>
                                <InputLabel label="Valor unitário" type="number" value={valueValorUnitario} setValue={setValueValorUnitario} placeholder="R$ XXX,XX" required={true} readonly={true} width='60vh' />
                                <InputLabel label="Quantidade em estoque" type="number" value={valueQuantidade} setValue={setValueQuantidade} placeholder="XX" required={true} readonly={true} width='60vh' />
                            </div>
                        </div>
                    </div>
                </BorderContainer>
                <div className={styles.contaner_footer_button}>
                    <StandardButton text="EXCLUIR" hoverColor="var(--darkred)" callback={() => { setModalPergunta(true) }} />
                    <StandardButton text="ALTERAR" hoverColor="var(--cadetblue-ligtht)" callback={() => { router.push("/interno/produtos/atualizar") }} />
                </div>
            </BasicScreen>

            <ActionModal
                title="AVISO"
                text="Tem certeza que deseja excluir o cadastro desse produto?"
                bsIcon="bi-exclamation-triangle-fill"
                isOpen={modalPergunta}
                setIsOpen={setModalPergunta}
                textBtn1="CANCELAR"
                textBtn2="CONFIRMAR"
                callbackB2={() => setModalExcluir(true)} />

            <AlertModal
                title="EXCLUÍDO"
                text="Produto excluído com sucesso!"
                bsIcon="bi-check2-circle"
                isOpen={modalExcluir}
                setIsOpen={setModalExcluir}
                callback={() => router.replace("/interno/produtos/consultar")} />
        </>
    );
}