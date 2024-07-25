import Many from "@/components/works/Many"
import client from "@/tina/__generated__/client"

const page = async () => {
  const connection = await client.queries.artworkConnection()

  return <Many {...connection} />
}

export default page
