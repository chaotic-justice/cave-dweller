"use client";

import { ArtworkQuery } from "@/tina/__generated__/types";
import Image from "next/image";
import { useTina } from "tinacms/dist/react";

interface Props {
  query: string;
  variables: {
    relativePath: string;
  };
  data: ArtworkQuery;
}

const Artwork = (props: Props) => {
  const {
    data: { artwork },
  } = useTina({
    query: props.query,
    variables: props.variables,
    data: props.data,
  });

  return (
    <div className="flex flex-col items-center justify-center bg-background">
      {!artwork ? (
        <div className="max-w-4xl w-full px-4 sm:px-6 lg:px-8">
          <div className="bg-card rounded-lg overflow-hidden shadow-lg animate-pulse">
            <Image
              src={"/placeholder.svg"}
              alt="placeholder"
              width={900}
              height={600}
              className="w-full h-[600px] object-cover bg-muted"
            />
            <div className="p-6 sm:p-8 space-y-4">
              <div className="h-6 bg-muted rounded w-1/2" />
              <div className="h-4 bg-muted rounded w-1/3" />
              <div className="h-5 bg-muted rounded w-full" />
              <div className="h-4 bg-muted rounded w-2/3" />
            </div>
          </div>
        </div>
      ) : (
        <div className="max-w-4xl w-full px-4 sm:px-6 lg:px-8">
          <div className="bg-card rounded-lg overflow-hidden shadow-lg">
            <Image
              src={artwork.heroImg || "/placeholder.svg"}
              alt="Artwork"
              width={900}
              height={600}
              className="w-full h-[600px] object-cover"
            />
            <div className="p-6 sm:p-8">
              <h2 className="text-2xl sm:text-3xl font-bold text-card-foreground">
                {artwork.title}
              </h2>
              <p className="text-muted-foreground text-sm sm:text-base mt-2">
                {artwork.date}
              </p>
              <p className="text-card-foreground text-base sm:text-lg mt-4">
                {artwork.description}
              </p>
              <p className="text-muted-foreground text-sm sm:text-base mt-2">
                By {artwork.author?.name || "unknown artist"}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Artwork;

