import type { Collection } from "tinacms";

const Artwork: Collection = {
  name: "artwork",
  label: "Artworks",
  path: "content/artworks",
  format: "mdx",
  ui: {
    router: ({ document }) => {
      return `/artworks/${document._sys.breadcrumbs.join("/")}`;
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
      label: "Description",
      name: "description",
      type: "string",
    },
    {
      label: "Category",
      name: "category",
      type: "string",
    },
    {
      type: "image",
      name: "heroImg",
      label: "Hero Image",
    },
    {
      type: "reference",
      label: "Author",
      name: "author",
      collections: ["author"],
    },
    {
      type: "datetime",
      label: "Posted Date",
      name: "date",
      ui: {
        dateFormat: "MMMM DD YYYY",
        timeFormat: "hh:mm A",
      },
    },
  ],
};

export default Artwork;

