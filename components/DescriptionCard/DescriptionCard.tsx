import { DescriptionCardProps } from "./DescriptionCard.props";
import styles from "./DescriptionCard.module.css";
import cn from "classnames";
import { InfoCard} from "@/components";
import Image from "next/image";

export const DescriptionCard = ({ iconSrc, children, className, ...props }: DescriptionCardProps): JSX.Element => {
  return (
    <InfoCard className={cn(styles.card, className)} {...props}>
      <div className={styles.icon} >
        <Image fill src={iconSrc} alt='' />
      </div>
      <div className={styles.divider}></div>            
      {children}
    </InfoCard>);
};