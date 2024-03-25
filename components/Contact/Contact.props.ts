import { ContactData } from "@/interfaces/contact.interfaces";
import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface ContactProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> { 
    mail: ContactData;
    telegram: ContactData;  
}

