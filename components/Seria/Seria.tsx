"use client";
import { SeriaProps } from "./Seria.props";
import styles from "./Seria.module.css";
import cn from "classnames";
import { useEffect, useState } from "react";
import { ArrowButton, Button, Divider, IllustrationDetails, ImgButton, Modal, Text } from "@/components";
import { getPropertyInfoDetail, getSeriaInfoDetails } from "@/api/getData";
import { IllustrationData } from "@/interfaces";
import ExportedImage from "next-image-export-optimizer";

export const Seria = ({ ...props }: SeriaProps): JSX.Element => {
  const [isMobile, setIsMobile] = useState(false);

  const onResize = () => {
    setIsMobile(window.innerWidth <= 520);
  };

  useEffect(() => {
    onResize();
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (isMobile ? (<SeriaMobile  {...props} />) :
    (<SeriaDesktop  {...props} />));
};

//------------------------------------------------------------------------------------------------

export const SeriaDesktop = ({ seria, illustrationDataList, className, ...props }: SeriaProps): JSX.Element => {
  const [activeImgIndex, setActiveImgIndex] = useState(0);
  const [isOpenModal, setIsOpenModal] = useState(false);

  const openModal = (i: number) => { setIsOpenModal(!isOpenModal); setActiveImgIndex(i); };
  const seriaDetail = getSeriaInfoDetails(seria);


  const onClick = (activeImgNum: number) => {
    openModal(activeImgNum);
  };

  const getAriaLabel = (img: IllustrationData) => {
    return `Увеличить иллюстрацию ${getPropertyInfoDetail("Название", img.details)}`;
  };

  return (
    <div className={cn(styles.seria, className)} {...props}>

      <IllustrationDetails className={styles.detail} data={seriaDetail} />
      <Divider />

      <div className={styles.container}>
        {illustrationDataList.map((img, i) => (
          <ImgButton key={`${seria.id}_${i}`}
            className={styles.card}
            imgUrl={img.url}
            alt={getPropertyInfoDetail("Название", img.details)}
            onClick={() => onClick(i)}
            aria-label={getAriaLabel(img)}
          />
        ))}
      </div>

      <Modal isOpen={isOpenModal} setIsOpen={setIsOpenModal}>
        <div className={styles["modal-container"]}>
          <Text className={styles.title}>{
            getPropertyInfoDetail("Название", illustrationDataList[activeImgIndex].details)
          } </Text>

          <ExportedImage className={styles.img}
            width={512}
            height={512}
            sizes="(max-width: 420px) 380px, 512px"
            priority
            src={illustrationDataList[activeImgIndex].url}
            alt=''
          />
        </div>

      </Modal>
    </div>
  );
};

//------------------------------------------------------------------------------------------------
const SeriaMobile = ({ seria, illustrationDataList, className, ...props }: SeriaProps): JSX.Element => {
  const [activeImgIndex, setActiveImgIndex] = useState(0);
  const seriaDetail = getSeriaInfoDetails(seria); 

  const onClick = (activeImgNum: number) => {
    let temp = activeImgNum;
    switch (activeImgNum) {
      case -1: temp = 0; break;
      case illustrationDataList.length: temp = 0; break;
    }
    setActiveImgIndex(temp);
  };

  const onClickImg = () => {
    const next = activeImgIndex + 1;
    setActiveImgIndex((next >= illustrationDataList.length) ? 0 : next);
  };

  const getAriaLabel = (img: IllustrationData) => {
    return `Выбрать иллюстрацию ${getPropertyInfoDetail("Название", img.details)}`;
  };

  return (
    <div className={cn(styles.seria, className)} {...props}>
      <div className={styles.data}>

        <IllustrationDetails data={[...seriaDetail, ...illustrationDataList[activeImgIndex].details]} />

        <div className={styles["img-btn-block"]}>
          <button className={cn("btn", styles["img-btn"])}
            onClick={onClickImg}>
            <ExportedImage className={styles.img}
              width={512}
              height={512}
              sizes="(max-width: 420px) 380px, 512px"
              priority
              src={illustrationDataList[activeImgIndex].url}
              alt=''
              aria-label='Следующая иллюстрация'
            />
          </button>

          <ArrowButton className={cn(styles.arrow, styles.left)}
            opt="left"
            onClick={() => onClick(activeImgIndex - 1)}
            aria-label="Предыдущая иллюстрация" />
          <ArrowButton className={cn(styles.arrow, styles.right)}
            opt="right"
            onClick={() => onClick(activeImgIndex + 1)}
            aria-label="Следующая иллюстрация" />
        </div>
      </div>

      <div className={styles["btn-container"]}>
        {illustrationDataList.map((img, i) => (
          <Button key={`btn_${seria.id}_${i}`}
            className={cn(styles.btn, {
              [
                styles.active]: activeImgIndex === i
            })}
            aria-label={getAriaLabel(img)}
            onClick={() => onClick(i)}>{i + 1}</Button>
        ))}
      </div>
    </div>
  );
};
