import styles from './smallContainer.module.css';

export default function SmallContainer({ title, value, variance, prefix, hoverColor, callback = () => {}, backgroundColor = "#FFF" }) {
    return (
        <div 
            className={styles.containerMaster}
            style={{backgroundColor: backgroundColor}}>

            <h2>{title}</h2>
                
            <div>

            </div>
        </div>
    )
}