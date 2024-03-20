import { InlineLinkProps } from "./InlineLink.props";
import styles from "./InlineLink.module.css";
import cn from "classnames";
import Link from "next/link";


export const InlineLink = ({decor='back', href, children, className, ...props}: InlineLinkProps): JSX.Element => {    
  return (
  <Link href={href} className={cn(styles.link, className, {
    [styles.decorBackground]: decor == 'back',
    [styles.decorColor]: decor == 'back',
  })} {...props}>     
    {children}
  </Link>); 
};