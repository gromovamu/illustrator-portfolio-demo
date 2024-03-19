import { HeaderProps } from "./Header.props";
import styles from "./Header.module.css";
import cn from "classnames";
import { BurgerMenu, Menu } from "@/components";
import { adventPro } from "@/fonts/fonts";

const menuLinkData = {
  left: [{
    id: 1,
    name: "Главная",
    href: "/"
  },
  {
    id: 2,
    name: "Обложки",
    href: "/"
  },
  {
    id: 3,
    name: "Иллюстрации",
    href: "/"
  }
  ],
  right: [
    {
      id: 4,
      name: "Обо мне",
      href: "/"
    },
    {
      id: 5,
      name: "Услуги",
      href: "/"
    },
    {
      id: 6,
      name: "Контакты",
      href: "/"
    }
  ]
};

export const Header = ({ ...props }: HeaderProps): JSX.Element => {
  return (<header className={cn(styles.header, adventPro.className)} {...props}>
    <div className={styles.fixedTop}>
      <div className={cn('container', styles.container)}>
        <Menu menu={menuLinkData} />
        <BurgerMenu menu={menuLinkData} />
      </div>
    </div>
    <div className={styles.plug}></div>
  </header>);
};
