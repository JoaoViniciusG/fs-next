import styles from "./layout.module.css";

import Header from "@/components/header/header";
import BarraLateral from "@/components/barraLateral/barraLateralContainer/BarraLateral";
import PedidosProvider from "@/context/pedidos.context";
import RelatorioProvider from "@/context/relatorios.context";
import EnderecoProvider from "@/context/endereco.context";
import ProdutoProvider from "@/context/produto.context";

export default function InternoLayout({ children }) {
  return (
    <PedidosProvider>
      <RelatorioProvider>
        <EnderecoProvider>
          <ProdutoProvider>
            <div className={styles.containerMaster}>
              <Header />

              <BarraLateral />

              <main className={styles.containerPagesMain}>
                { children }
              </main>
            </div>
          </ProdutoProvider>
        </EnderecoProvider>
      </RelatorioProvider>
    </PedidosProvider>
  )
}
