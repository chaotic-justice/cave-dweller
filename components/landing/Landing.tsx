"use client"

import { AspectRatio } from "@/components/ui/aspect-ratio"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { ArtworkQuery } from "@/tina/__generated__/types"
import { format } from "date-fns"
import Autoplay from "embla-carousel-autoplay"
import Image from "next/image"
import { useState } from "react"
import { useTina } from "tinacms/dist/react"

interface Props {
  query: string
  variables: {
    relativePath: string
  }
  data: ArtworkQuery
  lang: string
}

const Landing = (props: Props) => {
  const {
    data: { artwork },
  } = useTina({
    query: props.query,
    variables: props.variables,
    data: props.data,
  })

  const arr = artwork?.imagesList?.filter((item) => !!item?.imgSrc).map((img) => img?.imgSrc) || []
  const date = new Date(artwork.date || "")
  let formattedDate = ""
  if (!isNaN(date.getTime())) {
    formattedDate = format(date, "MMM dd, yyyy")
  }

  const [showPrev, setShowPrev] = useState(false)
  const [showNext, setShowNext] = useState(false)

  return (
    <div className="container flex items-center justify-center md:py-20 bg-background">
      {!artwork ? (
        <div className="max-w-4xl w-full px-4 sm:px-6 lg:px-8">
          <div className="bg-card rounded-lg overflow-hidden shadow-lg animate-pulse">
            <Image src={"/placeholder.svg"} alt="placeholder" width={900} height={600} className="w-full h-[600px] object-cover bg-muted" />
            <div className="p-6 sm:p-8 space-y-4">
              <div className="h-6 bg-muted rounded w-1/2" />
              <div className="h-4 bg-muted rounded w-1/3" />
              <div className="h-5 bg-muted rounded w-full" />
              <div className="h-4 bg-muted rounded w-2/3" />
            </div>
          </div>
        </div>
      ) : (
        <div className="max-w-[428px] sm:max-w-4xl sm:w-full px-4 sm:px-6 lg:px-8">
          <Carousel
            className="w-full"
            opts={{ loop: true }}
            plugins={[
              Autoplay({
                delay: 2000,
              }),
            ]}
          >
            <CarouselContent>
              {arr.map((item, i) => (
                <CarouselItem key={i}>
                  <div className="flex flex-col sm:flex-row">
                    <div className="invisible sm:visible p-8" onMouseOver={() => setShowPrev(true)} onMouseLeave={() => setShowPrev(false)}></div>
                    <Image src={item || "/placeholder.svg"} alt="Artwork" width={500} height={400} className="rounded-md object-cover" />
                    <div className="invisible sm:visible p-8" onMouseOver={() => setShowNext(true)} onMouseLeave={() => setShowNext(false)}></div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            {arr.length > 1 && (
              <>
                <CarouselPrevious className={`${!showPrev && "opacity-25"}`} />
                <CarouselNext className={`${!showNext && "opacity-25"}`} />
              </>
            )}
          </Carousel>
          <div className="p-6 sm:p-8">
            {artwork.varcharBlocks
              ?.filter((block) => block?.__typename === "ArtworkVarcharBlocksDescriptiveBlock")
              .map((block, i) => {
                const subtitle = props.lang === "en" ? block?.subtitle_en : block?.subtitle_ja
                const paragraph = props.lang === "en" ? block?.paragraph_en : block?.paragraph_ja
                return (
                  <div key={i} className="flex flex-col [&>:not(:last-child)]:mt-6 px-8">
                    <p className="text-xs/6 sm:text-base font-medium mb-2">{subtitle}</p>
                    <p className="text-xs/6 sm:text-base sm:leading-7 tracking-wider">{paragraph}</p>
                  </div>
                )
              })}
          </div>
        </div>
      )}
    </div>
  )
}

export default Landing
