import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";

export interface InfoCardProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {     
    children: ReactNode;
}

