import { LinkButtonProps, ButtonProps } from "./Button.props";
import styles from "./Button.module.css";
import cn from "classnames";
import { adventPro } from "@/fonts/fonts";
import Link from "next/link";

export const Button = ({children, className, ...props}: ButtonProps ): JSX.Element => {
    return (<button className={cn(adventPro.className, styles.button, className)} {...props}>    
        {children}       
    </button>);
   
};

export const LinkButton = ({href, children, className, ...props}: LinkButtonProps ): JSX.Element => {
    return (<Link href={href} className={cn(adventPro.className, styles.button, styles.link, className)} {...props}>    
        {children}       
    </Link>);
   
};

