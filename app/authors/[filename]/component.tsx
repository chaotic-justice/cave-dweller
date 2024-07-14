"use client";

import { AuthorQuery } from "@/tina/__generated__/types";
import { useTina } from "tinacms/dist/react";

interface Props {
  query: string;
  variables: {
    relativePath: string;
  };
  data: AuthorQuery;
}

const Author = (props: Props) => {
  const {
    data: { author },
  } = useTina({
    query: props.query,
    variables: props.variables,
    data: props.data,
  });

  return (
    <div>
      <code>
        <pre
          style={{
            backgroundColor: "lightgray",
          }}
        >
          {JSON.stringify(author, null, 2)}
        </pre>
      </code>
    </div>
  );
};

export default Author;

