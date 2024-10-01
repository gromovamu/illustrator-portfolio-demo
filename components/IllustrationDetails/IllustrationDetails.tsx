"use client";

import { IllustrationDetailsProps } from "./IllustrationDetails.props";
import styles from "./IllustrationDetails.module.css";
import cn from "classnames";
import { decorFont, textFont } from "@/fonts/fonts";

export const IllustrationDetails = ({ data,  className, ...props }: IllustrationDetailsProps): JSX.Element => {
  const detailArr = data.filter(detail => detail.data !== "");

   return (   
      <ul className={cn(styles.properties, className)} {...props}>
        {
          detailArr && detailArr.map((detail, i) => (
            <li className={styles.property} key={`detail_${i}`}> 
              <p className={cn(styles.name, decorFont.className)}>
                {detail.name}:
              </p>

              <p className={cn(styles.data, {
                [styles.decor]: detail.type == "decor",
                [decorFont.className]: detail.type == "decor",
                [styles.text]: detail.type == "text",
                [textFont.className]: detail.type == "text",
              })}>
                {detail.data}
              </p>
            </li>
          ))
        }
      </ul>   
  );
};
