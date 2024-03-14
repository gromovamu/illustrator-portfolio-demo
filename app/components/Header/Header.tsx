import { HeaderProps } from "./Header.props";
import styles from "./Header.module.css";
import cn from "classnames";
import { Menu } from "@/app/components";

export async function Header({ ...props}: HeaderProps): Promise<JSX.Element> { 
   
    return (<header className={styles.header} {...props}>       
        <div className={styles.fixedTop}>
            <div className={cn('container', styles.container)}>
                <Menu/>
            </div>
        </div>
        <div className={styles.plug}></div>
        </header>); 
}
