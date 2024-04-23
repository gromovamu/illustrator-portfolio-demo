import {DetailedHTMLProps, HTMLAttributes} from "react";

export interface NextPrevBlockProps extends DetailedHTMLProps<HTMLAttributes<HTMLHRElement>, HTMLHRElement> {
   nextUrl: string;
   prevUrl: string;
 }  

