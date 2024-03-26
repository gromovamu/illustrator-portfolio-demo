import { ServiceCardProps } from "./ServiceCard.props";
import styles from "./ServiceCard.module.css";
import cn from "classnames";
import { Htag, InfoCard,Text } from "@/components";
import Image from "next/image";


export const ServiceCard = ({ iconSrc, title, descr, className, ...props }: ServiceCardProps): JSX.Element => {
  return (
    <InfoCard className={cn(styles.card, className)} {...props}>
      <div className={styles.icon} >
      <Image fill src={iconSrc} alt='' />
      </div>
      <Htag className={styles.title} tag='h3' opt='small'>{title}</Htag>
      <Text className={styles.descr} >{descr}</Text>     
    </InfoCard>);
};