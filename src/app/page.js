import Image from "next/image";
import styles from "./page.module.css";

import Header from "../components/header/header";
import BarraLateral from "../components/barraLateral/barraLateralContainer/BarraLateral";

export default function Home() {
  return (
    <div className={styles.containerMaster}>
      <Header />
      
      <BarraLateral />

      <main>

      </main>
    </div>
  );
}
