import { DetailedHTMLProps, ButtonHTMLAttributes } from "react";

export interface CoverBtnProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    srcImg: string;   
}
