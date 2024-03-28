export interface Definition {
    term: string;
    description: string;
}

export interface WorkData{    
    descr: string;
    steps: string[];
    info?: Definition[];
}