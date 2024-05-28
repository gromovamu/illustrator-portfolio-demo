import { DetailedHTMLProps, AnchorHTMLAttributes } from "react";
import { UrlObject } from "url";

export interface CoverLinkProps extends DetailedHTMLProps<AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement> {
    srcImg: string;
    url: UrlObject | string;
}

