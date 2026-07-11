import { glob } from "astro/loaders";
import { defineCollection } from "astro:content";
import { z } from "astro/zod";

const posts = defineCollection({
  loader: glob({
    base: "./src/content/posts",
    pattern: "**/*.mdoc",
    generateId: ({ entry }) => entry.replace(/\.mdoc$/, ""),
  }),
  schema: z.object({
    title: z.string(),
  }),
});

export const collections = { posts };
