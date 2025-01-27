import { Service } from "@/interfaces/service.interfaces";
import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface ShortServicesProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {   
    servicesList: Service[];
}

