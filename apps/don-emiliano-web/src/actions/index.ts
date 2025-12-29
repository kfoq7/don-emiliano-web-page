import { defineAction } from 'astro:actions'
import { z } from 'astro:schema'

export const server = {
  newsletters: defineAction({
    input: z.object({
      email: z.string().email(),
    }),
    async handler({ email }) {
      console.log(email)
    },
  }),
}
