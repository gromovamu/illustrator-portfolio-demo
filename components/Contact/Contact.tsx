'use client';
import { ContactProps } from "./Contact.props";
import styles from "./Contact.module.css";
import cn from "classnames";
import { Htag, InlineLink, Text } from "@/components";
import { saveRefByID } from "@/utils/scrollById";
import Image from 'next/image';

export const Contact = ({ mail, telegram, className, ...props }: ContactProps): JSX.Element => {

  return (
    <section id="contacts" className={cn(styles.contact, className)} ref={node => saveRefByID("contacts", node)} {...props}>
      <Htag tag="h2" opt="medium" className={styles.title}>Контакты</Htag>
      <Text className={styles.text}>
        Вы&nbsp;можете написать мне в&nbsp;телеграм&nbsp;
        <InlineLink decor="back" href={telegram.href} target="_blank">
          {telegram.text}
        </InlineLink>
        &nbsp;или на&nbsp;электронную почту &nbsp;
        <InlineLink decor="back" href={mail.href}>
          {mail.text}
        </InlineLink>
      </Text>       
      <div className={styles.imgContainer}>
        <Image className={styles.img}
          fill
          priority={true}
          src='img/main/contacts.svg'
          alt='Декоративное изображение почтового ящика' />
      </div>

    </section>);
};

