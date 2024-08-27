// интерфейсы
export interface Cover {
    id: number;
    title: string;
    url: string;
    tags?: string[];
}


export interface Illustration {
    id: number;
    seriaId: number | null;
    title: string;
    url: string;
    description?: string;
    href?: string;
    seriaTitle?: string;
}


export interface Seria {
    id: number;
    title: string;
    description: string;
    illustrationId: number;
}

export interface IllustrationData {
    id: number; 
    url: string;
    details: IllustrationDetail[];
}

export interface IllustrationDetail{    
    name: string;
    data: string;
    type: 'decor'|'text';
}




