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
}


export interface Seria {
    id: number;
    title: string;
    description: string;
    urlCover: string;
}

export interface IllustrationData { 
    url: string;
    details: IllustrationDetail[];
}

export interface IllustrationDetail{    
    name: string;
    data: string;
    type: 'decor'|'text';
}




