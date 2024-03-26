import {AnchorHTMLAttributes, DetailedHTMLProps} from "react";

export interface LogoProps extends DetailedHTMLProps<AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement> {  
    isLink: boolean;   
} 

