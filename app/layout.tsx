import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./normalize.css";
import "./globals.css";
import { Header } from "./components";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Иллюстрации Громовой Марии",
  description: "Сайт-портофолио илююстратора Громовой МАрии",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">      
      <body className={inter.className}>
      <Header/>
        {children}
      </body>
    </html>
  );
}
