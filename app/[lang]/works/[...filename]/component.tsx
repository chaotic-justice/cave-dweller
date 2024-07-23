"use client"

import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { ArtworkQuery } from "@/tina/__generated__/types"
import { format } from "date-fns"
import Image from "next/image"
import { useTina } from "tinacms/dist/react"

interface Props {
  query: string
  variables: {
    relativePath: string
  }
  data: ArtworkQuery
  lang: string
}

const Artwork = (props: Props) => {
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
  const { varcharBlocks } = artwork
  let varcharBlock = varcharBlocks?.find((block) => block?.lang === props.lang)
  if (!varcharBlock && varcharBlocks && varcharBlocks?.length > 0) {
    varcharBlock = varcharBlocks[0]
  }
  const { author } = artwork
  let displayName = author?.displayNames?.find((name) => name?.lang === props.lang)
  if (!displayName && author?.displayNames && author?.displayNames?.length > 0) {
    displayName = author?.displayNames[0]
  }

  return (
    <div className="flex flex-col items-center justify-center bg-background">
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
        <div className="max-w-4xl w-full px-4 sm:px-6 lg:px-8">
          <div className="bg-card rounded-lg overflow-hidden shadow-lg">
            <Carousel className="w-full" opts={{ loop: true }}>
              <CarouselContent>
                {arr.map((item, index) => (
                  <CarouselItem key={index}>
                    <div className="p-1">
                      <Image src={item || "/placeholder.svg"} alt="Artwork" width={900} height={600} />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              {arr.length > 1 && (
                <>
                  <CarouselPrevious />
                  <CarouselNext />
                </>
              )}
            </Carousel>
            {/* <div className="flex items-center justify-center mt-2 mb-8 sm:mb-12">
              {artwork.author && (
                <>
                  <div className="flex-shrink-0 mr-4">
                    <Image className="h-14 w-14 object-cover rounded-full shadow-sm" src={artwork.author.avatar || "/placeholder.svg"} alt={displayName?.value || "avatar"} width={500} height={500} />
                  </div>
                  <p className="text-base font-medium text-gray-600 group-hover:text-gray-800">{displayName?.value}</p>
                  <span className="font-bold text-gray-200 mx-2">—</span>
                </>
              )}
              <p className="text-base text-gray-400 group-hover:text-gray-500">{formattedDate}</p>
            </div> */}
            <div className="p-6 sm:p-8">
              <h2 className="text-2xl sm:text-3xl font-bold text-card-foreground">{varcharBlock?.subtitle}</h2>
              <p className="text-card-foreground text-base sm:text-lg mt-4">{varcharBlock?.description}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Artwork
