

import { CoverProps } from "./Cover.props";
import styles from "./Cover.module.css";
import cn from "classnames";
import ExportedImage from "next-image-export-optimizer";

export const Cover = ({ url, className, ...props }: CoverProps): JSX.Element => {
  return <div className={cn(className, styles.container)} {...props}>
       <ExportedImage className={styles.img}
                width={400}
                height={582}
                src={url}
                sizes="(max-width: 520px) 380px, 400px"  
                alt='' />
  </div>;
};

//TODO: поправить размеры на 600
