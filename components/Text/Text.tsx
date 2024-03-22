import { TextProps } from "./Text.props";
import styles from "./Text.module.css";
import cn from "classnames";
import { textFont } from "@/fonts/fonts";

export const Text = ({ className, children, ...props }: TextProps): JSX.Element => {
    return <p className={cn(textFont.className, styles.text, className)}
        {...props}>
        {children}
    </p>;
};


