import { DividerProps } from "./Divider.props";
import styles from "./Divider.module.css";
import cn from "classnames";

export const Divider = ({opt='left', className, ...props}: DividerProps): JSX.Element => {   
    return (<div className={cn(styles.decor, className, {
        [styles.mirror]: opt=='right'
    })} {...props}>
    <div className={cn(styles.lines, styles.short)}>
    </div>
    <div className={styles.elements}>
      <span className={styles.element}></span>
      <span className={styles.element}></span>
      <span className={styles.element}></span>
    </div>
    <div className={cn(styles.lines, styles.long)}>
    </div>
  </div>
    );       
};