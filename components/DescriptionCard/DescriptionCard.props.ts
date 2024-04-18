import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";

export interface DescriptionCardProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {   
    iconSrc: string;   
    children: ReactNode;
}

