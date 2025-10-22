import { useStore } from '@nanostores/preact'
import { productsStore } from '@/stores/products.ts'
import ProductCard from './ProductCard.tsx'

export default function Order() {
  const $products = useStore(productsStore)

  return (
    <div className="mt-10 space-y-3">
      {Object.values($products).map(product => (
        <ProductCard key={product.id} {...product} />
      ))}
    </div>
  )
}
