"use client"

import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel"
import { Link } from "@/lib/navigation"
import { ArtworkConnectionQuery } from "@/tina/__generated__/types"
import Image from "next/image"

interface Props {
  query: string
  data: ArtworkConnectionQuery
}

const Many = ({
  data: {
    artworkConnection: { edges },
  },
}: Props) => {
  return (
    <div className="p-4 max-w-[428px] sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-xl">
      <div className="columns-1 gap-2 md:columns-2 lg:columns-3">
        {edges?.map((artwork) => {
          const pattern = /\/([^/]+)\.mdx$/
          const match = (artwork?.node?.id || "").match(pattern)
          if (match && match[1] === "landing") return null
          const caption1 = artwork?.node?.caption1
          const caption2 = artwork?.node?.caption2
          const arr = artwork?.node?.imagesList?.filter((item) => !!item?.imgSrc).map((img) => img?.imgSrc) || []
          return (
            <div key={artwork?.node?.id} className="pb-0 sm:pb-6">
              <Link href={`/works/${match && match[1]}`}>
                {arr.length === 0 ? (
                  <Image width={500} height={400} src={"/placeholder.svg"} alt={artwork?.node?.title!} />
                ) : (
                  <Carousel>
                    <CarouselContent>
                      {arr.map((item, index) => {
                        return (
                          <>
                            <CarouselItem key={index}>
                              <Image src={item || "/placeholder.svg"} alt="Artwork" width={900} height={600} className="h-fit md:max-h-64" />
                              {/* <Image src={item || "/placeholder.svg"} alt="Artwork" width={400} height={600} className="w-full sm:h-2/5 " /> */}
                              {/* <Image src={item || "/placeholder.svg"} alt="Artwork" fill sizes="100vw" style={{ objectFit: "cover" }} /> */}
                              {/* <h6 className="mt-4 text-gray-900 ">Lorem, ipsum dolor.</h6> */}
                              <div className="text-center sm:text-right">
                                <p className="mt-2 text-gray-700">{caption1}</p>
                                <p className="text-gray-700 line-clamp-1">{caption2}</p>
                              </div>
                            </CarouselItem>
                          </>
                        )
                      })}
                    </CarouselContent>
                  </Carousel>
                )}
              </Link>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Many
