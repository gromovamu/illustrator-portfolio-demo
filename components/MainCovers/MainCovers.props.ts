import { Cover } from "@/interfaces";
import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface MainCoversProps extends DetailedHTMLProps<HTMLAttributes<HTMLUListElement>, HTMLUListElement> { 
    coversList: Cover[];
}

