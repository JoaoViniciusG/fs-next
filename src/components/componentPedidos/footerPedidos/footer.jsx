import styles from './footer.module.css'
import StandardButton from '@/components/buttons/standardButton/standardButton'


export default function Footer ({ buttons = [] })  {
  return (
    <div className={styles.baixo}>
      <div className={styles.divTagBottom}>
        <p>Código do pedido:</p>
        <span>N° 000</span>
      </div>
      <div className={styles.buttonsContainer}>
        {buttons.map(({ text, hoverColor, callback }, index) => (
          <StandardButton
            key={index}
            text={text}
            hoverColor={hoverColor}
            callback={callback}
          />
        ))}
      </div>
    </div>
  );
};


