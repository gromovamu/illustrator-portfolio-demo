import { CoverBtnProps } from "./CoverBtn.props";
import styles from "./CoverBtn.module.css";
//import styles from "../CoverLink/CoverLink.module.css";
import cn from "classnames";
import ExportedImage from "next-image-export-optimizer";

export const CoverBtn = ({ srcImg, className, ...props }: CoverBtnProps): JSX.Element => {
  return (
    <button className={cn("btn", styles.cover, className)} {...props}>      
      <ExportedImage className={styles.img}
        width={210}
        height={305}  
        priority={true}   
        src={srcImg}
        alt='' 
        />
    </button>
  );
};

//TODO: подпись для aria атрибутов