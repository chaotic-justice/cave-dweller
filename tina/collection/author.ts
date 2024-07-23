import type { Collection, Template } from "tinacms"

const DisplayNameSchema: Template = {
  name: "displayName",
  label: "Display Name",
  fields: [
    {
      label: "Lang",
      name: "lang",
      type: "string",
      options: ["ja", "en"],
      required: true,
    },
    {
      name: "value",
      label: "Value",
      type: "string",
      required: true,
    },
  ],
}

const Author: Collection = {
  label: "Authors",
  name: "author",
  path: "content/authors",
  format: "md",
  ui: {
    router: ({ document }) => {
      return `/authors/${document._sys.breadcrumbs.join("/")}`
    },
  },
  fields: [
    {
      label: "Title",
      name: "title",
      type: "string",
      isTitle: true,
      required: true,
    },
    {
      label: "Avatar",
      name: "avatar",
      type: "image",
    },
    {
      type: "object",
      name: "displayNames",
      label: "Add two display names, one in [en] one in [ja].",
      list: true,
      templates: [DisplayNameSchema],
    },
  ],
}

export default Author
