import type { Metadata } from "next";
import "./normalize.css";
import "./globals.css";
import { Header, Footer } from "@/components";
import { getSocialLinks } from "@/api/getStaticContent";

export const metadata: Metadata = {
  title: "Иллюстрации Громовой Марии",
  description: "Сайт-портофолио илюстратора Громовой МАрии",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const socialLinkList = getSocialLinks();
  return (   
    <html lang="ru">      
      <body className="body">
      <Header/>
        {children}
      <Footer socialLinkList={socialLinkList}/>
      </body>
    </html>
  );
}
