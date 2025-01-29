import styles from './BarraLateralOption.module.css'

export default function BarraLateralOption({ optionName }) {
    return (
        <div className={styles.containerMaster}>
            <i className="bi bi-arrow-return-right"></i>
            <p>{optionName}</p>
        </div>
    );
}