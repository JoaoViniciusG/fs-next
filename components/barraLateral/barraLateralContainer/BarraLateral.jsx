import BarraLateralModule from '../barraLateralModule/BarraLateralModule';
import styles from './barraLateral.module.css'

const teste = [
    {nome:"Pedido"},
    {nome:"Funcionários"},
    {nome:"Produtos"}
]

export default function BarraLateral() {
    return (
        <div className={styles.containerMaster}>
            {teste.map((module, index)=> {
                return (
                    <BarraLateralModule key={index} nome={module.nome}/>
                );
            })}
        </div>
    );
}