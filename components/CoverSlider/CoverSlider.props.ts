import { Cover } from "@/interfaces";
import { DetailedHTMLProps, HTMLAttributes } from "react";
import { UrlObject } from "url";

export interface CoverSliderProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    coverList: Cover[];
    opt: 'btn' | 'link';
    getUrl?: (index: number) => UrlObject | string;
    onClickHandler?: (num: number) => void;
}

