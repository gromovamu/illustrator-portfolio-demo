import { MenuProps } from "./Menu.props";
import styles from "./Menu.module.css";
import cn from "classnames";
import { Logo } from "../Logo/Logo";
import { adventPro } from "@/app/fonts/fonts";
import Link from "next/link";

export async function Menu({ className, ...props}: MenuProps): Promise<JSX.Element> {    
    return (
    <nav className={cn(adventPro.className, styles.nav, className)} {...props}>       
      <ul className={cn("list", styles.list, styles.leftSide)}>
          <li className={cn(styles.item, styles.itemLeft)}>            
            <Link href="/" className={styles.link}>Главная</Link>
          </li>
          <li className={cn(styles.item, styles.itemLeft)}>            
            <Link href="/" className={styles.link}>Обложки</Link>
          </li>
          <li className={cn(styles.item, styles.itemLeft)}>           
            <Link href="/illustration" className={styles.link}>Иллюстрации</Link>
          </li>
        </ul>

        <Logo isLink={false}/>

        <ul className={cn("list", styles.list, styles.rightSide)}>
          <li className={cn(styles.item, styles.itemRight)}>           
            <Link href="/info" className={styles.link}>Обо мне</Link>
          </li>
          <li className={cn(styles.item, styles.itemRight)}>           
            <Link href="/service" className={styles.link}>Услуги</Link>
          </li>
          <li className={cn(styles.item, styles.itemRight)}>            
            <Link href="/" className={styles.link}>Контакты</Link>
          </li>
        </ul>
    </nav>); 
}




