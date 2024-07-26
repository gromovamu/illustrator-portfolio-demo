import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";

export interface ModalProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> { 
    isOpen: boolean;
    setIsOpen (isOpen: boolean):  void;
    children: ReactNode;
}

