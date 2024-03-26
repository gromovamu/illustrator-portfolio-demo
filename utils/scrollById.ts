
// коллекция для хранения ref-ссылок по id-ключам
const refByIdMap = new Map();

export function scrollById(id: string) {
    const node = refByIdMap.get(id);
    if (node) {
        node.scrollIntoView({ behavior: "smooth" });
    }
}

export function isIdInRefMap(id: string) {
    return !(refByIdMap.get(id) === undefined);
}

export function saveRefByID(id: string, node: HTMLElement | null) {
    if(node) {
        refByIdMap.set(id, node);
    } else {
        refByIdMap.delete(id);
    }   
}
