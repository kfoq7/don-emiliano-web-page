/// <reference types="astro/client" />

import type { User } from '@/types/User'

interface ImportMetaEnv {
  readonly PUBLIC_API_URL: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}

declare global {
  namespace App {
    interface Locals {
      user: null | User
    }
  }

  interface Window {
    L: any
  }
}
