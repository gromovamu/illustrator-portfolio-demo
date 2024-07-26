import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface CoverProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> { 
    url: string;
}

