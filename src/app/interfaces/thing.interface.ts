export interface Thing {
    id: number
    name: string,
    user: {
        id: number,
        name: string,
        books: string[]
    }
}