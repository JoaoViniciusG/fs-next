import {
    useEffect,
    useState
} from 'react';

import styles from './smallContainer.module.css';


export default function SmallContainer({ title, value, variance, prefix, suffix, hoverColor, decimalPlaces = 2, callback = () => {}, backgroundColor = "#FFF" }) {
    const [varianceColor, setVarianceColor] = useState(null);
    const [varianceText, setVarianceText] = useState(null);
    const [varianceIcon, setVarianceIcon] = useState(null);
    const [varianceState, setVarianceState] = useState(false);


    useEffect(() => {
        if(typeof variance != "number") {
            setVarianceState(false); 
            return;
        }
        
        setVarianceState(true);
        if(variance == 0 ) {
            setVarianceIcon("bi-code")
            setVarianceColor("#616161");
            setVarianceText("(0)");
            return;
        }    

        setVarianceIcon((variance > 0) ? "bi-arrow-up-short" : "bi-arrow-down-short")
        setVarianceColor((variance > 0) ? "var(--valuegreen)" : "var(--valuered)");
        setVarianceText("(" + ((variance > 0) ? "+ " : "- ") + Math.abs(variance).toLocaleString('pt-br', {minimumFractionDigits: decimalPlaces}) + ")");
    }, [variance])
    
    return (
        <div 
            className={styles.containerMaster}
            style={{backgroundColor: backgroundColor}}>

            <h2 className={styles.titleContainer}>{title}</h2>
                
            <div className={styles.containerContent}>
                <div className={styles.containerValue}>
                    <p className={styles.prefix}>{prefix}</p>
                    <p className={styles.value}>{value.toLocaleString('pt-br', {minimumFractionDigits: decimalPlaces})}</p>
                    <p className={styles.suffix}>{suffix}</p>
                </div>
                <div className={styles.containerVariance} style={{display: (varianceState) ? "flex" : "none"}}>
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