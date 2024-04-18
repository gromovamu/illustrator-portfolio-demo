'use client';
import { ContactProps } from "./CardList.props";
import styles from "./CardList.module.css";
import cn from "classnames";
import { Card } from "@/components";

export const CardList = ({ cardList, className, ...props }: ContactProps): JSX.Element => {
  return (
    <ul className={cn(styles.list, className)} {...props}>
      {
        cardList && cardList.map(card => (
          <li className={styles.item} key={card.id}>
            <Card title={card.title} seria={card.seriaId == null ? false : true} src={card.url} href='' />
          </li>
        ))
      }
    </ul>
  );
};

//TODO: генерация пути к странице с иллюстрацией
