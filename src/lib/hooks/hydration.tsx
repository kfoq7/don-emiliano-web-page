import { useState, useEffect, type Inputs } from 'preact/hooks'

export function useHydration({ item }: { item: Inputs }) {
  const [hydrated, setHydrated] = useState(false)

  useEffect(() => {
    setHydrated(true)
  }, [item])

  return {
    hydrated,
  }
}
