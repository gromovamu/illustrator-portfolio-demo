import { NextPrevBlockProps } from "./NextPrevBlock.props";
import styles from "./NextPrevBlock.module.css";
import cn from "classnames";
import Link from "next/link";
import NextIcon from "@/public/svg/navBtnNextIcon.svg"; 
import PrevIcon from "@/public/svg/navBtnPrevIcon.svg";
import { decorFont } from "@/fonts/fonts";

export const NextPrevBlock = ({ urlData, className, ...props }: NextPrevBlockProps): JSX.Element => {
  return (<div className={cn(styles.block, decorFont.className, className)} {...props}>
    <Link className={cn(styles.link, styles.prev, {
      [styles.disable]: urlData.prev === null
    })} href={urlData.prev??''}>
      <PrevIcon className={styles.icon} />
      <span>Предыдущая работа</span>
    </Link>    
    <Link className={cn(styles.link, styles.next, {
      [styles.disable]: urlData.next === null
    })} href={urlData.next??''}>
      <span>Следующая работа</span>
      <NextIcon className={styles.icon} />
    </Link>
  </div>
  );
};