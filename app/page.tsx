//import Image from "next/image";
//import styles from "./page.module.css";

import { Htag, Hero} from "@/components";

export default function Home() {
  return (
    <main>
      <Htag tag='h1'>Иллюстратор Громова Мария</Htag>
      <div className="container">
          <Hero/>
      </div>
    </main>
  );
}
