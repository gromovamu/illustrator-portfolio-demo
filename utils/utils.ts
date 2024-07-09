// функция возвращает предыдущее и следующей значение в виде объекта 
export function getNextPrev<T>(index: number, arr: T[]): { prev: T | null, next: T | null } {
    return {
        prev: (index <= 0) ? null : arr[index - 1],
        next: (index >= arr.length - 1) ? null : arr[index + 1]
    };
}