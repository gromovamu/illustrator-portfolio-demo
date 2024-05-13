import { IllustrationData, Seria } from "@/interfaces";
import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface SeriaProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {   
    seria: Seria;
    illustrationDataList: IllustrationData[];
}

