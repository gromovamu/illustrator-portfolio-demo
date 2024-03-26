import type { Metadata } from "next";
import "./normalize.css";
import "./globals.css";
import { Header } from "@/components";

export const metadata: Metadata = {
  title: "Иллюстрации Громовой Марии",
  description: "Сайт-портофолио илюстратора Громовой МАрии",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (   
    <html lang="ru">      
      <body>
      <Header/>
        {children}
      </body>
    </html>
  );
}
