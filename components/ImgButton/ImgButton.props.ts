import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";

export interface ImgButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
   imgUrl: string; 
   alt: string;   
}

