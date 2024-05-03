import { defineCollection, z } from "astro:content"

export const collections = {
  works: defineCollection({
    type: "content",
    schema: ({ image }) =>
      z.object({
        title: z.string(),
        date: z.date(),
        order: z.number(),
        image: image(),
      }),
  }),
}
