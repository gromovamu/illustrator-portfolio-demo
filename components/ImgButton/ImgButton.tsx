import { ImgButtonProps } from "./ImgButton.props";
import styles from "./ImgButton.module.css";
import cn from "classnames";
import Image from 'next/image';

export const ImgButton = ({ imgUrl, alt, className, ...props }: ImgButtonProps): JSX.Element => {
    return (<button className={cn(styles.button, className)} aria-label='Отобразить информацию об иллюстрации' {...props}>
        <Image className={styles.img}
            width={512}
            height={512}
            unoptimized
            src={imgUrl}
            alt={alt} />
    </button>);

};


//TODO: оптимизация изображений исправить!
