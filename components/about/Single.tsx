"use client"
import { AspectRatio } from "@/components/ui/aspect-ratio"
import { useTranslations } from "next-intl"
import Image from "next/image"

type Props = {
  lang: string
}

const Single = ({ lang }: Props) => {
  const t = useTranslations("About")

  return (
    <div className="container max-w-screen-lg">
      <div className="flex flex-wrap -mx-4">
        <div className="w-full md:w-1/2 px-4 mb-8">
          <Image src={"/about.jpg"} alt="Artwork" width={400} height={500} className="rounded-md object-contain" />
        </div>
        <div className="w-full md:w-1/2 px-4 mb-8 space-y-4">
          {new Array(5).fill(-1).map((_, i) => {
            // @ts-ignore
            const line = t(`line${i}`)
            return (
              <p key={i} className="text-justify mx-auto sm:max-w-[490px] text-xs/6 sm:text-sm tracking-widest whitespace-pre-wrap">
                {line}
              </p>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Single
