import { DetailedHTMLProps, AnchorHTMLAttributes } from "react";

export interface CoverProps extends DetailedHTMLProps<AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement> {     
    num:number;
    src: string;
}

