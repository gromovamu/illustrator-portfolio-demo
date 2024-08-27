import { DetailedHTMLProps, AnchorHTMLAttributes } from "react";
import { Illustration } from "@/interfaces/data.interfaces";

export interface CardProps extends DetailedHTMLProps<AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement> {     
    data: Illustration;
    isSeriaDecor: boolean;
    src: string;
    href: string;       
}

