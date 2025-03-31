import SmallButton from '@/components/buttons/smallButton/smallButton';
import styles from './page.module.css';
import PedidoCard from '@/components/componentPedidos/pedidos/pedidos';

export default function ExcluirPedido({ 
    isOpen = false, 
    setIsOpen = () => {}, 
    callbackCancelar = () => {}, 
    callbackConfirmar = () => {},
    bsIcon,
    title,
    text
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
            <th colSpan="5">Visualização</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td colSpan="5">
              <PedidoCard
                numeroPedido="001"
                nomeCliente="José Santos"
                cpfCnpj="123.456.789-00"
                dataEmissao="29/08/2024"
                valor="R$ 667,49"
                observacao="Requisição: N° 000153."
                statusPedido="Pedido Criado"
                corStatus="rgba(99, 181, 199, 1)"
                botoes={["VER MAIS", "ALTERAR", "EXCLUIR"]}
              />
            </td>
          </tr>
        </tbody>
      </table>
      </div>

    

        <div className={styles.buttonGroup}>
        <SmallButton text="CANCELAR" callback={() => { setIsOpen(false); callbackCancelar(); }}/>
          <SmallButton text="CONFIRMAR" callback={() => { callbackConfirmar(); setIsOpen(false); }} />
        </div>

        <div className={styles.pagina}>
          <span>Pág. 1</span>
        </div>
      </div>
    </div>
  );
}
