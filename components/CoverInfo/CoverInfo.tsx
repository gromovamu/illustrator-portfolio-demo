'use client';
import { CoverInfoProps } from "./CoverInfo.props";
import styles from "./CoverInfo.module.css";
import cn from "classnames";
import { CoverNavEvent, CoverSlider } from "@/components";
import { useEffect, useState } from "react";
import Image from 'next/image';
import { decorFont } from "@/fonts/fonts";
import { useRef } from 'react';

export const CoverInfo = ({ coversList, className, ...props }: CoverInfoProps): JSX.Element => {
  const [activeCover, setActiveCover] = useState(0);

  const setActiveById = (id: number) => {   
    const activeNum = coversList.findIndex((cover) => cover.id === id);
    setActiveCover((activeNum == -1) ? 0 : activeNum);
  };

  const imgBlockRef = useRef() as React.MutableRefObject<HTMLInputElement>;

  useEffect(() => {
    imgBlockRef && imgBlockRef.current.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'center'
    });
  }, [activeCover, imgBlockRef]);

  return (<div className={cn(styles.container, className)} ref={imgBlockRef}  {...props}>
    <CoverNavEvent setActive={setActiveById} />
    <div className={cn(styles.imgContainer)} >
      <Image className={styles.img}
        width={400}
        height={580}
        unoptimized
        src={coversList[activeCover]?.url ?? '/default.jpg'}
        alt='' />
    </div>
    {coversList[activeCover].tags && <ul className={cn(styles.tags, decorFont.className)}>
      {coversList[activeCover].tags?.map((tag, index) =>
        <li key={`tag_${index}`} className={styles.tag}>
          #{tag}
        </li>)}
    </ul>}
    <div className={cn(styles.tags, decorFont.className)}>activeCover = {activeCover}</div>
    <CoverSlider coverList={coversList} opt='btn' onClickHandler={setActiveCover} />
  </div>
  );
};


//      scrollId && document.getElementById(scrollId)?.scrollIntoView();