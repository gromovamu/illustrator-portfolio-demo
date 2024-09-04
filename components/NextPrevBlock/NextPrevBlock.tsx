import { NextPrevBlockProps } from "./NextPrevBlock.props";
import styles from "./NextPrevBlock.module.css";
import cn from "classnames";
import Link from "next/link";
import NextIcon from "@/public/svg/navBtnNextIcon.svg"; 
import PrevIcon from "@/public/svg/navBtnPrevIcon.svg";
import { decorFont } from "@/fonts/fonts";

export const NextPrevBlock = ({ urlData, className, ...props }: NextPrevBlockProps): JSX.Element => {
  const getText = (url:string) => url.includes('seria')?'серия':'работа';
  const prevUrl = urlData.prev??'';
  const nextUrl = urlData.next??'';

  return (<div className={cn(styles.block, decorFont.className, className)} {...props}>
    <Link className={cn(styles.link, styles.prev, {
      [styles.disable]: urlData.prev === null
    })} href={prevUrl}>
      <PrevIcon className={styles.icon} />
      <span>{`Предыдущая ${getText(prevUrl)}`}</span>
    </Link>    
    <Link className={cn(styles.link, styles.next, {
      [styles.disable]: urlData.next === null
    })} href={nextUrl}>
      <span>{`Следующая ${getText(nextUrl)}`}</span>
      <NextIcon className={styles.icon} />
    </Link>
  </div>
  );
};