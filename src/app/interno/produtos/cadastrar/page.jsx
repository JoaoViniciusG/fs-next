"use client";

import styles from './page.module.css';
import StandardButton from "@/components/buttons/standardButton/standardButton";
import BasicScreen from "@/components/screens/basicScreen/basicScreen";
import BorderContainer from "@/components/containers/borderContainer/page";
import InputLabel from '@/components/inputs/inputLabel/inputLabel';
import AlertModal from '@/components/modals/alertModal/alertModal';
import MarcaSelection from '@/components/popSelection/marcaSelection/marcaSelection';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function PageCriarProduto() {
    const router = useRouter();

    const [modalCadastrar, setModalCadastrar] = useState(false);
    const [modalAbrirMarca, setModalAbrirMarca] = useState(false);

    return (
        <>
            <BasicScreen pageTitle="Cadastrar produto" isLoading={true}>
                <BorderContainer title="Dados do Produto:">
                    <div className={styles.div_content_main}>
                        <div className={styles.container_content_dados}>
                            <div className={styles.contaner_box}>
                                <InputLabel label="Nome do produto" type="text" placeholder="Nome do produto" required={true} readonly={false} width='60vh' />
                                <InputLabel label="Marca" type="text" placeholder="Selecione a marca" required={true} readonly={true} width='60vh' onClick={() => {setModalAbrirMarca(true)}}/>
                            </div>
                            <div className={styles.contaner_box}>
                                <InputLabel label="Valor unitário" type="number" placeholder="R$ XXX,XX" required={true} readonly={false} width='60vh' />
                                <InputLabel label="Quantidade em estoque" type="number" placeholder="XX" required={true} readonly={false} width='60vh' />
                            </div>
                        </div>
                    </div>
                </BorderContainer>
                <div className={styles.contaner_footer_button}>
                    <StandardButton text="CADASTRAR" hoverColor="var(--cyan)" callback={() => { setModalCadastrar(true) }} />
                </div>
            </BasicScreen>
            <AlertModal
                title="CADASTRADO"
                text="Fornecedor cadastrado com sucesso!"
                bsIcon="bi-check2-circle"
                isOpen={modalCadastrar}
                setIsOpen={setModalCadastrar}
                callback={() => router.push("/interno/produtos/consultar")} />

            <MarcaSelection
                title="Consultar produtos:"
                textInput="Buscar a marca:"
                textPlaceholder="Pesquise as marcas e suas informações."
                textBtnBuscar="BUSCAR"
                titleTable="Marcas:"
                colun1="ID Marca"
                colun2="Fornecedor"
                colun3="Marca"
                colun4="CNPJ"
                isOpen={modalAbrirMarca}
                setIsOpen={setModalAbrirMarca} />
        </>
    );
}