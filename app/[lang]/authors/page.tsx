import AuthorsList from "@/app/[lang]/authors/component";
import { CoreParams } from "@/app/[lang]/layout"
import client from "@/tina/__generated__/client";

const page = async ({ params: { lang } }: CoreParams) => {
  const connection = await client.queries.authorConnection()

  return <AuthorsList {...connection} lang={lang} />
}

export default page;

