'use client';

import { CoverSliderProps } from "./CoverSlider.props";
import styles from "./CoverSlider.module.css";
import cn from "classnames";

import 'keen-slider/keen-slider.min.css';
import { useKeenSlider } from 'keen-slider/react'; // import from 'keen-slider/react.es' for to get an ES module
//import { useState } from "react";
import { Cover } from "../Cover/Cover";
import { ArrowButton } from "@/components";

export const CoverSlider = ({ coverList, setActive, className, ...props }: CoverSliderProps): JSX.Element => {
  // const [loaded, setLoaded] = useState(false);
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    initial: 0,
    loop: true,
    mode: "snap",
    breakpoints: {
      "(min-width: 520px)": {
        slides: { perView: 3, spacing: 16 },
      },
      "(min-width: 860px)": {
        slides: { perView: 3, spacing: 30 },
      },
      "(min-width: 1000px)": {
        slides: { perView: 4, spacing: 30 },
      },
      "(min-width: 1200px)": {
        slides: { perView: 5, spacing: 30 },
      },
    },
    slides: { perView: 2, spacing: 16 },
    /* slideChanged(slider: KeenSliderInstance) {
       setCurrentSlide(slider.track.details.rel);
       console.log('slideChanged current' + slider.track.details.rel.toString());
     },
     created() {
       setLoaded(true);
       console.log("------------------------");
       console.log(sliderRef);
     }*/
  });

  //console.log(coverList);
  console.log(instanceRef);

  return (
    <div className={cn("slider-container", styles.container, className)} {...props}>
      <div className={cn("navigation-wrapper", styles.wrapper)}>
      <ArrowButton className={cn(styles.arrow, styles.left)}
          opt="left"
          onClick={() => instanceRef.current?.prev()}
        />

        <div ref={sliderRef} className="keen-slider">
          {coverList && coverList.map((cover, index) => (
            <Cover key={`cover_${cover.id}`} className="keen-slider__slide" num={cover.id} src={cover.url}
              onClick={() => setActive && setActive(cover.id, index)} />
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

/*TODO: не могу решить как задавать отстуа для стрелок слайдера, пока сделан абсолютно через px*/