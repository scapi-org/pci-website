import { collection, config, fields } from "@keystatic/core";

export default config({
  storage: {
    kind: import.meta.env.DEV ? "local" : "cloud",
  },
  cloud: {
    project: "pilipinasclimbing/pci-website",
  },
  collections: {
    posts: collection({
      label: "Posts",
      slugField: "title",
      path: "src/content/posts/*",
      format: { contentField: "content" },
      schema: {
        title: fields.slug({ name: { label: "Title" } }),
        content: fields.markdoc({ label: "Content" }),
      },
    }),
  },
});
