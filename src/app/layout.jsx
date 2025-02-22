import "bootstrap-icons/font/bootstrap-icons.css";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppinsFont = Poppins({
  variable: "--font-poppins",
  weight: ["400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export const metadata = {
  title: "EstoTech",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body className={poppinsFont.variable}>
        {children}
      </body>
    </html>
  );
}
