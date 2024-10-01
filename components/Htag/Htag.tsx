import { HTagProps } from "./Htag.props";
import styles from "./Htag.module.css";
import cn from "classnames";
import { decorFont } from "@/fonts/fonts";

/*info: В данном проекте, главный заголовок скрыт */

export const Htag = ({tag, opt, children, className}: HTagProps): JSX.Element => {   
    const titleClassNames = () => cn(decorFont.className, styles.title, className, {
        [styles.big] : opt == "big",
        [styles.medium] : opt == "medium",
        [styles.small] : opt == "small"               
    });

    switch(tag) {
        case "h1":
            return <h1 className={cn(styles.disable)}>{children}</h1>;
        case "h2":
            return <h2 className={titleClassNames()}>{children}</h2>;
        case "h3":
            return <h3 className={titleClassNames()}>{children}</h3>;
            default:
                return <></>;
    }
};