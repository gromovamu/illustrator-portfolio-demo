import { SocialLinkProps } from "./SocialLink.props";
import styles from "./SocialLink.module.css";
import cn from "classnames";
import Link from "next/link";
import BeIcon from "@/public/svg/behanceIcon.svg";
import TelIcon from "@/public/svg/telegramIcon.svg";
import VkIcon from "@/public/svg/vkIcon.svg";


export const SocialLink = ({ type, href, className, ...props }: SocialLinkProps): JSX.Element => {
  const getIcon = () => {
    switch (type) {
      case 'vk': return <VkIcon className={styles.icon}/>;
      case 'be': return <BeIcon className={styles.icon}/>;
      case 'tel': return <TelIcon className={styles.icon}/>;
      default: <></>;
    }
  };

  return (
    <Link href={href} className={cn(styles.link, className)} target="_blank" {...props}>
      {getIcon()}
    </Link>
  );
};