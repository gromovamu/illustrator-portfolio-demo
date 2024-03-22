import { Social } from "@/interfaces/social.interfaces";
import {DetailedHTMLProps, HTMLAttributes } from "react";

export interface FooterProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {   
    socialLinkList: Social[];
}
