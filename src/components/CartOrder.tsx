import { useStore } from '@nanostores/preact'
import { productItems } from '@/stores/order'

export default function CartOrder() {
  const $products = useStore(productItems)

  return (
    <div class="mt-10 space-y-4">
      {Object.values($products).map(({ id, name, description, price, quantity }) => (
        <div key={id} className="p-4 border border-gray-300 rounded-md bg-white shadow-sm">
          <div className="font-semibold text-lg">{name}</div>
          <div className="text-gray-500 mb-2">{description}</div>
          <div className="flex justify-between items-center">
            <span className="text-green-600 font-bold">${price}</span>
            <span className="text-sm text-gray-700">Cantidad: {quantity}</span>
          </div>
        </div>
      ))}
    </div>
  )
}
