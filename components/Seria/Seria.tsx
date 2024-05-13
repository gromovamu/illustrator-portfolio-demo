'use client';
import { SeriaProps } from "./Seria.props";
import styles from "./Seria.module.css";
import cn from "classnames";
import { useState } from "react";
import { ArrowButton, IllustrationDetails, ImgButton } from "@/components";
import { getPropertyInfoDetail, getSeriaInfoDetails } from "@/api/getData";
import { useRef } from 'react';

export const Seria = ({ seria, illustrationDataList, className, ...props }: SeriaProps): JSX.Element => {
  const [activeSlide, setActiveSlide] = useState(0);
  const refData = useRef(null);

  const seriaDetail = getSeriaInfoDetails(seria);
  const getData = (index: number) => {
    const infoObj = illustrationDataList[index];
    return { url: infoObj.url, details: [...seriaDetail, ...infoObj.details] };
  };

  return (
    <div className={cn(styles.seria, className)} {...props}>
      <div className={styles.data} ref={refData}>
        <IllustrationDetails data={getData(activeSlide)} />
        <ArrowButton className={cn(styles.arrow, styles.left)}
          opt="left"
          onClick={() => setActiveSlide(activeSlide - 1)}
          disabled={activeSlide === 0} />
        <ArrowButton className={cn(styles.arrow, styles.right)}
          opt="right"
          onClick={() => setActiveSlide(activeSlide + 1)}
          disabled={activeSlide === (illustrationDataList.length - 1)} />
      </div>
      <div className={styles.container}>
        {illustrationDataList.map((img, i) => (
          <ImgButton key={`${seria.id}_${i}`}
            className={styles.card}
            imgUrl={img.url}
            alt={getPropertyInfoDetail('Название', img.details)}
            onClick={() => setActiveSlide(i)} />
        ))}
      </div>
    </div>
  );
};


/*<div className="navigation-wrapper">
        <div ref={sliderRef} className="keen-slider">
          {illustrationDataList.map((img, i) => (
            <ImgButton key={`${seria.id}_${i}`}
              className="keen-slider__slide"
              imgUrl={img.url} 
              onClick={() => setActiveSlide(i)}/>))}
        </div>
      </div>
      */

