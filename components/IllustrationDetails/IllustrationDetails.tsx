'use client';

import { IllustrationDetailsProps } from "./IllustrationDetails.props";
import styles from "./IllustrationDetails.module.css";
import cn from "classnames";
//import Image from 'next/image';
import { decorFont, textFont } from "@/fonts/fonts";
import ExportedImage from "next-image-export-optimizer";
import { animated, easings, useSpring, useTrail } from "@react-spring/web";
import { useEffect } from "react";

export const IllustrationDetails = ({ data, nav, children, className, ...props }: IllustrationDetailsProps): JSX.Element => {
  const detailArr = data.details.filter(detail => detail.data !== '');

  const [springs, api] = useTrail(detailArr.length, () => ({
    from: { opacity: 0 },
  }), []);

  const [imgStyle, imgApi] = useSpring( () => ({
    from: { opacity: 0, scale: 0.8},
  }), []);

  useEffect(() => {
    console.log('useEffect ');
    api.start({
      from: { opacity: 0 },
      to: { opacity: 1 },
      config: {
        duration: 100,
        easing: easings.easeInOutBounce
      }
    });    
    return;
  }, [api, data]);


  return (
    <div className={cn(styles.info, className)} {...props}>
      <animated.div className={styles.container} style={imgStyle}>
        <ExportedImage className={styles.img}
          width={512}
          height={512}
          sizes="(max-width: 420px) 380px, 512px"
          priority
          src={data.url}
          alt='' 
          onLoad={()=> {
            imgApi.start({
            from: { opacity: 0.8, scale: 0.8},
            to: { opacity: 1, scale: 1},                
            config: {
              duration: 300,  
              easing: easings.easeOutSine          
            }
          });
          }}/>
        {nav == true && children}
      </animated.div>

      <ul className={cn(styles.properties)}>
        {
          detailArr && detailArr.map((detail, i) => (
            <animated.li className={styles.property} key={`${data.id}_prop_${i}`}
              style={springs[i]}
            >
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
            </animated.li>
          ))
        }
      </ul>
    </div>
  );
};

