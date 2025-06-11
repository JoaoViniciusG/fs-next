import React from 'react';
import styles from './page.module.css';

const textosStatus = [
  "Pedido Criado",
  "Aguardando Pagamento",
  "Pagamento Confirmado",
  "Enviado",
  "Pedido Cancelado",
  "Entregue"
];

const coresStatus = [
  "rgba(99, 181, 199, 1)",
  "var(--orange)",
  "var(--cyan)",
  "var(--green)",
  "var(--darkred)", 
  "Green"
];

export default function StatusPopup({ onSelectStatus, onClose, isOpen = true, idPedido }) {
  if (!isOpen) return null;

  const handleClick = (index) => {
    onSelectStatus(index, idPedido);
    onClose();
  };

  const handleBackgroundClick = (e) => {
    if (e.target === e.currentTarget) onClose(); // Só fecha se clicar fora do conteúdo
  };

  return (
    <div className={styles.backgroundContainer} onClick={handleBackgroundClick}>
      <div className={styles.containerContent}>
        <div className={styles.titleWrapper}>
          <h2 className={styles.title}>STATUS:</h2>
        </div>

        <div className={styles.columnsContainer}>
          <div className={styles.column}>
            {textosStatus.slice(0, 3).map((text, index) => (
              <button
                key={index}
                className={styles.statusButton}
                style={{ backgroundColor: coresStatus[index], color: '#fff' }}
                onClick={() => handleClick(index)}
              >
                {text}
              </button>
            ))}
          </div>
          <div className={styles.column}>
            {textosStatus.slice(3).map((text, index) => (
              <button
                key={index + 3}
                className={styles.statusButton}
                style={{ backgroundColor: coresStatus[index + 3], color: '#fff' }}
                onClick={() => handleClick(index + 3)}
              >
                {text}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
