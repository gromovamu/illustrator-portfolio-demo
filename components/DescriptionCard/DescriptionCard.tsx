import { DescriptionCardProps } from "./DescriptionCard.props";
import styles from "./DescriptionCard.module.css";
import cn from "classnames";
import { InfoCard} from "@/components";
import ExportedImage from "next-image-export-optimizer";

export const DescriptionCard = ({ iconSrc, children, className, ...props }: DescriptionCardProps): JSX.Element => {
  return (
    <InfoCard className={cn(styles.card, className)} {...props}>
      <div className={styles.icon} >
        <ExportedImage fill unoptimized src={iconSrc} alt='' />
      </div>
      <div className={styles.divider}></div>            
      {children}
    </InfoCard>);
};