type Nullable<T> = T | null

export interface Product {
    id?: number
    name: string
    price: Nullable<number>
}