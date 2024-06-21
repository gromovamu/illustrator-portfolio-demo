import { IllustrationDetailsProps } from "./IllustrationDetails.props";
import styles from "./IllustrationDetails.module.css";
import cn from "classnames";
//import Image from 'next/image';
import { decorFont, textFont } from "@/fonts/fonts";
import ExportedImage from "next-image-export-optimizer";

export const IllustrationDetails = ({ data, nav, children, className, ...props }: IllustrationDetailsProps): JSX.Element => {
  return (
    <div className={cn(styles.info, className)} {...props}>
      <div className={styles.container}>
        <ExportedImage className={styles.img}
          width={512}
          height={512}    
          sizes="(max-width: 420px) 380px, 512px" 
          priority     
          src={data.url}
          alt='' />
          {nav==true && children}
      </div>

      <ul className={cn(styles.properties)}>
        {
          data && data.details.filter(detail => detail.data !== '').map((detail, i) =>(
            <li className={styles.property} key={`${data.id}_prop_${i}`}>             
              <p className={cn(styles.name, decorFont.className)}>
                {detail.name}:
              </p>

              <p className={cn(styles.data, {
                [styles.decor]: detail.type == 'decor',
                [decorFont.className]: detail.type == 'decor',
                [styles.text]: detail.type == 'text',
                [textFont.className]: detail.type == 'text',
              })}>
                {detail.data}
              </p>
            </li>
          ))
        }
      </ul>
    </div>
  );
};


//TODO:unoptimized - в Image временно, пока не разберусь с загрузчиком в режиме export