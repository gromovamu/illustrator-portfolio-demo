'use client';
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
  useEffect(() => {
    setIsMobile(window.innerWidth <= 520);
  }, []);
  return isMobile ? (<SeriaMobile {...props} />) :
    (<SeriaDesktop {...props} />);
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
    return `Увеличить иллюстрацию ${getPropertyInfoDetail('Название', img.details)}`;
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
            alt={getPropertyInfoDetail('Название', img.details)}
            onClick={() => onClick(i)}
            aria-label={getAriaLabel(img)}
          />
        ))}
      </div>

      <Modal isOpen={isOpenModal} setIsOpen={setIsOpenModal}>
        <div className={styles['modal-container']}>            
          <Text className={styles.title}>{
            getPropertyInfoDetail('Название', illustrationDataList[activeImgIndex].details)
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
    setActiveImgIndex(activeImgNum + 1);
  };

  const getAriaLabel = (img: IllustrationData) => {
    return `Выбрать иллюстрацию ${getPropertyInfoDetail('Название', img.details)}`;
  };

  return (
    <div className={cn(styles.seria, className)} {...props}>
      <div className={styles.data}>

        <IllustrationDetails data={seriaDetail} />

        <button className={cn('btn', styles['img-btn'])}>
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
          disabled={activeImgIndex === 0}
          aria-label="Предыдущая иллюстрация" />
        <ArrowButton className={cn(styles.arrow, styles.right)}
          opt="right"
          onClick={() => onClick(activeImgIndex + 1)}
          disabled={activeImgIndex === (illustrationDataList.length - 1)}
          aria-label="Следующая иллюстрация" />
      </div>

      <div className={styles['btn-container']}>
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


/*
  <div className={styles.data}>
        <IllustrationDetails data={getData(activeImgIndex)} nav={true}>
          <ArrowButton className={cn(styles.arrow, styles.left)}
            opt="left"
            onClick={() => onClick(activeImgIndex - 1)}
            disabled={activeImgIndex === 0}
            aria-label="Предыдущая иллюстрация" />
          <ArrowButton className={cn(styles.arrow, styles.right)}
            opt="right"
            onClick={() => onClick(activeImgIndex + 1)}
            disabled={activeImgIndex === (illustrationDataList.length - 1)} 
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
              styles.active]: activeImgIndex === i
            })}
            aria-label={getAriaLabel(img)}
            onClick={() => onClick(i)}>{i + 1}</Button>
        ))}
      </div>*/