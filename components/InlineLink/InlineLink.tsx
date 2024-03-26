'use client';
import { InlineLinkProps } from "./InlineLink.props";
import styles from "./InlineLink.module.css";
import cn from "classnames";
import Link from "next/link";
import { MouseEvent } from "react";
import { isIdInRefMap, scrollById } from "@/utils/scrollById";


export const InlineLink = ({decor='color', href, children, className, ...props}: InlineLinkProps): JSX.Element => {    
  const onClick = (e: MouseEvent<HTMLAnchorElement>) => {  
    const id = href.slice(1);
    if (href.startsWith("#") && isIdInRefMap(id)) {
      e.preventDefault();
      scrollById(id);      
    }
  };

  return (
  <Link href={href} className={cn(styles.link, className, {
    [styles.decorBackground]: decor == 'back',
    [styles.decorColor]: decor == 'color',
  })} onClick={onClick} {...props}>     
    {children}
  </Link>); 
};