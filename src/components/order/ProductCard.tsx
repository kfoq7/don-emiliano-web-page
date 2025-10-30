import { addProductItem } from '@/stores/order'
import type { Product } from '@/types/Product'

type Props = Product

export default function ProductCard(product: Props) {
  return (
    <div className="flex justify-between px-4 py-2 bg-white border border-gray-300/80 rounded-md drop-shadow-sm">
      <div className="flex items-center gap-4">
        {product.image && (
          <img src={product.image} alt={product.name} className="w-16 h-16 object-cover rounded" />
        )}
        <div>
          <h3 className="font-bold text-xl">{product.name}</h3>
          <p>{product.description}</p>
        </div>
      </div>

      <button
        className="p-2 bg-amber-400 rounded-md cursor-pointer"
        onClick={() => addProductItem(product)}
      >
        Agregar
      </button>
    </div>
  )
}
