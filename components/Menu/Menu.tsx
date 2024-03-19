import { MenuProps } from "./Menu.props";
import styles from "./Menu.module.css";
import pageStyles from "@/app/page.module.css";
import cn from "classnames";
import { Logo } from "../Logo/Logo";
import { adventPro } from "@/fonts/fonts";
import Link from "next/link";

export const Menu = ({ menu, className, ...props}: MenuProps): JSX.Element => {    
  return (
  <nav className={cn(adventPro.className, styles.nav, className)} {...props}>       
    <ul className={cn("list", styles.list, styles.left)}>  
       { menu.left.map(m => (
        <li key={m.id}  className={styles.item}>
          <Link  href={m.href} className={pageStyles.link}>{m.name}</Link>
        </li>        
       ))} 
    </ul>

    <Logo  isLink={false}/>

    <ul className={cn("list", styles.list, styles.right)}>  
       { menu.right.map(m => (
        <li key={m.id} className={styles.item}>
          <Link  href={m.href} className={pageStyles.link}>{m.name}</Link>
        </li>        
       ))} 
    </ul>
    
  </nav>); 
};

/**/