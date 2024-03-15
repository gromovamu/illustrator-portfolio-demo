'use client';

import { BurgerMenuProps } from "./BurgerMenu.props";
import styles from "./BurgerMenu.module.css";
import pageStyles from "@/app/page.module.css";
import cn from "classnames";
import Link from "next/link";
import { Logo, BurgerButton } from "@/src/components";
import { useState } from "react";

export const BurgerMenu = ({menu, className, ...props }: BurgerMenuProps): JSX.Element => {
  const [isOpenMode, setIsOpenMode] = useState<boolean>(false);

  return (
    <nav className={cn( styles.nav, className)} {...props}>
      <BurgerButton isOpenMode={isOpenMode} setIsOpenMode={setIsOpenMode}/>
      <Logo isLink={true} />

      <ul className={cn("list", styles.list)}>
        {menu.left.map(m => (
          <li key={m.id} className={styles.item}>
           <Link href={m.href} className={pageStyles.link}>{m.name}</Link>
          </li>
        ))}
        {menu.right.map(m => (
          <li key={m.id} className={styles.item}>
            <Link href={m.href} className={pageStyles.link}>{m.name}</Link>
          </li>
        ))}
      </ul>
    </nav>);
};