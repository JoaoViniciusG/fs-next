import { useEffect, useState, useRef } from 'react';
import SmallButton from '@/components/buttons/smallButton/smallButton';
import styles from './page.module.css';

export default function AdicionarProdutoModal({
  isOpen = false,
  setIsOpen = () => {},
  callbackConfirmar = () => {},
  title,
  onSelecionarProduto = () => {},
  produtoEditando = null,
  
}) {
  const [codigo, setCodigo] = useState('');
  const [nome, setNome] = useState('');
  const [marca, setMarca] = useState('');
  const [quantidade, setQuantidade] = useState('');
  const [produtosFiltrados, setProdutosFiltrados] = useState([]);
  const [marcas, setMarcas] = useState([]);
  const debounceTimeout = useRef(null);
  const [produtoSelecionado, setProdutoSelecionado] = useState(null);

  useEffect(() => {
    if (isOpen) {
      fetch('http://localhost:3001/marcas', {
        credentials: 'include',
      })
        .then(res => res.json())
        .then(data => {
          if (Array.isArray(data.payload)) setMarcas(data.payload);
        })
        .catch(() => setMarcas([]));
    }
  }, [isOpen]);

  const adicionarNomeMarca = (produtos) => {
  return produtos.map(produto => {
    const marcaObj = marcas.find(m => m.id === produto.idMarca);
    return {
      ...produto,
      marca: marcaObj?.marca || produto.marca || 'Desconhecida',  // Usando 'marca'
      valorUnitario: parseFloat(produto.valorUnitario || produto.valor || produto.preco || 0)
    };
  });
};

useEffect(() => {
  if (isOpen && produtoEditando) {
    setProdutoSelecionado(produtoEditando);
    setCodigo(produtoEditando.codigo?.toString() || produtoEditando.id?.toString() || '');
    setNome(produtoEditando.nome || '');
    setMarca(produtoEditando.marca || '');
    setQuantidade(produtoEditando.quantidade?.toString() || '');
  }
}, [isOpen, produtoEditando]);
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
            const res = await fetch(`http://localhost:3001/produto/${codigo}`, { credentials: 'include' });
            const data = await res.json();
            produtos = Array.isArray(data.payload) ? data.payload : data.payload ? [data.payload] : [];
          } else {
            const params = new URLSearchParams();
            if (nome) params.append('nome', nome);
            if (marca) params.append('marca', marca);

            const res = await fetch(`http://localhost:3001/produto?${params.toString()}`, { credentials: 'include' });
            const data = await res.json();
            produtos = Array.isArray(data.payload) ? data.payload : data.payload ? [data.payload] : [];
          }

          const produtosComMarca = adicionarNomeMarca(produtos);
          setProdutosFiltrados(produtosComMarca);
        } catch {
          setProdutosFiltrados([]);
        }
      };

      buscarProdutos();
    }, 300);

    return () => clearTimeout(debounceTimeout.current);
  }, [codigo, nome, marca, isOpen, marcas]);

  const handleProdutoClick = (produto) => {
  setProdutoSelecionado(produto);
  setCodigo(produto.id.toString());  // usa id no input
  setNome(produto.nome || produto.nomeProduto || '');
  setMarca(produto.marca || 'Desconhecida');
};

  const confirmarSelecao = () => {
  const produto = produtoSelecionado;

  if (!produto) {
    alert('Por favor, selecione um produto válido.');
    return;
  }

  const qtd = Number(quantidade);
  if (!qtd || isNaN(qtd) || qtd <= 0) {
    alert('Quantidade inválida.');
    return;
  }

  onSelecionarProduto({
    id: produto.id, // Aqui usa o id direto
    codigo: produto.id.toString(), // Se precisar mostrar algo, pode usar id como string
    nome: produto.nome || produto.nomeProduto || '',
    marca: produto.marca || 'Desconhecida', // Usar marca direto
    quantidade: qtd,
    valorUnitario: produto.valorUnitario || 0
  });

  callbackConfirmar();

  // Reset
  setCodigo('');
  setNome('');
  setMarca('');
  setQuantidade('');
  setProdutoSelecionado(null);
  setProdutosFiltrados([]);
  setIsOpen(false);
};

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
              <input type="text" value={codigo} onChange={(e) => setCodigo(e.target.value)} className={`${styles.inputCampo} ${styles.inputCodProduto}`} />
            </label>

            <label className={`${styles.titleInput} ${styles.titleLargo}`}>
              <span>Nome do Produto / Modelo:</span>
              <input type="text" value={nome} onChange={(e) => setNome(e.target.value)} className={`${styles.inputCampo} ${styles.inputNomeProduto}`} />
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
      type="number"
      min={1}
      max={produtoSelecionado?.quantidade || 1} 
      value={quantidade}
      onChange={(e) => {
        const valor = Number(e.target.value);

        if (valor > (produtoSelecionado?.quantidade || 1)) {
          setQuantidade((produtoSelecionado?.quantidade || 1).toString());
        } else {
          setQuantidade(e.target.value);
        }
      }}
      className={styles.inputCampo}
    />
  </label>

  <SmallButton text="CONFIRMAR" callback={confirmarSelecao} />
</div>

        </div>

        <div className={styles.tableContainer}>
          <table className={styles.fornecedoresTable}>
            <thead>
              <tr>
                <th>Cód. Produto</th>
                <th>Nome</th>
                <th>Marca</th>
                <th>Estoque</th>
                <th>Valor Unitário</th>
              </tr>
            </thead>
            <tbody>
              {produtosFiltrados.length === 0 && (
                <tr><td  colSpan="5" style={{ textAlign: 'center' }}>Nenhum produto encontrado</td></tr>
              )}
              {produtosFiltrados.map((produto, index) => (
                <tr
                  key={index}
                  style={{ cursor: 'pointer', backgroundColor: produtoSelecionado === produto ? '#d3d3d3' : 'transparent' }}
                  onClick={() => handleProdutoClick(produto)}
                >
                  <td>{produto.codigo || produto.codProduto || produto.id}</td>
                  <td>{produto.nome || produto.nomeProduto}</td>
                  <td>{produto.marca || produto.marca}</td>
                  <td>{produto.quantidade ?? '-'}</td>
                  <td>{produto.valorUnitario?.toFixed ? `R$ ${produto.valorUnitario.toFixed(2)}` : '-'}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className={styles.pagina}><span>Pág. 1</span></div>
      </div>
    </div>
  );
}
