import { Cover } from "@/interfaces";
import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface CoverListProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    coversList: Cover[];
}

