import { ArrowButtonProps } from "./ArrowButton.props";
import styles from "./ArrowButton.module.css";
import cn from "classnames";
import ArrorImg from "@/public/svg/navBtnPrevIcon.svg";

export const ArrowButton = ({ opt, className, ...props }: ArrowButtonProps): JSX.Element => {
    return (<button className={cn("btn", styles.button, className, {
        [styles.left]: opt == "left",
        [styles.right]: opt == "right",
    })} {...props}>
        <ArrorImg className={styles.svg} />
    </button>);
};

//TODO: возможно размеры стоит как-то задавать извне, чтобы компонент был более универсальный, обдумать