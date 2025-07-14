import SmallButton from '@/components/buttons/smallButton/smallButton';
import styles from './page.module.css';
import { useContext, useEffect, useState } from 'react';
import { useDebounce } from '@/app/hooks/useDebounce';
import { ProdutoContext } from '@/context/produto.context';

export default function BuscarProdutoModal({
    isOpen = false,
    setIsOpen = () => { },
    callbackConsultar = () => { },
    callbackConfirmar = () => { }
}) {
    const context = useContext(ProdutoContext);
    const [produtosSelecionadosTemp, setProdutosSelecionadosTemp] = useState([]);
    const [filtro, setFiltro] = useState("");

    const filtroDebounce = useDebounce(filtro.replace("R$", ""));

    useEffect(() => {
        if (isOpen) {
            setProdutosSelecionadosTemp([]);
            context.consultarProdutos(filtroDebounce.trim());
        }
    }, [isOpen, filtroDebounce]);

    const handleConsultar = () => {
        context.consultarProdutos({ nome: busca });
    };

    const handleSelecionarProduto = (produto) => {
        const jaSelecionado = produtosSelecionadosTemp.find(p => p.id === produto.id);
        if (!jaSelecionado) {
            setProdutosSelecionadosTemp([...produtosSelecionadosTemp, produto]);
        } else {
            setProdutosSelecionadosTemp(produtosSelecionadosTemp.filter(p => p.id !== produto.id));
        }
    };

    return (
        <div className={styles.backgroundContainer} style={{ display: isOpen ? 'flex' : 'none' }}>
            <div className={styles.modalContainer}>
                <div className={styles.modalHeader}>
                    <span>Buscar pelo produto:</span>
                    <button
                        className={styles.closeButton}
                        onClick={() => {
                            setProdutosSelecionadosTemp([]);
                            setIsOpen(false);
                        }}
                    >✖</button>
                </div>

                <div className={styles.searchContainer}>
                    <div className={`${styles.inputGroup} ${styles.inputEstilizado}`}>
                        <label htmlFor="nomeEmpresa">Pesquisar o produto: </label>
                        <input type="text" id="nomeEmpresa" value={filtro} onChange={(e) => setFiltro(e.target.value)}/>
                    </div>
                    <div className={styles.buttonGroup}>
                        <SmallButton
                            text="CONFIRMAR"
                            callback={() => {
                                callbackConfirmar(produtosSelecionadosTemp);
                                setProdutosSelecionadosTemp([]);
                                setIsOpen(false);
                            }}
                        />
                    </div>
                </div>

                <div className={styles.tableContainer}>
                    <table className={styles.fornecedoresTable}>
                        <thead>
                            <tr>
                                <th scope="col">Cód.</th>
                                <th scope="col">Nome</th>
                                <th scope="col">Marca</th>
                                <th scope="col">Quantidade</th>
                                <th scope="col">Valor/un</th>
                            </tr>
                        </thead>
                        <tbody>
                            {context.produtos.map((produto) => {
                                const selecionado = produtosSelecionadosTemp.some(p => p.id === produto.id);
                                return (
                                    <tr
                                        key={produto.id}
                                        className={selecionado ? styles.selecionado : ""}
                                        onClick={() => handleSelecionarProduto(produto)}
                                    >
                                        <td>{produto.id}</td>
                                        <td>{produto.nome}</td>
                                        <td>{produto.marca}</td>
                                        <td>{produto.quantidade}</td>
                                        <td>R$ {Number(produto.valorUnitario).toFixed(2).replace(".", ",")}</td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
