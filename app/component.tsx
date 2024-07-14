"use client";

import { ArtworkConnectionQuery } from "@/tina/__generated__/types";
import Image from "next/image";
import Link from "next/link";

interface Props {
  query: string;
  data: ArtworkConnectionQuery;
}

const ArtworkList = ({
  data: {
    artworkConnection: { edges },
  },
}: Props) => {
  return (
    <div className="p-4">
      <div className="columns-1 gap-2 sm:columns-2 sm:gap-4 md:columns-3 lg:columns-4 [&>img:not(:first-child)]:mt-4">
        {edges?.map((artwork) => {
          const pattern = /\/([^/]+)\.mdx$/;
          const match = (artwork?.node?.id || "").match(pattern);
          console.log("match", match);
          return (
            <div key={artwork?.node?.id}>
              <Link href={`/${match && match[1]}`}>
                <Image
                  width={500}
                  height={400}
                  src={artwork?.node?.heroImg || "/placeholder.svg"}
                  alt={artwork?.node?.title || "alt"}
                />
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ArtworkList;

