import { Illustration } from "@/interfaces";
import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";

export interface CardListProps extends DetailedHTMLProps<HTMLAttributes<HTMLUListElement>, HTMLUListElement> { 
    cardList: Illustration[];
    seriaDecor: true|false;
}

export interface CardItemProps extends DetailedHTMLProps<HTMLAttributes<HTMLLIElement>, HTMLLIElement> { 
    index: number;
    isCanOpen: boolean;
    handleSetCanOpen: (i: number) => void;
    children: ReactNode;
}

