// THIS FILE HAS BEEN GENERATED WITH THE TINA CLI.
// @ts-nocheck
// This is a demo file once you have tina setup feel free to delete this file

import Head from "next/head";
import { useTina } from "tinacms/dist/react";
import { draftMode } from "next/headers";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import client from "../../../tina/__generated__/client";
import ClientPage from "@/app/blog/[filename]/ClientPage";
import ServerPage from "@/app/blog/[filename]/ServerPage";

const BlogPage = async ({ params: { filename } }) => {
  const res = await client.queries.post({
    relativePath: `${filename}.md`,
  });

  const { isEnabled } = draftMode();

  return <>{isEnabled ? <ClientPage {...res} /> : <ServerPage {...res} />}</>;
};

// const BlogPage = (props) => {
//   const { data } = useTina({
//     query: props.query,
//     variables: props.variables,
//     data: props.data,
//   });

//   return (
//     <>
//       <Head>
//         {/* Tailwind CDN */}
//         <link
//           rel="stylesheet"
//           href="https://cdnjs.cloudflare.com/ajax/libs/tailwindcss/2.2.7/tailwind.min.css"
//           integrity="sha512-y6ZMKFUQrn+UUEVoqYe8ApScqbjuhjqzTuwUMEGMDuhS2niI8KA3vhH2LenreqJXQS+iIXVTRL2iaNfJbDNA1Q=="
//           crossOrigin="anonymous"
//           referrerPolicy="no-referrer"
//         />
//       </Head>
//       <div>
//         <div
//           style={{
//             textAlign: "center",
//           }}
//         >
//           <h1 className="text-3xl m-8 text-center leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
//             {data.post.title}
//           </h1>
//           <ContentSection content={data.post.body}></ContentSection>
//         </div>
//         <div className="bg-green-100 text-center">
//           Lost and looking for a place to start?
//           <a
//             href="https://tina.io/guides/tina-cloud/getting-started/overview/"
//             className="text-blue-500 underline"
//           >
//             {" "}
//             Check out this guide
//           </a>{" "}
//           to see how add TinaCMS to an existing Next.js site.
//         </div>
//       </div>
//     </>
//   );
// };

export async function generateStaticParams() {
  const postsListData = await client.queries.postConnection();

  return postsListData.data.postConnection.edges.map((post) => ({
    filename: post.node._sys.filename,
  }));
}

export default BlogPage;

