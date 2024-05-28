'use client';

import { CoverSliderProps } from "./CoverSlider.props";
import styles from "./CoverSlider.module.css";
import cn from "classnames";

import 'keen-slider/keen-slider.min.css';
import { useKeenSlider } from 'keen-slider/react'; 
import { CoverBtn, CoverLink } from "@/components";
import { ArrowButton } from "@/components";

export const CoverSlider = ({ coverList, opt, getUrl, onClickHandler, className, ...props }: CoverSliderProps): JSX.Element => {
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
  });

  return (
    <div className={cn("slider-container", styles.container, className)} {...props}>
      <div className={cn("navigation-wrapper", styles.wrapper)}>
        <ArrowButton className={cn(styles.arrow, styles.left)}
          opt="left"
          onClick={() => instanceRef.current?.prev()}
        />

        <div ref={sliderRef} className="keen-slider">
          {(coverList && opt == 'link') && coverList.map((cover) => (
            <CoverLink key={`cl_${cover.id}`} className="keen-slider__slide"
              srcImg={cover.url} url={getUrl&&getUrl(cover.id)}
               />
          ))} 

          {(coverList && opt == 'btn') && coverList.map((cover, index) => (
            <CoverBtn key={`cb_${cover.id}`} className="keen-slider__slide"
            srcImg={cover.url}
              onClick={() => onClickHandler && onClickHandler(index)} />
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
//  а при генерации кнопок для обработчика используется порядковый номер в массиве

/*TODO: не могу решить как задавать отстуа для стрелок слайдера, пока сделан абсолютно через px*/