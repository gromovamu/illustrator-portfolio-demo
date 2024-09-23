import { HeroProps } from "./Hero.props";
import styles from "./Hero.module.css";
import cn from "classnames";
import { Htag, InfoCard, InlineLink, Text } from "@/components";
//import ExportedImage from "next-image-export-optimizer";

export const Hero = ({ className, ...props }: HeroProps): JSX.Element => { 
  return (
    <section className={cn(styles.hero, className)} {...props}>
      <div className={styles.container}>
        <InfoCard className={styles.content}>
          <Htag className={styles.title} tag='h3' opt='medium'> Добро пожаловать!</Htag>
          <Text className={styles.text}>
            Я&nbsp;рада приветсвовать вас на&nbsp;своей странице. Здесь вы&nbsp;можете познакомиться с&nbsp;моими работами, узнать немного обо мне или&nbsp;
            <InlineLink href="#contacts"> связаться&nbsp;со&nbsp;мной.</InlineLink>
          </Text>
        </InfoCard>

        <div className={styles['avatar-container']}>
          <img className={styles.avatar}            
            width={358}
            height={358}           
            srcSet={
              `${process.env.NEXT_PUBLIC_MAIN_PATH}/avatar-250.webp 250w,
               ${process.env.NEXT_PUBLIC_MAIN_PATH}/avatar.webp 358w`}
            sizes="                
                (max-width: 860px) 250px,                
                358px"   
            src={`${process.env.NEXT_PUBLIC_MAIN_PATH}/avatar.png`}
            alt='' />
        </div>

      </div>
    </section>
  );
};

/**/