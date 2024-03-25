import { ContactProps } from "./Contact.props";
import styles from "./Contact.module.css";
import cn from "classnames";
import { Htag, InlineLink, Text } from "@/components";



export const Contact = ({ mail, telegram, className, ...props }: ContactProps): JSX.Element => {
  return (
    <section className={cn(styles.contact, className)} {...props}>
      <Htag tag="h2" opt="medium" className={styles.title}>Контакты</Htag>
      <Text className={styles.text}>
        Вы&nbsp;можете написать мне в&nbsp;телеграм&nbsp;
        <InlineLink decor="back" href={telegram.href } target="_blank">
        {telegram.text}
        </InlineLink>
        &nbsp;или на&nbsp;электронную почту &nbsp;
        <InlineLink decor="back" href={mail.href}>
       {mail.text}
        </InlineLink>
      </Text>
    </section>);
};

