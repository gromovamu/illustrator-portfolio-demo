'use client';
import { CardListProps } from "./CardList.props";
import styles from "./CardList.module.css";
import cn from "classnames";
import { Card } from "@/components";

export const CardList = ({ seriaDecor, cardList, className, ...props }: CardListProps): JSX.Element => {
   return (
    <ul className={cn(styles.list, className)} {...props}>
      {
        cardList && cardList.map(card => {
          const isSeria = card.seriaId == null ? false : true;
          return (
          <li className={cn(styles.item,  {
            [styles.decor] : isSeria&&seriaDecor
          })} key={card.id}>
            <Card title={card.title} seria={isSeria} src={card.url} href='' />
          </li>
          ); 
        }) 
      }
    </ul>
  );
};

//TODO: генерация пути к странице с иллюстрацией
