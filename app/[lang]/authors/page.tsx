import AuthorsList from "@/app/[lang]/authors/component";
import client from "@/tina/__generated__/client";

type Props = {
  lang: string
}

const page = async ({ lang }: Props) => {
  const connection = await client.queries.authorConnection()

  return <AuthorsList {...connection} lang={lang} />
}

export default page;

