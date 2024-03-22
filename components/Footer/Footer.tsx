import { FooterProps } from "./Footer.props";
import styles from "./Footer.module.css";
import cn from "classnames";
import { adventPro } from "@/fonts/fonts";
import { SocialLink } from "@/components";


export const Footer = ({ socialLinkList, className, ...props }: FooterProps): JSX.Element => {
    const nowDate = new Date();
    console.log(socialLinkList);
    return (
        <footer className={cn(styles.footer, className)}
            {...props}>
            <ul className={styles.socialList}>
                {socialLinkList && socialLinkList.map(link => (
                    <li key={link.type} className={styles.socialItem}>
                       <SocialLink type={link.type} href={link.src}/>
                    </li>
                ))}
            </ul>
            <div className={cn(adventPro.className, styles.copy)}> &copy;&nbsp;Громова М.Ю.,&nbsp;
                <span className={styles.year}>2021&nbsp;&mdash;&nbsp;{nowDate.getFullYear()}</span>
            </div>
        </footer>);
};

/* */