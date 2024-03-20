import { InfoCardProps } from "./InfoCard.props";
import styles from "./InfoCard.module.css";
import cn from "classnames";


export const InfoCard = ({ children, className, ...props}: InfoCardProps): JSX.Element => {    
  return (
  <div className={cn(styles.card, className)} {...props}>     
    {children}
  </div>); 
};