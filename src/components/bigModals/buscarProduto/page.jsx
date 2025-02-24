import SmallButton from '@/components/buttons/smallButton/smallButton';
import styles from './page.module.css';

export default function BuscarProdutoModal({ 
    isOpen = false, 
    setIsOpen = () => {}, 
    callbackConsultar = () => {}, 
    callbackConfirmar = () => {} 
}) {
  return (
    <div className={styles.backgroundContainer} style={{ display: isOpen ? 'flex' : 'none' }}>
      <div className={styles.modalContainer}>
        <div className={styles.modalHeader}>
          <span>Buscar pelo produto:</span>
          <button className={styles.closeButton} onClick={() => setIsOpen(false)}>✖</button>
        </div>
        
        <div className={styles.searchContainer}>

        <div className={`${styles.inputGroup} ${styles.inputEstilizado}`}>
            <label htmlFor="nomeEmpresa">Nome do produto: </label>
            <input type="text" id="nomeEmpresa" />
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
                <th>ID</th>
                <th>Nome</th>
                <th>Marca</th>
                <th>Valor UN</th>
                <th>Quantidade</th>
              </tr>
            </thead>
            <tbody>
              <tr >
                <td>00001</td>
                <td>Placa de vídeo</td>
                <td>Sotf</td>
                <td>R$569,00</td>
                <td>9-</td>
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
