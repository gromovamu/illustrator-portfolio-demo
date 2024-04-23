import { Illustration } from "@/interfaces";
import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface CardListProps extends DetailedHTMLProps<HTMLAttributes<HTMLUListElement>, HTMLUListElement> { 
    cardList: Illustration[];
    seriaDecor: true|false;
}

