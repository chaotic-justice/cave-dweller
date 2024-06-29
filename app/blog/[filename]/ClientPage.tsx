"use client";

import { useTina } from "tinacms/dist/react";
import ServerPage from "./ServerPage";

interface Props {
  query: string;
  variables: object;
  data: any;
}

export default function ClientPage({ query, variables, data }: Props) {
  const { data: tinaData } = useTina({
    query: query,
    variables: variables,
    data: data,
  });

  return (
    <>
      <div className="m-6 inline-block bg-red-100 p-6 uppercase text-slate-900">
        This is rendered on the Client
      </div>
      <ServerPage data={tinaData} />
    </>
  );
}

