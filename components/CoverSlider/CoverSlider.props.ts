import { Cover } from "@/interfaces";
import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface CoverSliderProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {   
    coverList: Cover[];
    setActive?: (id: number, index: number) => void;    
}
