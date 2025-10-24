import { useEffect, useState } from 'preact/hooks'
import { useStore } from '@nanostores/preact'
import {
  productItems,
  getProductItemsTotal,
  increaseProductItem,
  decreaseProductItem,
  removeProductItem,
} from '@/stores/order'

export default function OrderCart() {
  const $products = useStore(productItems)
  const total = getProductItemsTotal()
  const [hydrated, setHydrated] = useState(false)

  useEffect(() => {
    setHydrated(true)
  }, [$products])

  if (!hydrated) {
    return (
      <div className="flex items-center justify-center h-[480px]">
        <span className="text-gray-500">Cargando carrito...</span>
      </div>
    )
  }

  return (
    <>
      <div className="h-[480px] overflow-y-auto">
        <div className="my-1 space-y-4 px-2 h-full">
          {Object.values($products).length === 0 ? (
            <div className="flex items-center justify-center h-full">
              <span className="text-gray-500">No hay productos en el carrito.</span>
            </div>
          ) : (
            Object.values($products).map(({ id, name, description, price, quantity }) => (
              <div key={id} className="p-4 border border-gray-300 rounded-md bg-white shadow-sm">
                <div className="font-semibold text-lg">{name}</div>
                <div className="text-gray-500 mb-2">{description}</div>
                <div className="flex justify-between items-center">
                  <span className="text-green-600 font-bold">S/.{price}</span>
                  <span className="text-sm text-gray-700">Cantidad: {quantity}</span>
                  <div className="flex gap-2 ml-4">
                    <button
                      className="px-2 py-1 rounded border"
                      onClick={() => increaseProductItem(id)}
                    >
                      +
                    </button>
                    <button
                      className="px-2 py-1 rounded border"
                      onClick={() => decreaseProductItem(id)}
                    >
                      -
                    </button>
                    <button
                      className="px-2 py-1 rounded border"
                      onClick={() => removeProductItem(id)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
      <div className="my-5 border h-px"></div>
      <div className="text-xl font-bold text-right uppercase">Total: S/.{total}</div>
    </>
  )
}
