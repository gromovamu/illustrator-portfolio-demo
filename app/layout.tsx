import type { Metadata } from "next";
import "./normalize.css";
import "./globals.css";
import { Header, Footer } from "@/components";
import { Social } from "@/interfaces/social.interfaces";

export const metadata: Metadata = {
  title: "Иллюстрации Громовой Марии",
  description: "Сайт-портофолио илюстратора Громовой МАрии",
};

const socialLinkList: Social[] = [
  {
    type:'be',
    src: '',
  },
  {
    type:'vk',
    src: '',
  },
  {
    type:'tel',
    src: '',
  },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
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
