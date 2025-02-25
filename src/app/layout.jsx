import { SpeedInsights } from '@vercel/speed-insights/next';
import { Poppins } from "next/font/google";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./globals.css";

const poppinsFont = Poppins({
  variable: "--font-poppins",
  weight: ["400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export const metadata = {
  title: "EstoTech: Soluções Inteligentes para Seu Estoque",
  description: "EstoTech: Simplificando o Gerenciamento de Estoque de forma Inteligente",
  charset: "UTF-8",
  author: "EstoTech Corporation - IFRO Campus Vilhena | 2° A Informática",
  keywords: "gerenciamento de estoque, EstoTech, controle de estoque, soluções tecnológicas, gerenciamento de equipe, gerenciamento de cadastro, relatorio de estoque e desempenho"
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body className={poppinsFont.variable}>
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}