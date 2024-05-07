import { defineCollection, z } from "astro:content"

const profileCollection = defineCollection({
  type: "data",
  schema: ({ image }) =>
    z.object({
      name: z.string(),
      reading: z.string(),
      spelling: z.string(),
      position: z.string(),
      avatar: image(),
      diffs: image().array(),
      birthday: z.string(),
      funmark: z.string(),
      funart: z.string(),
      histories: z.string().array(),
    }),
})

const resumeCollection = defineCollection({
  type: "data",
  schema: ({ image }) =>
    z.object({
      name: z.string(),
      reading: z.string(),
      spelling: z.string(),
      position: z.string(),
      avatar: image(),
    }),
})

export const collections = {
  profile: profileCollection,
  resume: resumeCollection,
}
