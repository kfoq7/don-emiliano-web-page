import { type Order } from '@/types/Order'

export const createOrderMesesage = ({ items, totalPrice }: Order) => {
  // 1. Create an array of strings, one for each item
  const itemStrings = items.map(({ name, price }) => ` * ${name}: S/.${price}`)

  // 2. Join that array into a single string, separating each item with a newline
  const productList = itemStrings.join('\n')

  // 3. Return the final, clean message
  return `*Tu orden*

Productos Seleccionados:
${productList}

Precio total: S/.${totalPrice}
`
}
