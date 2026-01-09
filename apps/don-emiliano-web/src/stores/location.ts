import { persistentAtom } from '@nanostores/persistent'

export type Location = {
  lat: number
  lng: number
}

export const delivery = persistentAtom<boolean>('delivery', false, {
  encode: JSON.stringify,
  decode: JSON.parse,
})

export const location = persistentAtom<Location | null>('location', null, {
  encode: JSON.stringify,
  decode: JSON.parse,
})
