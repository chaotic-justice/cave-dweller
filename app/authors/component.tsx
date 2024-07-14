"use client";

import { AuthorConnectionQuery } from "@/tina/__generated__/types";

interface Props {
  query: string;
  data: AuthorConnectionQuery;
}

const AuthorsList = ({
  data: {
    authorConnection: { edges },
  },
}: Props) => {
  return (
    <div>
      <h1>About</h1>
      <ol>
        {edges?.map((author) => (
          <li key={author?.node?.id}>
            <h2>{author?.node?.name}</h2>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default AuthorsList;

