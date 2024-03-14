import { LogoProps } from "./Logo.props";
import styles from "./Logo.module.css";
import cn from "classnames";
import LogoIcon from "./logoIcon.svg";
import Link from "next/link";

export const Logo = ({isLink, className}: LogoProps): JSX.Element => {
    if (isLink) {
        return (
            <Link href="/" className={cn(styles.link, className)}>
                <LogoIcon className={cn(styles.icon)}/>
            </Link>
            );
    }
    return  <LogoIcon className={cn(styles.icon, styles.img, className)} />;       
};