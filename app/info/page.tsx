'use client';
import { Text, Htag } from "@/components";
import ExportedImage from "next-image-export-optimizer";
import styles from "./page.module.css";
import { getAuthorInfo } from "@/api/getStaticContent";


export default function Page() {
  const info = getAuthorInfo();
  return (
    <div className="container">
      <Htag tag='h1'>Иллюстратор Громова Мария. Информация обо мне.</Htag>

      <section className={styles.info}>
        <div className={styles.container}>
          <div className={styles.imgContainer}>
            <ExportedImage  className={styles.img}            
              fill
              unoptimized
              src={`${process.env.NEXT_PUBLIC_MAIN_PATH}/info-foto.jpg`}
              alt='Фото автора' />
          </div>         

          <div className={styles.descr}>
            <Htag tag='h2' opt="medium" className={styles.title}>Здравствуйте</Htag>
            <Text>
             {info}
            </Text>
          </div>
        </div>
      </section>
    </div>);
}
