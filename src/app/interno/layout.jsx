import styles from "./layout.module.css";

import Header from "@/components/header/header";
import BarraLateral from "@/components/barraLateral/barraLateralContainer/BarraLateral";
import PedidosProvider from "@/context/pedidos.context";
import RelatorioProvider from "@/context/relatorios.context";
import { EnderecoContext } from "@/context/endereco.context";

export default function InternoLayout({ children }) {
  return (
    <PedidosProvider>
      <RelatorioProvider>
        <EnderecoContext>
          <div className={styles.containerMaster}>
            <Header />

            <BarraLateral />

            <main className={styles.containerPagesMain}>
              { children }
            </main>
          </div>
        </EnderecoContext>
      </RelatorioProvider>
    </PedidosProvider>
  )
}
