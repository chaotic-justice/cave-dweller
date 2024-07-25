import type { Collection, Template } from "tinacms"

const varcharBlockSchema: Template = {
  label: "Body Content",
  name: "varcharBlock",
  ui: {
    defaultItem: {
      subtitle: "20th Century Boys",
      description: "Lorem markdownum evinctus ut cape adhaeret gravis licet progenies ut haesit maxima ille. Est scorpius, mori vel in visaeque Haemoniis viperei furoris e ad vasti, distulit. Crudus sub coniuge iam: dea propera sive??",
    },
  },
  fields: [
    {
      label: "Subtitle - en",
      name: "subtitle_en",
      type: "string",
    },
    {
      label: "Description - en",
      name: "description_en",
      type: "string",
      ui: {
        component: "textarea",
      },
    },
    {
      label: "Subtitle - ja",
      name: "subtitle_ja",
      type: "string",
    },
    {
      label: "Description - ja",
      name: "description_ja",
      type: "string",
      ui: {
        component: "textarea",
      },
    },
  ],
}

const Artwork: Collection = {
  name: "artwork",
  label: "Artworks",
  path: "content/artworks",
  format: "mdx",
  ui: {
    router: ({ document }) => {
      return `works/${document._sys.breadcrumbs.join("/")}`
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
      label: "mediaKind",
      name: "mediaKind",
      type: "string",
      options: ["video", "jpegs"],
      required: true,
    },
    {
      label: "Video link",
      name: "videoLink",
      type: "string",
      ui: {
        validate: (value, data) => {
          const youtubeRegex = /^https?:\/\/(?:www\.)?(?:youtube\.com\/watch\?v=|youtu\.be\/)([a-zA-Z0-9_-]{11})(?:\S+)?$/
          if (data.mediaKind === "video" && !youtubeRegex.test(value)) {
            return "Invalid youtube link"
          }
        },
      },
    },
    {
      type: "object",
      name: "imagesList",
      label: "Images",
      list: true,
      fields: [
        {
          type: "image",
          name: "imgSrc",
        },
      ],
      ui: {
        validate: (value, data) => {
          if (data.mediaKind === "jpegs" && value.length === 0) {
            return "At least one image is required"
          }
        },
        itemProps: (item) => {
          return {
            label: item?.imgSrc,
            style: {
              background: `left / contain no-repeat url(${item?.imgSrc})`,
            },
          }
        },
      },
    },
    {
      type: "object",
      name: "varcharBlocks",
      label: "补充文字内容 (Add body blocks)",
      list: true,
      templates: [varcharBlockSchema],
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
}

export default Artwork
