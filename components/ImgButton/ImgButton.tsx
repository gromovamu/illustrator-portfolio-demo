import { ImgButtonProps } from "./ImgButton.props";
import styles from "./ImgButton.module.css";
import cn from "classnames";
import ExportedImage from "next-image-export-optimizer";

export const ImgButton = ({ imgUrl, alt, className, ...props }: ImgButtonProps): JSX.Element => {
    return (<button className={cn(styles.button, className)} aria-label='Выбрать иллюстрацию' {...props}>
        <ExportedImage className={styles.img}
            width={380}
            height={3802}            
            src={imgUrl}
            alt={alt} />
    </button>);

};


//TODO: оптимизация изображений исправить!
