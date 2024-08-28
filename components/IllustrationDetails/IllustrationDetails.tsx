'use client';

import { IllustrationDetailsProps } from "./IllustrationDetails.props";
import styles from "./IllustrationDetails.module.css";
import cn from "classnames";
import { decorFont, textFont } from "@/fonts/fonts";

export const IllustrationDetails = ({ data,  className, ...props }: IllustrationDetailsProps): JSX.Element => {
  const detailArr = data.filter(detail => detail.data !== '');

   return (   
      <ul className={cn(styles.properties, className)} {...props}>
        {
          detailArr && detailArr.map((detail, i) => (
            <li className={styles.property} key={`detail_${i}`}> 
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
  );
};


/*return (
    <div className={cn(styles.info, className)} {...props}>
      <div className={styles.container}>
        <ExportedImage className={styles.img}
          width={512}
          height={512}
          sizes="(max-width: 420px) 380px, 512px"
          priority
          src={data.url}
          alt='' 
          />
        {nav == true && children}
      </div>

      <ul className={cn(styles.properties)}>
        {
          detailArr && detailArr.map((detail, i) => (
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
};*/