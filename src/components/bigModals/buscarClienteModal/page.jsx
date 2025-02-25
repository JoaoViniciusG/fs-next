import SmallButton from '@/components/buttons/smallButton/smallButton';
import styles from './page.module.css';

export default function BuscarClienteModal({ 
    isOpen = false, 
    setIsOpen = () => {}, 
    callbackConsultar = () => {}, 
    callbackConfirmar = () => {} 
}) {
  return (
    <div className={styles.backgroundContainer} style={{ display: isOpen ? 'flex' : 'none' }}>
      <div className={styles.modalContainer}>
        <div className={styles.modalHeader}>
          <span>Buscar pelo cliente</span>
          <button className={styles.closeButton} onClick={() => setIsOpen(false)}>✖</button>
        </div>
        
        <div className={styles.searchContainer}>
        <div className={`${styles.inputGroup} ${styles.inputEstilizado}`}>
            <label htmlFor="nomeEmpresa">Nome do cliente:</label>
            <input type="text" id="nomeEmpresa" />
          </div>
          <div className={`${styles.inputGroup} ${styles.inputEstilizado}`}>
            <label htmlFor="cnpj">CPF/CNPJ:</label>
            <input type="text" id="cnpj" />
          </div>
          
          <div className={styles.buttonGroup}>
            <SmallButton text="CONSULTAR" callback={() => callbackConsultar()} />
            

            <SmallButton text="CONFIRMAR" callback={() => {
              callbackConfirmar();
              setIsOpen(false);
            }} />
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
              <tr >
                <td>Junior Alvares Santos</td>
                <td>92.364.152/0001.25</td>
              </tr>
              <tr>
                <td>Josimar Fernandes Pedro</td>
                <td>12.758.982/0001.14</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className={styles.pagina}>
          <span>Pág. 1</span>
        </div>
      </div>
    </div>
  );
}
