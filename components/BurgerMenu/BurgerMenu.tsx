"use client";

import { BurgerMenuProps } from "./BurgerMenu.props";
import styles from "./BurgerMenu.module.css";
import pageStyles from "@/app/page.module.css";
import cn from "classnames";
import Link from "next/link";
import { Logo, BurgerButton } from "@/components";
import { useState } from "react";
import { useSpring, animated, useReducedMotion } from "@react-spring/web";
import { easings } from "@react-spring/web";
import { MouseEvent } from "react";
import { onClickIntoScroll } from "@/utils/onClickIntoScroll";

export const BurgerMenu = ({ menu, className, ...props }: BurgerMenuProps): JSX.Element => {
  const [isOpenMode, setIsOpenMode] = useState<boolean>(false); 
  useReducedMotion();// чтобы учесть если у пользователя включено ограничение движения  

  const hideAnimate = useSpring(
    {
      x: isOpenMode ? "0%" : "-120%",
      opacity: isOpenMode ? 1 : 0,
      config: {
        duration: isOpenMode ? 500 : 300,
        easing: isOpenMode ? easings.easeOutBack : easings.easeInSine,
      },
    }
  );

  const onClickLink = (e: MouseEvent<HTMLAnchorElement>) => { setIsOpenMode(false); onClickIntoScroll(e); };
   
  return (
    <nav className={cn(styles.nav, className)} {...props}>
      <BurgerButton isOpenMode={isOpenMode} setIsOpenMode={setIsOpenMode} />
      <Logo isLink={true} onClick={onClickLink} aria-label="На главную страницу"/>

      <animated.ul className={cn("list", styles.list)} style={hideAnimate} 
      aria-expanded={isOpenMode}>
        {menu.map(m => (
          <li key={m.id} className={styles.item}>
            <Link href={m.href} className={pageStyles.link} tabIndex={isOpenMode? 0: -1} onClick={onClickLink}>{m.name}</Link>
          </li>
        ))}
      </animated.ul>
    </nav>);
};