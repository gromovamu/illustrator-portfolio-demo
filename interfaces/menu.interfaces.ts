export interface MenuLink { 
    id: number;
    name: string;
    href: string;
}

export interface MenuLinkData { 
    left: MenuLink[];
    right: MenuLink[];
}