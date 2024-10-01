"use client";

import { BurgerButtonProps } from "./BurgerButton.props";
import styles from "./BurgerButton.module.css";
import cn from "classnames";

export const BurgerButton = ({isOpenMode, setIsOpenMode, className, ...props}: BurgerButtonProps): JSX.Element => {  
  
    return (
    <button className={cn("btn", styles.burger, className, {
        [styles.burgerClose]:isOpenMode
    })} onClick={() => {setIsOpenMode(!isOpenMode);}}
    aria-label={isOpenMode? "Закрыть меню":"Открыть меню"}
     {...props}>   
          <span className={cn(styles.line, styles.lineTop)}></span>
          <span className={cn(styles.line, styles.lineCenter)}></span>
          <span className={cn(styles.line, styles.lineDown)}></span>      
    </button>);
   
};