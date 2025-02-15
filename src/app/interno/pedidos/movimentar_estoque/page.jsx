'use client'

import styles from "./page.module.css"
import BasicScreen from "@/components/screens/basicScreen/basicScreen"
import InputLabel from "@/components/inputs/inputLabel/inputLabel"

export default function pageMovimentarEstoque(){
    return(
        <BasicScreen pageTitle="Movimentar estoque">
                <div className={styles.tableContainer}>
      <table className={styles.produtosTable}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>Marca</th>
            <th>Quantidade atual</th>
            <th>Movimentação</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>99000-0</td>
            <td>Placa de vídeo RTX 4090 TI</td>
            <td>Nvidia</td>
            <td>25</td>
            <td className={styles.tdQuantity}>
              <div className={styles.containerItemQuantity}>
                <input type="number" defaultValue="0" />
              </div>
            </td>
            <td>
              <button className={styles.closeButton}>✖</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
        </BasicScreen>
    )
}