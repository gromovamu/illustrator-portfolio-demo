'use client';
import { CoverInfoProps } from "./CoverInfo.props";
import styles from "./CoverInfo.module.css";
import cn from "classnames";
import { CoverBtn, CoverNavEvent } from "@/components";
import { useState } from "react";
import ExportedImage from "next-image-export-optimizer";
import { decorFont } from "@/fonts/fonts";

export const CoverInfo = ({ coversList, className, ...props }: CoverInfoProps): JSX.Element => {
  const [activeCover, setActiveCover] = useState(0);

  const setActiveById = (id: number) => {   
    const activeNum = coversList.findIndex((cover) => cover.id === id);
    setActiveCover((activeNum == -1) ? 0 : activeNum);
  };

  return (<div className={cn(styles.container, className)} {...props}>
    <CoverNavEvent setActive={setActiveById} />
    <div className={cn(styles.mainBlock)}>
      <div className={cn(styles.imgContainer)} >
        <ExportedImage className={styles.img}
          width={400}
          height={580}          
          src={coversList[activeCover]?.url}
          alt='' />
      </div>
      {coversList[activeCover].tags && <ul className={cn(styles.tags, decorFont.className)}>
        {coversList[activeCover].tags?.map((tag, index) =>
          <li key={`tag_${index}`} className={styles.tag}>
            #{tag}
          </li>)}
      </ul>}
    </div> 

    <ul className={cn("list", styles.list)}>
       {coversList&&coversList.map((cover, index) => <li key={`cbtn_${cover.id}`} className={styles.item}>
        <CoverBtn srcImg={cover.url} onClick={() => setActiveCover(index)}/>
       </li> )}
    </ul>
  </div>
  );
};
