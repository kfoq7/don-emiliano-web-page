import { useState } from 'preact/hooks'
import { useStore } from '@nanostores/preact'
import { productsStore } from '@/stores/products.ts'
import ProductCard from './ProductCard.tsx'

export default function Order() {
  const $products = useStore(productsStore)
  const categories = ['porcion', 'guarnicion', 'jugo', 'frappe', 'caldo', 'bebidas calientes']
  const [selectedCategory, setSelectedCategory] = useState(categories[0])

  const filteredProducts = Object.values($products).filter(
    product => product.category === selectedCategory,
  )

  return (
    <>
      <div className="w-full flex space-x-2 mt-4 mb-2 overflow-x-scroll whitespace-nowrap">
        {categories.map(category => (
          <button
            key={category}
            className={`px-4 py-2 rounded cursor-pointer uppercase${
              selectedCategory === category
                ? 'bg-amber-400 text-black font-semibold'
                : 'bg-gray-200 text-gray-700'
            }`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>
      <div class="h-[480px] overflow-y-auto">
        <div className="mt-2">
          <div className="space-y-3">
            {filteredProducts.map(product => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
