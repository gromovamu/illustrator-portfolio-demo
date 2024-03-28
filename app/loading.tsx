import styles from './loading.module.css';
import LogoIcon from '@/components/Logo/logoIcon.svg';
import { decorFont } from "@/fonts/fonts";
import cn from "classnames";

export default function Loadding() {
    return (<div className={styles.container}>
        <LogoIcon className={styles.img}/>
    <span className={cn(decorFont,styles.load)}>
         Загрузка...
    </span>
   
    </div>);
}