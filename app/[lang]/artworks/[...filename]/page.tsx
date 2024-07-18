import Artwork from "@/app/[lang]/artworks/[...filename]/component";
import client from "@/tina/__generated__/client";
import { notFound } from "next/navigation";

const ArtworkPage = async ({
  params: { filename },
}: {
  params: { filename: string };
}) => {
  let res = undefined;
  try {
    res = await client.queries.artwork({
      relativePath: `${filename}.mdx`,
    });
    console.log("nested route.");
  } catch (error) {
    console.error(res?.errors, error);
    return notFound();
  }

  return <Artwork {...res} />;
};

export default ArtworkPage;

