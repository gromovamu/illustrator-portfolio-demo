import { HeaderProps } from "./Header.props";
import styles from "./Header.module.css";
import cn from "classnames";
import { BurgerMenu, Menu } from "@/components";
import { decorFont } from "@/fonts/fonts";
import {getMenu} from "@/api/getStaticContent";

export const Header = ({ ...props }: HeaderProps): JSX.Element => {
  const menuLinkData = getMenu();
  const burgerMenu = [...menuLinkData.left, ...menuLinkData.right];

  return (<header className={cn(styles.header, decorFont.className)} {...props}>
    <div className={styles.fixedTop}>
      <div className={cn('container', styles.container)}>
        <Menu menu={menuLinkData} />
        <BurgerMenu menu={burgerMenu} />
      </div>
    </div>
    <div className={styles.plug}></div>
  </header>);
};
