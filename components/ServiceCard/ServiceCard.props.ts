import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface ServiceCardProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {   
    iconSrc: string;
    title: string;
    text: string[];   
}

