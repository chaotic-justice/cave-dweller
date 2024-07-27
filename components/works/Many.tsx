"use client"

import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel"
import { Link } from "@/lib/navigation"
import { ArtworkConnectionQuery } from "@/tina/__generated__/types"
import Autoplay from "embla-carousel-autoplay"
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
    <div className="p-4">
      <div className="columns-1 gap-2 md:columns-2 lg:columns-3 [&>img:not(:first-child)]:mt-4">
        {edges?.map((artwork) => {
          const pattern = /\/([^/]+)\.mdx$/
          const match = (artwork?.node?.id || "").match(pattern)
          if (match && match[1] === "landing") return null
          const arr = artwork?.node?.imagesList?.filter((item) => !!item?.imgSrc).map((img) => img?.imgSrc) || []
          return (
            <div key={artwork?.node?.id} className="pb-2 md:pb-1">
              <Link href={`/works/${match && match[1]}`}>
                {arr.length === 0 ? (
                  <Image width={500} height={400} src={"/placeholder.svg"} alt={artwork?.node?.title!} />
                ) : (
                  <Carousel className="w-full ">
                    <CarouselContent>
                      {arr.map((item, index) => (
                        <CarouselItem key={index}>
                          <Image src={item || "/placeholder.svg"} alt="Artwork" width={900} height={600} className="w-full h-[600px] object-cover" />
                          {/* <h6 className="text-right mt-4 text-gray-900 ">Lorem, ipsum dolor.</h6>
                          <p className="text-right mt-2 text-gray-700">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni reiciendis sequi ipsam incidunt.</p> */}
                        </CarouselItem>
                      ))}
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
