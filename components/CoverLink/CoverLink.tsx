import { CoverLinkProps } from "./CoverLink.props";
import styles from "./CoverLink.module.css";
import cn from "classnames";
import Link from "next/link";
import Image from 'next/image';

export const CoverLink = ({ srcImg, url, className, ...props }: CoverLinkProps): JSX.Element => {
  return (
    <Link className={cn(styles.cover, className)}      
      href = {url??''}
      scroll={false}
      {...props}>
      
      <Image className={styles.img}
        width={210}
        height={305}
        unoptimized
        src={srcImg}
        alt='' />
    </Link>
  );
};


//TODO:unoptimized - в Image временно, пока не разберусь с загрузчиком в режиме export
// TODO: разобратьс с тем что писать/ не писать в alt
//href={{ pathname: '/covers', query: { num: num.toString() } }}