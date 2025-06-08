// import SmallButton from '@/components/buttons/smallButton/smallButton';
// import styles from './page.module.css';

// export default function BuscarClienteModal({ 
//     isOpen = false, 
//     setIsOpen = () => {}, 
//     callbackConsultar = () => {}, 
//     callbackConfirmar = () => {} 
// }) {
//   return (
//     <div className={styles.backgroundContainer} style={{ display: isOpen ? 'flex' : 'none' }}>
//       <div className={styles.modalContainer}>
//         <div className={styles.modalHeader}>
//           <span>Buscar pelo cliente</span>
//           <button className={styles.closeButton} onClick={() => setIsOpen(false)}>✖</button>
//         </div>
        
//         <div className={styles.searchContainer}>
//         <div className={`${styles.inputGroup} ${styles.inputEstilizado}`}>
//             <label htmlFor="nomeEmpresa">Nome do cliente:</label>
//             <input type="text" id="nomeEmpresa" />
//           </div>
//           <div className={`${styles.inputGroup} ${styles.inputEstilizado}`}>
//             <label htmlFor="cnpj">CPF/CNPJ:</label>
//             <input type="text" id="cnpj" />
//           </div>
          
//           <div className={styles.buttonGroup}>
//             <SmallButton text="CONSULTAR" callback={() => callbackConsultar()} />
            
//           </div>
//         </div>

//         <div className={styles.tableContainer}>
//           <table className={styles.fornecedoresTable}>
//             <thead>
//               <tr>
//                 <th>Nome do cliente</th>
//                 <th>CPF / CNPJ</th>
//               </tr>
//             </thead>
//             <tbody>
//               <tr >
//                 <td>Junior Alvares Santos</td>
//                 <td>92.364.152/0001.25</td>
//               </tr>
//               <tr>
//                 <td>Josimar Fernandes Pedro</td>
//                 <td>12.758.982/0001.14</td>
//               </tr>
//             </tbody>
//           </table>
//         </div>

//         <div className={styles.pagina}>
//           <span>Pág. 1</span>
//         </div>
//       </div>
//     </div>
//   );
// }


'use client'

import { useEffect, useState } from 'react';
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

  const buscarEnderecoDoCliente = async (idCliente) => {
    try {
      const response = await fetch(`http://localhost:3001/components/containers/endereco`);
      const data = await response.json();

      if (data?.payload && Array.isArray(data.payload) && data.payload.length > 0) {
        setEnderecoSelecionado(data.payload[0]); // primeiro endereço
      } else {
        setEnderecoSelecionado(null);
        console.error('Nenhum endereço encontrado.');
      }
    } catch (error) {
      console.error('Erro ao buscar endereço:', error);
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
                  onClick={() => buscarEnderecoDoCliente(cliente.id)} 
                  style={{ cursor: 'pointer' }}
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

        <div className={styles.pagina}>
          <span>Pág. 1</span>
        </div>
      </div>
    </div>
  );
}