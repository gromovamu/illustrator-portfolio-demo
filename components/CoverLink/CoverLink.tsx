import { CoverLinkProps } from "./CoverLink.props";
import styles from "./CoverLink.module.css";
import cn from "classnames";
import Link from "next/link";
import ExportedImage from "next-image-export-optimizer";

export const CoverLink = ({ srcImg, url, className, ...props }: CoverLinkProps): JSX.Element => {
  return (
    <Link className={cn(styles.cover, className)}      
      href = {url??''}
      scroll={false}
      {...props}>
      
      <ExportedImage className={styles.img}
        width={210}
        height={305}        
        src={srcImg}
        alt='' />
    </Link>
  );
};

// TODO: разобратьс с тем что писать/ не писать в alt
//href={{ pathname: '/covers', query: { num: num.toString() } }}