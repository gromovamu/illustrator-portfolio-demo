'use client';

import { BurgerMenuProps } from "./BurgerMenu.props";
import styles from "./BurgerMenu.module.css";
import pageStyles from "@/app/page.module.css";
import cn from "classnames";
import Link from "next/link";
import { Logo, BurgerButton } from "@/components";
import { useState } from "react";
import { useSpring, animated } from '@react-spring/web';

export const BurgerMenu = ({ menu, className, ...props }: BurgerMenuProps): JSX.Element => {
  const [isOpenMode, setIsOpenMode] = useState<boolean>(false);

  const [springs, api] = useSpring(() => ({    
      x: -400,
      opacity: 0,     
  }));
  
  const startAnimate = () => {    
    !isOpenMode && api.start({
      from: {
        x: -100,
        opacity: 0,           
      },
      to: {
        x: 0,
        opacity: 1,      
      },
      config: {
        duration: 300,        
      },    
    });

    isOpenMode && api.start({
      from: {
        x: 0,
        opacity: 1,      
      },
      to: {
        x: -500,        
        opacity: 0,       
      },
      config: {
        duration: 300
      },
     
    });
  };

  const setOpen = (mode: boolean) => {
    startAnimate();
    setIsOpenMode(mode);
  };

  return (
    <nav className={cn(styles.nav, className)} {...props}>
      <BurgerButton isOpenMode={isOpenMode} setIsOpenMode={setOpen} />
      <Logo isLink={true} />

      <animated.ul className={cn("list", styles.list)} style={springs}>
        {menu.map(m => (
          <li key={m.id} className={styles.item}>
            <Link href={m.href} className={pageStyles.link}>{m.name}</Link>
          </li>
        ))}
      </animated.ul>
    </nav>);
};