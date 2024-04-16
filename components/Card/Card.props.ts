import { DetailedHTMLProps, AnchorHTMLAttributes } from "react";

export interface CardProps extends DetailedHTMLProps<AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement> {     
    title: string  
    seria: boolean;  
    src: string;
    href: string;       
}

