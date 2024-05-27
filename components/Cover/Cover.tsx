import { CoverProps } from "./Cover.props";
import styles from "./Cover.module.css";
import cn from "classnames";
import Link from "next/link";
import Image from 'next/image';

export const Cover = ({ src, className, num, ...props }: CoverProps): JSX.Element => {
  return (
    <Link className={cn(styles.cover, className)}      
      href = {{ pathname: '/covers', query: { num: num.toString() } }}
      scroll={false}
      {...props}>
      
      <Image className={styles.img}
        width={210}
        height={305}
        unoptimized
        src={src}
        alt='' />
    </Link>
  );
};


//TODO:unoptimized - в Image временно, пока не разберусь с загрузчиком в режиме export
// TODO: разобратьс с тем что писать/ не писать в alt
//href={{ pathname: '/covers', query: { num: num.toString() } }}