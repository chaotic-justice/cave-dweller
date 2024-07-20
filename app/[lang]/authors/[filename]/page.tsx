import Author from "@/app/[lang]/authors/[filename]/component";
import client from "@/tina/__generated__/client";
import { notFound } from "next/navigation";

const page = async ({
  params: { filename, lang },
}: {
  params: { filename: string; lang: string };
}) => {
  console.log("lang on author", lang);
  let res = undefined;
  try {
    res = await client.queries.author({
      relativePath: `${lang}/${filename}.md`,
    });
    console.log("nested route.");
  } catch (error) {
    console.error(res?.errors, error);
    return notFound();
  }

  return <Author {...res} />;
};

export default page;

