import { Illustration } from "@/interfaces";
import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface IllustrationProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {     
    illustrationList: Illustration[]; 
    hrefList: { id: number, href: string}[];
}

