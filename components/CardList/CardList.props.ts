import { Illustration } from "@/interfaces";
import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface ContactProps extends DetailedHTMLProps<HTMLAttributes<HTMLUListElement>, HTMLUListElement> { 
    cardList: Illustration[];
}

