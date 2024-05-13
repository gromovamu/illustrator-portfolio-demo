import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";

export interface ArrowButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    opt: 'left'|'right';   
}
