import SmallButton from '@/components/buttons/smallButton/smallButton';
import styles from './page.module.css';

export default function ExcluirProduto({ 
  isOpen = false, 
  setIsOpen = () => {}, 
  callbackCancelar = () => {}, 
  callbackConfirmar = () => {},
  bsIcon,
  title,
  text, 
  produto
}) {
  return (
    <div className={styles.backgroundContainer} style={{ display: isOpen ? 'flex' : 'none' }}>
      <div className={styles.modalContainer}>
        <div className={styles.titleContainer}>
          <i className={`bi ${bsIcon} ${styles.iconTitle}`}></i>
          <p className={styles.titleText}>{title}</p>
        </div>
        
        <div className={styles.textContainer}>
          <p>{text}</p>
        </div>

        <div className={styles.tableContainer}>
          <table className={styles.fornecedoresTable}>
            <thead>
              <tr>
                <th>Cód.</th>
                <th>Nome</th>
                <th>Marca</th>
                <th>Quantidade</th>
                <th>Valor Unit.</th>
              </tr>
            </thead>
            <tbody>
              {produto ? (
                <tr>
                  <td>{produto.id}</td>
                  <td>{produto.nome}</td>
                  <td>{produto.marca}</td>
                  <td>{produto.quantidade}</td>
                  <td>{produto.valorUnitario}</td>
                </tr>
              ) : (
                <tr>
                  <td colSpan="5" style={{ textAlign: 'center' }}>Nenhum produto selecionado</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        <div className={styles.buttonGroup}>
          <SmallButton 
            text="CANCELAR" 
            callback={() => {
              setIsOpen(false);
              if(callbackCancelar) callbackCancelar();
            }} 
          />
          <SmallButton 
            text="CONFIRMAR" 
            callback={() => {
              callbackConfirmar();
              setIsOpen(false);
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
