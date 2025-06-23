"use client";

import styles from './page.module.css';
import StandardButton from "@/components/buttons/standardButton/standardButton";
import BasicScreen from "@/components/screens/basicScreen/basicScreen";
import BorderContainer from "@/components/containers/borderContainer/page";
import InputLabel from '@/components/inputs/inputLabel/inputLabel';
import ActionModal from '@/components/modals/actionModal/actionModal';
import AlertModal from '@/components/modals/alertModal/alertModal';
import MarcaSelection from '@/components/popSelection/marcaSelection/marcaSelection';

import { useEffect, useState, useContext } from 'react';
import { ProdutoContext } from '@/context/produto.context';
import { useRouter, useParams } from 'next/navigation';


export default function PageAtualizarProduto() {
    const context = useContext(ProdutoContext);
    const router = useRouter();
    const id = useParams()["id"];

    const [modalPerguntaCancelar, setModalPerguntaCancelar] = useState(false);
    const [modalCancelar, setModalCancelar] = useState(false);
    const [modalConfimar, setModalConfimar] = useState(false);
    const [modalAbrirMarca, setModalAbrirMarca] = useState(false);

    const [valueNome, setValueNome] = useState("");
    const [valueMarca, setValueMarca] = useState("");
    const [valueValorUnitario, setValueValorUnitario] = useState(0);
    const [valueQuantidade, setValueQuantidade] = useState(0);

    const [valueOriginalNome, setValueOriginalNome] = useState("");
    const [valueOriginalMarca, setValueOriginalMarca] = useState("");
    const [valueOriginalValorUnitario, setValueOriginalValorUnitario] = useState(0);
    const [valueOriginalQuantidade, setValueOriginalQuantidade] = useState(0);

    useEffect(() => {
        if (!id) return;
        context.produtoById(id);
    }, [id]);

    useEffect(() => {
        if (!context.produtoSelect) return;

        const produto = context.produtoSelect;

        setValueNome(produto.nome);
        setValueMarca(produto.marca);
        setValueValorUnitario(produto.valorUnitario);
        setValueQuantidade(produto.quantidade);

        setValueOriginalNome(produto.nome);
        setValueOriginalMarca(produto.marca);
        setValueOriginalValorUnitario(produto.valorUnitario);
        setValueOriginalQuantidade(produto.quantidade);

    }, [context.produtoSelect]);

    const camposPreenchidos = (produto) => {
        return (
            produto.nome !== "" &&
            produto.marca !== "" &&
            produto.valorUnitario !== null &&
            produto.quantidade !== null
        );
    }

    const atualizarProduto = async () => {
        const produto = {
            nome: valueNome,
            marca: valueMarca,
            valorUnitario: Number(valueValorUnitario),
            quantidade: Number(valueQuantidade)
        };

        let camposAlterados = 0;

        if (valueNome !== valueOriginalNome) {
            camposAlterados++;
        }
        if (valueMarca !== valueOriginalMarca) {
            camposAlterados++;
        }
        if (valueValorUnitario !== valueOriginalValorUnitario) {
            camposAlterados++;
        }
        if (valueQuantidade !== valueOriginalQuantidade) {
            camposAlterados++;
        }

        if (camposAlterados === 0) {
            alert("Nenhum campo foi alterado!");
            return;
        }

        let response = false;

        if (camposAlterados === 4 && camposPreenchidos(produto)) {
            response = await context.atualizarProdutoCompleto(id, produto);
        } else {
            response = await context.atualizarProdutoParcial(id, produto);
        }

        if (response) {
            setModalConfimar(true);
        }

    };

    return (
        <>
            <BasicScreen pageTitle="Atualizar o Produto">
                <BorderContainer title="Dados do Produto:">
                    <div className={styles.div_content_main}>
                        <div className={styles.container_content_dados}>
                            <div className={styles.contaner_box}>
                                <InputLabel label="Nome do produto" type="text" value={valueNome} setValue={setValueNome} placeholder="Nome do produto" required={true} readonly={false} width='60vh' />
                                <InputLabel label="Marca" type="text" value={valueMarca} setValue={setValueMarca} placeholder="Selecione a marca" required={true} readonly={true} width='60vh' onClick={() => { setModalAbrirMarca(true) }} />
                            </div>
                            <div className={styles.contaner_box}>
                                <InputLabel label="Valor unitário" type="number" value={valueValorUnitario} setValue={setValueValorUnitario} placeholder="R$ XXX,XX" required={true} readonly={false} width='60vh' />
                                <InputLabel label="Quantidade em estoque" type="number" value={valueQuantidade} setValue={setValueQuantidade} placeholder="XX" required={true} readonly={false} width='60vh' />
                            </div>
                        </div>
                    </div>
                </BorderContainer>
                <div className={styles.contaner_footer_button}>
                    <StandardButton text="CANCELAR" hoverColor="var(--darkred)" callback={() => { setModalPerguntaCancelar(true) }} />
                    <StandardButton text="CONFIRMAR" hoverColor="var(--cyan)" callback={atualizarProduto} />
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
                setIsOpen={setModalAbrirMarca}
                setMarca={(nome) => setValueMarca(nome)} />
        </>
    );
}