class CategoriesClasification {
    code: string;
    confidence: number;
    label: string;
}

export class ClasificationModel {
    categories: CategoriesClasification[];
    language: string;
}
