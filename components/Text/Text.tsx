import { TextProps } from "./Text.props";
import styles from "./Text.module.css";
import cn from "classnames";

export const Text = ({ className, children, ...props }: TextProps): JSX.Element => {
    return <p className={cn(styles.text, className)}
        {...props}>
        {children}
    </p>;
};


