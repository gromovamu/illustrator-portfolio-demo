'use client';

import { CoverSliderProps } from "./CoverSlider.props";
import styles from "./CoverSlider.module.css";
import cn from "classnames";

import 'keen-slider/keen-slider.min.css';
import { useKeenSlider } from 'keen-slider/react';
import { ArrowButton, Cover, CoverBtn, Modal } from "@/components";
import { useState } from "react";
import { useReducedMotion } from "@react-spring/web";

const animation = { duration: 25000, easing: (t: number) => t };


export const CoverSlider = ({ coverList, className, ...props }: CoverSliderProps): JSX.Element => {
  const [loaded, setLoaded] = useState(false);
  const [isHover, setIsHover] = useState(false);
  const reducedMotion = useReducedMotion(); //чтобы учесть если у пользователя включено уменьшение движения
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [activeCoverIndex, setActiveCoverIndex] = useState(0);

  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    initial: 0,
    loop: true,
    mode: "free-snap",
    breakpoints: {
      "(min-width: 520px)": {
        slides: { perView: 3, spacing: 16 },
      },
      "(min-width: 860px)": {
        slides: { perView: 4, spacing: 30 },
      },
      "(min-width: 1000px)": {
        slides: { perView: 5, spacing: 30 },
      },
      "(min-width: 1200px)": {
        slides: { perView: 6, spacing: 30 },
      },
    },
    slides: { perView: 2, spacing: 16 },
    created() {
      setLoaded(true);
    },
    animationEnded(ref) {
      isHover && ref.moveToIdx(ref.track.details.abs + 5, true, animation);
    },
  });

  return (
    <>
    {((coverList) && (coverList.length!==0)) && <div className={cn("slider-container", styles.container, className)}
      {...props}>
      <div className="screenreader">Слайдер с обложками</div>
      <div className={cn("navigation-wrapper", styles.wrapper, 
              { [styles.wait]: !loaded })}>
        <ArrowButton className={cn(styles.arrow, styles.left)}
          opt="left"
          onClick={() => instanceRef.current?.prev()}
          aria-label="Предыдущий слайд"
        />
        <div ref={sliderRef} className={cn("keen-slider", styles.slider)}
          onMouseEnter={() => {
            if (reducedMotion !== true) {
              instanceRef.current?.moveToIdx(instanceRef.current.track.details.abs + 5, true, animation);
              setIsHover(true);
            }
          }}
          onMouseLeave={() => {
            if (reducedMotion !== true) {
              setIsHover(false);
              instanceRef.current?.animator.stop();
            }
          }}>
          {coverList.map((cover, i) => (
            <CoverBtn key={`cMi_${cover.id}`} 
              className={cn("keen-slider__slide",
              { [styles.hidden]: !loaded })}
              onClick={() => { setIsOpenModal(!isOpenModal); setActiveCoverIndex(i);}}
              onFocus={()=> {
                const distance = instanceRef.current?.track?.details?.slides[i]?.distance;
                (distance && (distance < 0)) &&
                 instanceRef.current?.moveToIdx(i,false);
                }} 
              aria-label={`Открыть окно с увеличенным изображением обложки ${cover.title}`}
              srcImg = {cover.url}/> 
          ))}
        </div>

        <ArrowButton className={cn(styles.arrow, styles.right)}
          opt="right"
          onClick={() => instanceRef.current?.next()}
          aria-label="Следующий слайд"
        />
      </div>
    </div>}

    <Modal isOpen={isOpenModal} setIsOpen={setIsOpenModal}>        
          <Cover url={coverList[activeCoverIndex]?.url}/>
    </Modal>
    </>
  );
};
