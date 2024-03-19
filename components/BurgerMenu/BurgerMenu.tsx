'use client';

import { BurgerMenuProps } from "./BurgerMenu.props";
import styles from "./BurgerMenu.module.css";
import pageStyles from "@/app/page.module.css";
import cn from "classnames";
import Link from "next/link";
import { Logo, BurgerButton } from "@/components";
import { useEffect, useState } from "react";
import { useSpring, animated } from '@react-spring/web';

export const BurgerMenu = ({ menu, className, ...props }: BurgerMenuProps): JSX.Element => {
  const [isOpenMode, setIsOpenMode] = useState<boolean>(false);

  const [springs, api] = useSpring(() => ({
    from: { x: 0 },
  }));

  const startAnimate = () => {
    console.log('start animate');
    !isOpenMode && api.start({
      from: {       
        x: -100,
      },
      to: {        
        x: 100,
      },
    });
  };

  useEffect(() => {
    startAnimate();
  }, [isOpenMode]);



  return (
    <nav className={cn(styles.nav, className)} {...props}>
      <BurgerButton isOpenMode={isOpenMode} setIsOpenMode={setIsOpenMode} />
      <Logo isLink={true} />

      <animated.ul className={cn("list", styles.list)} style={springs}>
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
      </animated.ul>
    </nav>);
};