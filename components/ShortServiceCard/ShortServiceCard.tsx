import { ShortServiceCardProps } from "./ShortServiceCard.props";
import styles from "./ShortServiceCard.module.css";
import cn from "classnames";
import { Htag, InfoCard,Text } from "@/components";
import ExportedImage from "next-image-export-optimizer";


export const ShortServiceCard = ({ iconSrc, title, descr, className, ...props }: ShortServiceCardProps): JSX.Element => {
  return (
    <InfoCard className={cn(styles.card, className)} {...props}>
      <div className={styles.icon} >
      <ExportedImage fill unoptimized src={iconSrc} alt='' />
      </div>
      <Htag className={styles.title} tag='h3' opt='small'>{title}</Htag>
      <Text className={styles.descr} >{descr}</Text>     
    </InfoCard>);
};