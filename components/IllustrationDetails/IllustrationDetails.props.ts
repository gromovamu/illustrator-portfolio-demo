import { IllustrationDetail } from "@/interfaces";
import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";

export interface IllustrationDetailsProps extends DetailedHTMLProps<HTMLAttributes<HTMLUListElement>, HTMLUListElement> {     
    data: IllustrationDetail[];   
    children?: ReactNode;

}

