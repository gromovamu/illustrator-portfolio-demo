//import Image from "next/image";
//import styles from "./page.module.css";

import { Htag, Hero, Divider, LinkButton} from "@/components";

export default function Home() {
  return (
    <main>
      <Htag tag='h1'>Иллюстратор Громова Мария</Htag>
      <div className="container">
          <Hero/>
          <Divider/>
          <LinkButton href="#"> Подробнее </LinkButton>   
      </div>
    </main>
  );
}
