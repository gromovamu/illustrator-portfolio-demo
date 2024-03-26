//import Image from "next/image";
//import styles from "./page.module.css";

import { Htag, Hero, Divider, ShortServices, Footer, Contact} from "@/components";
import { ContactData } from "@/interfaces/contact.interfaces";
import { Service } from "@/interfaces/service.interfaces";
import { Social } from "@/interfaces/social.interfaces";


const shortServicesData: Service[] = [
  {
    id: 1,
    iconSrc: "/img/svg/coverIcon.svg",
    title: "Обложки",
    descr: "Разработка дизайн обложек для электронных и печатных изданий"
  }, 
  {
    id: 2,
    iconSrc: "/img/svg/illustrationIcon.svg",
    title: "Иллюстрация",
    descr: "Векторные изображения, разработка персонажей, небольшие серии иллюстрация"
  }];

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

const telegram: ContactData = {
  text: "@mugromova",
  href: "https://t.me/mugromova"
};

const mail: ContactData = {
  text: "mu_g_art@mail.ru",
  href: "mailto:mu_g_art@mail.ru"
};



export default function Home() {
  return (
    <main>
      <Htag tag='h1'>Иллюстратор Громова Мария</Htag>
      <div className="container">
          <Hero/>
          <Divider/>
          <ShortServices servicesList={shortServicesData}/>
          <Divider opt="right"/>
          <Contact telegram={telegram} mail={mail}/>       
          <Footer socialLinkList={socialLinkList}/>
      </div>
    </main>
  );
}
