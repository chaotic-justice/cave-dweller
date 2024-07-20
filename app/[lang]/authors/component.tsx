"use client";

import { AuthorConnectionQuery } from "@/tina/__generated__/types";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface Props {
  query: string;
  data: AuthorConnectionQuery;
}

const AuthorsList = ({
  data: {
    authorConnection: { edges },
  },
}: Props) => {
  const pathname = usePathname();
  console.log("pathname", pathname);
  console.log("edges", edges);
  return (
    <div>
      <h1>About</h1>
      <ol>
        {edges?.map((author) => {
          const pattern = /\/([^/]+)\.md$/;
          const match = (author?.node?.id || "").match(pattern);
          return (
            <li key={author?.node?.id}>
              <Link href={`/authors/${match && match[1]}`}>
                <h2>{author?.node?.name}</h2>
              </Link>
            </li>
          );
        })}
      </ol>
    </div>
  );
};

export default AuthorsList;

