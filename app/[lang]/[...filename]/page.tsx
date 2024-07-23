import Artwork from "@/app/[lang]/[...filename]/component"
import client from "@/tina/__generated__/client"
import { notFound } from "next/navigation"

const ArtworkPage = async ({ params: { filename, lang } }: { params: { filename: string; lang: string } }) => {
  let res = undefined
  try {
    res = await client.queries.artwork({
      relativePath: `${filename}.mdx`,
    })
  } catch (error) {
    console.error(res?.errors, error)
    return notFound()
  }

  return <Artwork {...res} lang={lang} />
}

export default ArtworkPage
