export interface Expense {
    id?: number,
    type: string,
    amount: number,
    description: string,
    date: string,
    category_id: number,
    category_name?: string

}