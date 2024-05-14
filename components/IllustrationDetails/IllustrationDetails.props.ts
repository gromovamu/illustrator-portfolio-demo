import { IllustrationData } from "@/interfaces";
import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";

export interface IllustrationDetailsProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {     
    data: IllustrationData; 
    nav?: boolean; 
    children?: ReactNode;

}

