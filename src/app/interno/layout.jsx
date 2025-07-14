import styles from "./layout.module.css";

import Header from "@/components/header/header";
import BarraLateral from "@/components/barraLateral/barraLateralContainer/BarraLateral";
import PedidosProvider from "@/context/pedidos.context";
import RelatorioProvider from "@/context/relatorios.context";
import EnderecoProvider from "@/context/endereco.context";
import ProdutoProvider from "@/context/produto.context";
import FornecedorProvider from "@/context/fornecedor.context";
import MarcaProvider from "@/context/marca.context";
import FuncionarioProvider from "@/context/funcionario.context";
import GlobalFilter from "@/components/filter/globalFilter/globalFilter";

export default function InternoLayout({ children }) {
  return (
    <PedidosProvider>
      <RelatorioProvider>
        <EnderecoProvider>
          <ProdutoProvider>
            <FornecedorProvider>
              <FuncionarioProvider>
                <MarcaProvider>
                  <div className={styles.containerMaster}>
                    <Header />

                    <BarraLateral />

                    <main className={styles.containerPagesMain}>
                      {children}
                    </main>

                    <GlobalFilter />
                  </div>
                </MarcaProvider>
              </FuncionarioProvider>
            </FornecedorProvider>
          </ProdutoProvider>
        </EnderecoProvider>
      </RelatorioProvider>
    </PedidosProvider>
  )
}
