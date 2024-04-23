import { NextPrevBlockProps } from "./NextPrevBlock.props";
import styles from "./NextPrevBlock.module.css";
import cn from "classnames";
import Link from "next/link";
import NextIcon from "@/public/img/svg/navBtnNextIcon.svg";
import PrevIcon from "@/public/img/svg/navBtnPrevIcon.svg";
import { decorFont } from "@/fonts/fonts";

export const NextPrevBlock = ({ nextUrl, prevUrl, className, ...props }: NextPrevBlockProps): JSX.Element => {
  return (<div className={cn(styles.block, decorFont.className, className)} {...props}>
    <Link className={cn(styles.link, styles.prev)} href={prevUrl}>
      <PrevIcon className={styles.icon} />
      <span>Предыдущая работа</span>
    </Link>
    <Link className={cn(styles.link, styles.next)}  href={nextUrl}>
      <span>Следующая работа</span>
      <NextIcon className={styles.icon} />
    </Link>
  </div>
  );
};