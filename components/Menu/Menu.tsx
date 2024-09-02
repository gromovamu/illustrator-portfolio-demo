import { MenuProps } from "./Menu.props";
import styles from "./Menu.module.css";
import pageStyles from "@/app/page.module.css";
import cn from "classnames";
import { Logo } from "../Logo/Logo";
import { decorFont } from "@/fonts/fonts";
import Link from "next/link";
import { onClickIntoScroll } from "@/utils/onClickIntoScroll";
import { MenuLink } from "@/interfaces";

export const Menu = ({ menu, className, ...props}: MenuProps): JSX.Element => {    
  
  const makeItem = (m: MenuLink) => (
    <li key={m.id}  className={styles.item}>
      <Link  href={m.href} className={pageStyles.link} onClick={onClickIntoScroll}>{m.name}</Link>
    </li>        
   );

  return (
  <nav className={cn(decorFont.className, styles.nav, className)} {...props}>       
    <ul className={cn("list", styles.list, styles.left)}>  
       { menu.left.map(m => makeItem(m))} 
    </ul>

    <Logo  isLink={true}/>

    <ul className={cn("list", styles.list, styles.right)}>  
       { menu.right.map(m => makeItem(m))} 
    </ul>
    
  </nav>); 
};

/**/