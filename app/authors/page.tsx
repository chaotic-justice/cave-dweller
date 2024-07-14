import AuthorsList from "@/app/authors/component";
import client from "@/tina/__generated__/client";

const page = async () => {
  const connection = await client.queries.authorConnection();

  return <AuthorsList {...connection} />;
};

export default page;

