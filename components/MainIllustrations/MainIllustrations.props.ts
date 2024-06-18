import { Illustration } from "@/interfaces";
import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface MainIllustrationsProps extends DetailedHTMLProps<HTMLAttributes<HTMLUListElement>, HTMLUListElement> { 
    illustrationsList: Illustration[];
}

