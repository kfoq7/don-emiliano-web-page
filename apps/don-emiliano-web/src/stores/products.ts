import { map } from 'nanostores'
import productsData from '@/lib/products.json'

export const productsStore = map<Record<number, (typeof productsData)[number]>>({})

productsData.forEach(product => {
  productsStore.setKey(product.id, product)
})
