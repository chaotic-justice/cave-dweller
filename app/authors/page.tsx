import client from "@/tina/__generated__/client";
import { draftMode } from "next/headers";

const page = async () => {
  const authorsList = await client.queries.authorConnection();
  const res = authorsList.data.authorConnection.edges;
  console.log("res", res);
  const { isEnabled } = draftMode();
  console.log("isEnabled", isEnabled);

  return (
    <div>
      <h1>About</h1>
      <ol>
        {(res || []).map((author) => (
          <li key={author?.node?.id}>
            <h2>{author?.node?.name}</h2>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default page;

