import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";

export interface BurgerButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>{  
    isOpenMode: boolean;
    setIsOpenMode: (value: boolean) => void;
}