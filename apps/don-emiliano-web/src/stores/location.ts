import { atom } from 'nanostores'

export type Location = {
  lat: string
  lng: string
}

export const location = atom<Location | null>(null)
