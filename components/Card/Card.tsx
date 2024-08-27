import { CardProps } from "./Card.props";
import styles from "./Card.module.css";
import cn from "classnames";
import Link from "next/link";
import ExportedImage from "next-image-export-optimizer";
import { decorFont } from "@/fonts/fonts";

export const Card = ({ data, isSeriaDecor,  src, href, className, ...props }: CardProps): JSX.Element => { 
  const isSeria = data.seriaId === null ? false : true;
  
  return (
    <Link className={cn(styles.card, decorFont.className, className,{
      [styles['seria-decor']]: isSeria && isSeriaDecor
    } )} href={href} {...props}
      aria-label={`Открыть страницу иллюстрации ${data.title}`}>
      <ExportedImage className={styles.img}
        width={420}
        height={420}
        sizes="(max-width: 520px) 380px, (max-width: 760px) 420px,  380px"
        src={src}
        alt='' />

      <div className={styles.descr}>
        <div className={styles.title}>
          {data.title}
        </div>

        {isSeria && (<>
          <div className={styles.series}>
            Серия
          </div>
          {data.seriaTitle && <div className={styles['series-title']}>
            {data.seriaTitle}
          </div>}
        </>)
        }
      </div>
    </Link>
  );
};

