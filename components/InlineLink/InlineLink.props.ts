import { AnchorHTMLAttributes, DetailedHTMLProps, ReactNode } from "react";

export interface InlineLinkProps extends DetailedHTMLProps<AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement> {
    decor?: 'color' | 'back';
    href: string;
    children: ReactNode;
}