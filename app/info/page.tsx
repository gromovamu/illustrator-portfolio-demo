'use client';
import { Text, Htag } from "@/components";
import Image from 'next/image';
import styles from "./page.module.css";

const info = " Меня зовут Громова Мария, я иллюстратор. Я закончила курсы коммерчесской иллюстрации онлайн школы skillbox и уже более двух лет рисую векторные иллюстрации. Основное напраление моей деятельности: обложки для электронных книг и небольшие серии милых иллюстраций";

export default function Page() {
  return (
    <div className="container">
      <Htag tag='h1'>Иллюстратор Громова Мария. Информация обо мне.</Htag>

      <section className={styles.info}>
        <div className={styles.container}>
          <div className={styles.imgContainer}>
            <Image  className={styles.img}            
              fill
              unoptimized
              src={'/img/main/info-foto.jpg'}
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
