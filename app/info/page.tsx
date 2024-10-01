"use client";
import { Text, Htag } from "@/components";
//import ExportedImage from "next-image-export-optimizer";
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
            <img className={styles.img}
              src={`${process.env.NEXT_PUBLIC_MAIN_PATH}/info-foto.jpg`}
              srcSet={
                `${process.env.NEXT_PUBLIC_MAIN_PATH}/info-foto-150.jpg 150w,
                 ${process.env.NEXT_PUBLIC_MAIN_PATH}/info-foto-225.jpg 225w,
                 ${process.env.NEXT_PUBLIC_MAIN_PATH}/info-foto-286.jpg 286w,
                 ${process.env.NEXT_PUBLIC_MAIN_PATH}/info-foto.jpg 350w`}
              sizes="
                  (max-width: 520px) 150px,
                  (max-width: 860px) 225px,
                  (max-width: 1200px) 286px,
                  350px"
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
