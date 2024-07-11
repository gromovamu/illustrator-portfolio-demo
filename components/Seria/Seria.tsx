'use client';
import { SeriaProps } from "./Seria.props";
import styles from "./Seria.module.css";
import cn from "classnames";
import { useState } from "react";
import { ArrowButton, Button, IllustrationDetails, ImgButton } from "@/components";
import { getPropertyInfoDetail, getSeriaInfoDetails } from "@/api/getData";
import { IllustrationData } from "@/interfaces";

export const Seria = ({ seria, illustrationDataList, className, ...props }: SeriaProps): JSX.Element => {
  const coverIndex = illustrationDataList.findIndex(item => item.id === seria.illustrationId);
  const [activeImg, setActiveImg] = useState(coverIndex === -1 ? 0 : coverIndex);

  const seriaDetail = getSeriaInfoDetails(seria);

  const getData = (index: number) => {
    const infoObj = illustrationDataList[index];
    return { id: infoObj.id, url: infoObj.url, details: [...seriaDetail, ...infoObj.details] };
  };

  const onClick = (activeImgNum: number) => {
    setActiveImg(activeImgNum);
    if (window.innerWidth > 520) {
      window.scrollTo(0, 0);
    }
  };
  const getAriaLabel = (img: IllustrationData) => `Выбрать иллюстрацию ${getPropertyInfoDetail('Название', img.details)}`;


  return (
    <div className={cn(styles.seria, className)} {...props}>
      <div className={styles.data}>
        <IllustrationDetails data={getData(activeImg)} nav={true}>
          <ArrowButton className={cn(styles.arrow, styles.left)}
            opt="left"
            onClick={() => onClick(activeImg - 1)}
            disabled={activeImg === 0}
            aria-label="Предыдущая иллюстрация" />
          <ArrowButton className={cn(styles.arrow, styles.right)}
            opt="right"
            onClick={() => onClick(activeImg + 1)}
            disabled={activeImg === (illustrationDataList.length - 1)} 
            aria-label="Следующая иллюстрация"/>
        </IllustrationDetails>
      </div>

      <div className={styles.container}>
        {illustrationDataList.map((img, i) => (
          <ImgButton key={`${seria.id}_${i}`}
            className={styles.card}
            imgUrl={img.url}
            alt={getPropertyInfoDetail('Название', img.details)}
            onClick={() => onClick(i)}
            aria-label={getAriaLabel(img)}
            />
        ))}
      </div>

      <div className={styles.btnContainer}>
        {illustrationDataList.map((img, i) => (
          <Button key={`btn_${seria.id}_${i}`}
            className={cn(styles.btn, {
              [
              styles.active]: activeImg === i
            })}
            aria-label={getAriaLabel(img)}
            onClick={() => onClick(i)}>{i + 1}</Button>
        ))}
      </div>
    </div>
  );
};
