class EntityTitle {
    text: string;
    scope: number;
    types: string[];
    links: object;
    indices: number[][];
}

class EntityBody {
    text: string;
    score: number;
    types: string[];
    links: object;
    indices: number[][];
}

export class EntityModel {
    title: EntityTitle[];
    body: EntityBody[];
}