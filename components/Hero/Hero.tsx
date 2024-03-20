import { HeroProps } from "./Hero.props";
import styles from "./Hero.module.css";
import cn from "classnames";
import { Htag, InfoCard, InlineLink, Text } from "@/components";
import Image from 'next/image';



export const Hero = ({ className, ...props }: HeroProps): JSX.Element => {
  return (
    <section className={cn(styles.hero, className)} {...props}>
      <div className={styles.container}>
        <InfoCard className={styles.content}>
          <Htag className={styles.title} tag='h3' opt='medium'> Добро пожаловать!</Htag>
          <Text className={styles.text}>
            Я&nbsp;рада приветсвовать вас на&nbsp;своей странице. Здесь вы&nbsp;можете познакомиться с&nbsp;моими работами, узнать немного обо мне или&nbsp;
            <InlineLink href="#"> связаться&nbsp;со&nbsp;мной.</InlineLink>
          </Text>
        </InfoCard>

        <div className={styles.avatarContainer}>
          <Image className={styles.avatar}
            width={358}
            height={358}
            src={'/img/main/avatar.png'}
            alt='Аватар: иллистратор Громова Мария' />
        </div>

      </div>
    </section>
  );
};

/**/