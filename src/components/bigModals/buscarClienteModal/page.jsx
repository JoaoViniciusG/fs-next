

'use client'

import { useState, useEffect } from 'react'; 
import SmallButton from '@/components/buttons/smallButton/smallButton';
import AddressOption from '@/components/containers/endereco/addressOption';
import styles from './page.module.css';

export default function BuscarClienteModal({ 
  isOpen = false, 
  setIsOpen = () => {}, 
  callbackConsultar = () => {}, 
  callbackConfirmar = () => {} 
}) {
  const [clientes, setClientes] = useState([]);
  const [nomeBusca, setNomeBusca] = useState('');
  const [cpfBusca, setCpfBusca] = useState('');
  const [enderecoSelecionado, setEnderecoSelecionado] = useState(null);
  const [clienteSelecionado, setClienteSelecionado] = useState(null); // Estado para cliente selecionado no modal

  useEffect(() => {
    if (isOpen) {
      setClientes([]);
      setCpfBusca('');
      setEnderecoSelecionado(null);
      setNomeBusca('');
      setClienteSelecionado(null);
    }
  }, [isOpen]);

  const buscarClientes = async () => {
    try {
      const response = await fetch('http://localhost:3001/clientes');
      const data = await response.json();

      if (data && Array.isArray(data.payload)) {
        const filtrados = data.payload.filter((cliente) => {
          const nomeOk = cliente.nome.toLowerCase().includes(nomeBusca.toLowerCase());
          const cpfOk = cliente.cpf.includes(cpfBusca);
          return nomeOk && cpfOk;
        });
        setClientes(filtrados);
      } else {
        console.error('Formato inesperado:', data);
        setClientes([]);
      }
    } catch (error) {
      console.error('Erro ao buscar clientes:', error);
    }
  };

  const buscarEnderecoDoCliente = async (cliente) => {
    setClienteSelecionado(cliente); // Guarda cliente selecionado ao clicar
    console.log("ID do cliente para buscar endereço:", cliente.id);
    try {
      const response = await fetch(`http://localhost:3001/endereco?idCliente=${cliente.id}`, {
        credentials: 'include'
      });

      if (!response.ok) {
        console.error('Erro na requisição do endereço:', response.status);
        setEnderecoSelecionado(null);
        return;
      }

      const data = await response.json();

      if (data?.payload && Array.isArray(data.payload) && data.payload.length > 0) {
        setEnderecoSelecionado(data.payload[0]);
      } else {
        setEnderecoSelecionado(null);
        console.log('Nenhum endereço encontrado para esse cliente.');
      }
    } catch (error) {
      console.error('Erro ao buscar endereço:', error);
      setEnderecoSelecionado(null);
    }
  };

  return (
    <div className={styles.backgroundContainer} style={{ display: isOpen ? 'flex' : 'none' }}>
      <div className={styles.modalContainer}>
        <div className={styles.modalHeader}>
          <span>Buscar pelo cliente</span>
          <button className={styles.closeButton} onClick={() => setIsOpen(false)}>✖</button>
        </div>
        
        <div className={styles.searchContainer}>
          <div className={`${styles.inputGroup} ${styles.inputEstilizado}`}>
            <label htmlFor="nomeCliente">Nome do cliente:</label>
            <input
              type="text"
              id="nomeCliente"
              value={nomeBusca}
              onChange={(e) => setNomeBusca(e.target.value)}
            />
          </div>
          <div className={`${styles.inputGroup} ${styles.inputEstilizado}`}>
            <label htmlFor="cpfCliente">CPF/CNPJ:</label>
            <input
              type="text"
              id="cpfCliente"
              value={cpfBusca}
              onChange={(e) => setCpfBusca(e.target.value)}
            />
          </div>
          
          <div className={styles.buttonGroup}>
            <SmallButton text="CONSULTAR" callback={buscarClientes} />
          </div>
        </div>

        <div className={styles.tableContainer}>
          <table className={styles.fornecedoresTable}>
            <thead>
              <tr>
                <th>Nome do cliente</th>
                <th>CPF / CNPJ</th>
              </tr>
            </thead>
            <tbody>
              {clientes.map((cliente) => (
                <tr 
                  key={cliente.id} 
                  onClick={() => buscarEnderecoDoCliente(cliente)} 
                  style={{ 
                    cursor: 'pointer',
                    backgroundColor: clienteSelecionado?.id === cliente.id ? '#d3eaff' : 'transparent'
                  }}
                >
                  <td>{cliente.nome}</td>
                  <td>{cliente.cpf}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {enderecoSelecionado && (
          <div style={{ marginTop: '20px' }}>
            <AddressOption
              id={enderecoSelecionado.id}
              logradouro={enderecoSelecionado.logradouro}
              numero={enderecoSelecionado.numero}
              bairro={enderecoSelecionado.bairro}
              cidade={enderecoSelecionado.cidade}
              UF={enderecoSelecionado.uf}
            />
          </div>
        )}

        <div className={styles.buttonGroup} style={{ marginTop: '20px', justifyContent: 'flex-end' }}>
          <SmallButton 
            text="CONFIRMAR" 
            callback={() => {
              if (clienteSelecionado) {
                callbackConfirmar({
                  cliente: clienteSelecionado,
                  endereco: enderecoSelecionado
                });
                setIsOpen(false);
              } else {
                alert('Selecione um cliente antes de confirmar');
              }
            }} 
          />
        </div>

        <div className={styles.pagina}>
          <span>Pág. 1</span>
        </div>
      </div>
    </div>
  );
}
