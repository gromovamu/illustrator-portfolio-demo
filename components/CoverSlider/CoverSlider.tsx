'use client';

import { CoverSliderProps } from "./CoverSlider.props";
import styles from "./CoverSlider.module.css";
import cn from "classnames";

import 'keen-slider/keen-slider.min.css';
import { useKeenSlider } from 'keen-slider/react';
import { ArrowButton } from "@/components";
import ExportedImage from "next-image-export-optimizer";
import { useState } from "react";

export const CoverSlider = ({ coverList, className, ...props }: CoverSliderProps): JSX.Element => {
  const [loaded, setLoaded] = useState(false);

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
    }
  }); 

  return (
    <div className={cn("slider-container", styles.container, className)} {...props}>
      <div className={cn("navigation-wrapper", styles.wrapper)}>
        <ArrowButton className={cn(styles.arrow, styles.left)}
          opt="left"
          onClick={() => instanceRef.current?.prev()}
        />
        <div ref={sliderRef} className={cn("keen-slider", styles.slider)}>
          {coverList && coverList.map((cover) => (
            <div key={`cMi_${cover.id}`} className={cn("keen-slider__slide", styles.cover,
              { [styles.hidden]: !loaded })}>
              <ExportedImage className={styles.img}
                width={210}
                height={305}
                src={cover.url}
                alt='' />
            </div>
          ))}
        </div>

        <ArrowButton className={cn(styles.arrow, styles.right)}
          opt="right"
          onClick={() => instanceRef.current?.next()}
        />
      </div>
    </div>
  );
};

// При генерации обложек ссылок используется идентификатор обложки,
//TODO: не могу решить как задавать отстуа для стрелок слайдера, пока сделан абсолютно через px


/* анимация для слайдера, все работает, но мне почему-то не нравится
оставляю на случай, если передумаю

  const animation = { duration: 40000, easing: (t: number) => t };
  ..
    drag: false,
created(s) {
  setLoaded(true);
  s.moveToIdx(5, true, animation);
},
updated(s) {
  s.moveToIdx(s.track.details.abs + 5, true, animation);
},
animationEnded(s) {
  s.moveToIdx(s.track.details.abs + 5, true, animation);
},*/