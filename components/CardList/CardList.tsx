'use client';
import { ContactProps } from "./CardList.props";
import styles from "./CardList.module.css";
import cn from "classnames";
import { Card } from "@/components";

export const CardList = ({ className, ...props }: ContactProps): JSX.Element => {

  return (
    <ul className={cn(styles.list, className)} {...props }>
      <li className={styles.item}>
        <Card  title="Та что дружит с совами" seria={true} src='/img/illustrations/img1.jpg' href=''/>
      </li>
      <li className={styles.item}>
        <Card  title="Та что дружит с совами" seria={true} src='/img/illustrations/img1.jpg' href=''/>
      </li>
      <li className={styles.item}>
        <Card  title="Та что дружит с совами" seria={true} src='/img/illustrations/img1.jpg' href=''/>
      </li>
      <li className={styles.item}>
        <Card  title="Та что дружит с совами" seria={true} src='/img/illustrations/img1.jpg' href=''/>
      </li>
      <li className={styles.item}>
        <Card  title="Та что дружит с совами" seria={true} src='/img/illustrations/img1.jpg' href=''/>
      </li>
      <li className={styles.item}>
        <Card  title="Та что дружит с совами" seria={true} src='/img/illustrations/img1.jpg' href=''/>
      </li>
      <li className={styles.item}>
        <Card  title="Та что дружит с совами" seria={true} src='/img/illustrations/img1.jpg' href=''/>
      </li>
    </ul>
    );
};


//TODO: заглушка пока с тестовыми данными, переделать!!!


