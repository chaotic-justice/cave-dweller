import type { Collection } from "tinacms";

const Author: Collection = {
  label: "Authors",
  name: "author",
  path: "content/authors",
  format: "md",
  ui: {
    router: ({ document }) => {
      return `/authors/${document._sys.breadcrumbs.join("/")}`;
    },
  },
  fields: [
    {
      label: "Name",
      name: "name",
      type: "string",
      isTitle: true,
      required: true,
    },
    {
      label: "Avatar",
      name: "avatar",
      type: "image",
    },
  ],
};

export default Author;


