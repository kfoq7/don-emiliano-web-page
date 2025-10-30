import { OrderCartList } from './OrderCartList.tsx'
import { useProductItemsTotal } from '@/stores/order'
import { Divider } from '@/components/ui'

export default function OrderCart() {
  const total = useProductItemsTotal()

  return (
    <>
      <OrderCartList />
      <Divider />
      <div className="w-full flex items-center justify-between ">
        <div className="text-xl font-bold text-right uppercase">Total: S/.{total}</div>
        <button
          onClick={() => console.log('Ordening...')}
          className="px-4 py-2 bg-amber-400 rounded-md"
        >
          Ordenar
        </button>
      </div>
    </>
  )
}
