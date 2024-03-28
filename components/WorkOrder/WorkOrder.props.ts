import { WorkData } from "@/interfaces";
import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface WorkOrderProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {   
    workData: WorkData;
}

