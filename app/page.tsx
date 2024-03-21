//import Image from "next/image";
//import styles from "./page.module.css";

import { Htag, Hero, Divider, LinkButton, ShortServices} from "@/components";
import { Service } from "@/interfaces/service.interfaces";


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
  }
];

export default function Home() {
  return (
    <main>
      <Htag tag='h1'>Иллюстратор Громова Мария</Htag>
      <div className="container">
          <Hero/>
          <Divider/>
          <ShortServices servicesList={shortServicesData}/>
      </div>
    </main>
  );
}
