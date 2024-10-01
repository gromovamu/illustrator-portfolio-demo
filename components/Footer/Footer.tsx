import { FooterProps } from "./Footer.props";
import styles from "./Footer.module.css";
import cn from "classnames";
import { decorFont } from "@/fonts/fonts";
import { SocialLink } from "@/components";


export const Footer = ({ socialLinkList, className, ...props }: FooterProps): JSX.Element => {
    const nowDate = new Date();   
    return (
        <footer className={cn("container", styles.footer, className)}
            {...props}>
            <ul className={styles.socialList}>
                {socialLinkList && socialLinkList.map(link => (
                    <li key={link.type} className={styles.socialItem}>
                       <SocialLink type={link.type} href={link.src}/>
                    </li>
                ))}
            </ul>
            <div className={cn(decorFont.className, styles.copy)}> &copy;&nbsp;Громова М.Ю.,&nbsp;
                <span className={styles.year}>2021&nbsp;&mdash;&nbsp;{nowDate.getFullYear()}</span>
            </div>
        </footer>);
};

