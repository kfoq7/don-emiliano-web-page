import { useState } from 'preact/hooks'
import { useStore } from '@nanostores/preact'
import { productsStore } from '@/stores/products.ts'
import ProductCard from './ProductCard.tsx'

export default function Order() {
  const $products = useStore(productsStore)
  const categories = ['porciones', 'bebidas calientes', 'guarniciones', 'jugos', 'frappes', 'caldo']
  const [selectedCategory, setSelectedCategory] = useState(categories[0])

  const filteredProducts = Object.values($products).filter(
    product => product.category === selectedCategory,
  )

  return (
    <>
      <div className="w-[125%] mt-4 mb-2">
        <div className="flex space-x-2 overflow-x-auto">
          {categories.map(category => (
            <button
              key={category}
              className={`px-4 py-2 rounded cursor-pointer uppercase ${
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
