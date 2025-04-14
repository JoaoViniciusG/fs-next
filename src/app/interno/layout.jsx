import styles from "./layout.module.css";

import Header from "@/components/header/header";
import BarraLateral from "@/components/barraLateral/barraLateralContainer/BarraLateral";
import PedidosProvider from "@/context/pedidos";

export default function InternoLayout({ children }) {
  return (
    <PedidosProvider>
      <div className={styles.containerMaster}>
        <Header />

        <BarraLateral />

        <main className={styles.containerPagesMain}>
          {children}
        </main>
      </div>
    </PedidosProvider>
  )
}