import AuthorsList from "@/app/[lang]/authors/component";
import client from "@/tina/__generated__/client";

const page = async ({ params: { lang } }: { params: { lang: string } }) => {
  const connection = await client.queries.authorConnection()

  return <AuthorsList {...connection} lang={lang} />
}

export default page;

