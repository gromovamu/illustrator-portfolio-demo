import { IllustrationData } from "@/interfaces";
import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface IllustrationDetailsProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {     
    data: IllustrationData;  
}

