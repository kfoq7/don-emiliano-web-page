import type { Product } from './Product'

export type Order = {
  totalPrice: number
  items: Partial<Product>[]
}
