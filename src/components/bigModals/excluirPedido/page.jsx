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
  text,
  pedido = null,   // novo prop
}) {
  if (!pedido) return null; // evita erro se pedido não estiver definido

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
                    numeroPedido={String(pedido.numeroPedido || pedido.id).padStart(3, "0")}
                    nomeCliente={pedido.nomeCliente || pedido.nome}
                    cpfCnpj={pedido.cpfCnpj || pedido.cpf}
                    dataEmissao={pedido.dataEmissao || pedido.data}
                    valor={pedido.valor || pedido.valorTotal}
                    observacao={pedido.observacao}
                    statusPedido={pedido.statusPedido || pedido.status}
                    idPedido={pedido.id}
                    produtos={pedido.produtos || []}
                    onExcluir={() => {}}  // pode deixar vazio aqui
                  />
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className={styles.buttonGroup}>
          <SmallButton text="CANCELAR" callback={() => { setIsOpen(false); callbackCancelar(); }} />
          <SmallButton text="CONFIRMAR" callback={() => { callbackConfirmar(); setIsOpen(false); }} />
        </div>

        <div className={styles.pagina}>
          <span>Pág. 1</span>
        </div>
      </div>
    </div>
  );
}
