import ArtworkList from "@/app/[lang]/works/component"
import client from "@/tina/__generated__/client"

const page = async () => {
  const connection = await client.queries.artworkConnection()

  return <ArtworkList {...connection} />
}

export default page
