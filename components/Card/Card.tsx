import { CardProps } from "./Card.props";
import styles from "./Card.module.css";
import cn from "classnames";
import Link from "next/link";
import ExportedImage from "next-image-export-optimizer";
import { decorFont } from "@/fonts/fonts";

export const Card = ({ title, seria, src, href, className, ...props }: CardProps): JSX.Element => {
  return (
    <Link className={cn(styles.card, decorFont.className, className)} href={href} {...props}>
      <ExportedImage className={styles.img}
        width={420}
        height={420}  
        sizes="(max-width: 520px) 380px, (max-width: 760px) 420px,  380px"      
        src={src}
        alt={href} />

      <div className={styles.descr}>
        <div className={styles.title}>
          {title}
        </div>

        {seria && (<div className={styles.series}>
          Серия
        </div>)
        }
      </div>     
    </Link>
  );
};


//TODO:unoptimized - в Image временно, пока не разберусь с загрузчиком в режиме export