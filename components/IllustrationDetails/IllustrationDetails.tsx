import { IllustrationDetailsProps } from "./IllustrationDetails.props";
import styles from "./IllustrationDetails.module.css";
import cn from "classnames";
import Image from 'next/image';
import { decorFont, textFont } from "@/fonts/fonts";

export const IllustrationDetails = ({ data, className, ...props }: IllustrationDetailsProps): JSX.Element => {
  return (
    <div className={cn(styles.info, className)} {...props}>
      <div className={styles.container}>
        <Image className={styles.img}
          width={512}
          height={512}
          unoptimized
          src={data.url}
          alt='' />
      </div>

      <ul className={cn(styles.properties)}>
        {
          data && data.details.map(detail => (
            <li className={styles.property} key={detail.name}>
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