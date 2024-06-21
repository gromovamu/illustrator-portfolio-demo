import { ServiceCardProps } from "./ServiceCard.props";
import styles from "./ServiceCard.module.css";
import cn from "classnames";
import { Htag, InfoCard, Text } from "@/components";
import ExportedImage from "next-image-export-optimizer";


export const ServiceCard = ({ iconSrc, title, text, className, ...props }: ServiceCardProps): JSX.Element => {
  return (
    <InfoCard className={cn(styles.card, className)} {...props}>
      <div className={styles.icon} >
        <ExportedImage fill unoptimized src={iconSrc} alt='' />
      </div>
      <div className={styles.divider}></div>

      <Htag className={styles.title} tag='h3' opt='small'>{title}</Htag>
      <div className={styles.content}>
        {text && text.map((paragraph, i) => (
          <Text key={`${title}${i}`} className={styles.descr} >{paragraph}</Text>
        ))}
      </div>
    </InfoCard>);
};