import { useEffect, useState, useRef } from 'react';
import SmallButton from '@/components/buttons/smallButton/smallButton';
import styles from './page.module.css';

export default function AdicionarProdutoModal({
  isOpen = false,
  setIsOpen = () => {},
  callbackConfirmar = () => {},
  title,
}) {
  const [codigo, setCodigo] = useState('');
  const [nome, setNome] = useState('');
  const [marca, setMarca] = useState('');
  const [quantidade, setQuantidade] = useState('');
  const [valor, setValor] = useState('');
  const [produtosFiltrados, setProdutosFiltrados] = useState([]);
  const [marcas, setMarcas] = useState([]); // 🆕
  const debounceTimeout = useRef(null);

  // 🆕 Buscar marcas quando o modal abrir
  useEffect(() => {
    if (isOpen) {
      fetch('http://localhost:3001/marca', {
        credentials: 'include',
      })
        .then((res) => res.json())
        .then((data) => {
          if (Array.isArray(data.payload)) {
            setMarcas(data.payload);
          }
        })
        .catch(() => {
          setMarcas([]);
        });
    }
  }, [isOpen]);

  // 🧠 Função que adiciona nomeMarca aos produtos
  const adicionarNomeMarca = (produtos) => {
    return produtos.map((produto) => {
      const marcaObj = marcas.find((m) => m.id === produto.idMarca);
      return { ...produto, nomeMarca: marcaObj?.nome || 'Desconhecida' };
    });
  };

  // Buscar produtos
  useEffect(() => {
    if (!isOpen) {
      setProdutosFiltrados([]);
      return;
    }
    
    if (debounceTimeout.current) clearTimeout(debounceTimeout.current);

    debounceTimeout.current = setTimeout(() => {
      const buscarProdutos = async () => {
        try {
          let produtos = [];

          if (codigo) {
            const res = await fetch(`http://localhost:3001/produto/${codigo}`, {
              credentials: 'include',
            });
            const data = await res.json();
            produtos = Array.isArray(data.payload) ? data.payload : data.payload ? [data.payload] : [];
          } else {
            const params = new URLSearchParams();
            if (nome) params.append('nome', nome);
            if (quantidade) params.append('quantidade', quantidade);

            const res = await fetch(`http://localhost:3001/produto?${params.toString()}`, {
              credentials: 'include',
            });
            const data = await res.json();
            produtos = Array.isArray(data.payload) ? data.payload : data.payload ? [data.payload] : [];
          }

          // Adiciona nomeMarca
          let produtosComMarca = adicionarNomeMarca(produtos);

          // Filtro por texto da marca (caso o usuário digite)
          if (marca) {
            const marcaLower = marca.toLowerCase();
            produtosComMarca = produtosComMarca.filter((p) =>
              p.nomeMarca?.toLowerCase().includes(marcaLower)
            );
          }

          setProdutosFiltrados(produtosComMarca);
        } catch {
          setProdutosFiltrados([]);
        }
      };

      buscarProdutos();
    }, 300);

    return () => clearTimeout(debounceTimeout.current);
  }, [codigo, nome, marca, quantidade, isOpen, marcas]); // inclui marcas como dependência

  return (
    <div className={styles.backgroundContainer} style={{ display: isOpen ? 'flex' : 'none' }}>
      <div className={styles.modalContainer}>
        <div className={styles.modalHeader}>
          {title && <span>{title}</span>}
          <button className={styles.closeButton} onClick={() => setIsOpen(false)}>✖</button>
        </div>

        <div className={styles.searchContainer}>
          <div className={styles.divRow}>
            <label className={styles.titleInput}>
              <span>Cód. do Produto:</span>
              <input
                type="text"
                value={codigo}
                onChange={(e) => setCodigo(e.target.value)}
                className={`${styles.inputCampo} ${styles.inputCodProduto}`}
              />
            </label>

            <label className={`${styles.titleInput} ${styles.titleLargo}`}>
              <span>Nome do Produto / Modelo:</span>
              <input
                type="text"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                className={`${styles.inputCampo} ${styles.inputNomeProduto}`}
              />
            </label>
          </div>

          <div className={styles.divRow}>
            <label className={styles.titleInput}>
              <span>Marca:</span>
              <input
                type="text"
                value={marca}
                onChange={(e) => setMarca(e.target.value)}
                className={`${styles.inputCampo} ${styles.inputMarca}`}
              />
            </label>

            <label className={styles.titleInput}>
              <span>Quantidade Desejada:</span>
              <input
                type="text"
                value={quantidade}
                onChange={(e) => setQuantidade(e.target.value)}
                className={styles.inputCampo}
              />
            </label>

            <SmallButton
              text="CONFIRMAR"
              callback={() => {
                callbackConfirmar();
                setIsOpen(false);
              }}
            />
          </div>
        </div>

        <div className={styles.tableContainer}>
          <table className={styles.fornecedoresTable}>
            <thead>
              <tr>
                <th>Cód. Produto</th>
                <th>Nome do Produto/Modelo</th>
                <th>Marca</th>
                <th>Quantidade</th>
                <th>Valor</th>
              </tr>
            </thead>
            <tbody>
              {produtosFiltrados.length === 0 && (
                <tr><td colSpan="5" style={{ textAlign: 'center' }}>Nenhum produto encontrado</td></tr>
              )}
              {produtosFiltrados.map((produto, index) => (
                <tr key={index}>
                  <td>{produto.codigo || produto.codProduto || produto.id}</td>
                  <td>{produto.nome || produto.nomeProduto}</td>
                  <td>{produto.nomeMarca}</td>
                  <td>{produto.quantidade || produto.qtdEstoque}</td>
                  <td>{produto.valorUnitario ?? produto.valor ?? produto.preco ?? '-'}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className={styles.pagina}>
          <span>Pág. 1 </span>
        </div>
      </div>
    </div>
  );
}
