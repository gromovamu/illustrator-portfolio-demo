import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface ShortServiceCardProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {   
    iconSrc: string;
    title: string;
    descr: string;   
}

