import { Service } from "@/interfaces/service.interfaces";
import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface ServicesProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {   
    servicesList: Service[];
}

