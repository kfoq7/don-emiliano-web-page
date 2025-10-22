import { map } from 'nanostores'
import { type Product } from '@/types/Product'

export const productItems = map<Record<string, Product & { quantity: number }>>({})

export function addProductItem(item: Product) {
  const itemId = `${item.id}`
  const existingEntry = productItems.get()[itemId]
  if (existingEntry) {
    productItems.setKey(itemId, {
      ...existingEntry,
      quantity: existingEntry.quantity + 1,
    })
  } else {
    productItems.setKey(itemId, { ...item, quantity: 1 })
  }
}

export function decreaseProductItem(id: number) {
  const itemId = `${id}`
  const existingEntry = productItems.get()[itemId]
  if (existingEntry) {
    if (existingEntry.quantity > 1) {
      productItems.setKey(itemId, {
        ...existingEntry,
        quantity: existingEntry.quantity - 1,
      })
    } else {
      productItems.setKey(itemId, undefined)
    }
  }
}

export function removeProductItem(id: number) {
  const itemId = `${id}`
  productItems.setKey(itemId, undefined)
}
