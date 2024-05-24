import { Cover } from "@/interfaces";
import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface CoverInfoProps extends DetailedHTMLProps<HTMLAttributes<HTMLHRElement>, HTMLHRElement> {
    coversList: Cover[];
}

