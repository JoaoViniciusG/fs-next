import {
    useEffect,
    useState
} from 'react';

import styles from './smallContainer.module.css';


export default function SmallContainer({ title, value, variance, prefix, hoverColor, callback = () => {}, backgroundColor = "#FFF" }) {
    const [varianceColor, setVarianceColor] = useState(null);
    const [varianceText, setVarianceText] = useState(null);
    const [varianceIcon, setVarianceIcon] = useState(null);


    useEffect(() => {
        if(typeof variance != "number" ) {
            setVarianceIcon("bi-code")
            setVarianceColor("#616161");
            setVarianceText("(0)");
            return;
        }    

        setVarianceIcon((variance > 0) ? "bi-arrow-up-short" : "bi-arrow-down-short")
        setVarianceColor((variance > 0) ? "var(--valuegreen)" : "var(--valuered)");
        setVarianceText("(" + ((variance > 0) ? "+ " : "- ") + Math.abs(variance).toLocaleString('pt-br', {minimumFractionDigits: 2}) + ")");
    }, [variance])
    
    return (
        <div 
            className={styles.containerMaster}
            style={{backgroundColor: backgroundColor}}>

            <h2 className={styles.titleContainer}>{title}</h2>
                
            <div className={styles.containerContent}>
                <div className={styles.containerValue}>
                    <p className={styles.prefix}>{prefix}</p>
                    <p className={styles.value}>{value}</p>
                </div>
                <div className={styles.containerVariance}>
                    <p 
                        style={{color: varianceColor}}
                        className={styles.variance}>{varianceText}</p>

                    <i 
                        style={{color: varianceColor, fontSize: 25, height: 25, width: 25, display: 'flex', justifyContent: 'center'}} 
                        className={`bi ${varianceIcon}`}></i>
                </div>
            </div>
        </div>
    )
}