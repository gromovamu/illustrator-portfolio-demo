import { Cover } from "@/interfaces";
import { DetailedHTMLProps, HTMLAttributes } from "react";
import { UrlObject } from "url";

export interface CoverSliderProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    coverList: Cover[];   
    getUrl?: (index: number) => UrlObject | string ;  
}

