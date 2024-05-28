import { CoverBtnProps } from "./CoverBtn.props";
//import styles from "./CoverBtn.module.css";
import styles from "../CoverLink/CoverLink.module.css";
import cn from "classnames";
import Image from 'next/image';

export const CoverBtn = ({ srcImg, className, ...props }: CoverBtnProps): JSX.Element => {
  return (
    <button className={cn("btn", styles.cover, className)} {...props}>      
      <Image className={styles.img}
        width={210}
        height={305}
        unoptimized
        src={srcImg}
        alt='' />
    </button>
  );
};

//TODO: размер изображений, переделать!!! 
//TODO:unoptimized - в Image временно, пока не разберусь с загрузчиком в режиме export
//TODO: подпись для aria атрибутов