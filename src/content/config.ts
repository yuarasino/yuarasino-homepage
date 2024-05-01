import { defineCollection, z } from "astro:content"

const newsCollection = defineCollection({
  type: "content",
  schema: () =>
    z.object({
      title: z.string(),
      date: z.date(),
      category: z.enum(["麻雀", "配信", "プログラミング"]),
    }),
})

export const collections = {
  news: newsCollection,
}
