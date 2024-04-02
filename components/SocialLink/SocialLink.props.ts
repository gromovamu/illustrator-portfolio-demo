//import { socialType } from "@/interfaces/social.interfaces";
import { AnchorHTMLAttributes, DetailedHTMLProps} from "react";

export interface SocialLinkProps extends DetailedHTMLProps<AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement> {
    type: string;
    href: string;  
}