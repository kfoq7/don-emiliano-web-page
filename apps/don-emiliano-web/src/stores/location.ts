import { persistentAtom, persistentBoolean } from '@nanostores/persistent'

export type Location = {
  lat: number
  lng: number
}

export const delivery = persistentBoolean('delivery', false)

export const location = persistentAtom<Location | null>('location', null, {
  encode: JSON.stringify,
  decode: JSON.parse,
})
