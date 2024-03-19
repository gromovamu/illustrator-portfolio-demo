import { MenuLinkData } from "@/interfaces/menu.interfaces";
import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface BurgerMenuProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> { 
    menu: MenuLinkData;    
}

